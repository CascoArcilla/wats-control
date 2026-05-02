const { Op, where } = require('sequelize');
const { Meter, Measure, User, Group } = require('../models');

exports.register = async (request, response) => {
  try {
    const { meter, watts } = request.body;

    if (!meter || !watts) {
      return response.status(400).json({
        message: 'Medidor y consumo son obligatorios.',
        success: false
      });
    }

    const parsedWatts = parseInt(watts);
    if (isNaN(parsedWatts) || parsedWatts < 0) {
      return response.status(400).json({
        message: 'Consumo debe ser un número mayor o igual a 0.',
        success: false
      });
    }

    const currentUser = await User.findByPk(request.userId);
    if (!currentUser) {
      return response.status(404).json({
        message: 'Usuario no encontrado.',
        success: false
      });
    }

    const meterFound = await Meter.findOne({
      where: { id: meter.id },
      include: [{ model: User, as: 'AuthorizedUsers' }]
    });

    if (!meterFound) {
      return response.status(404).json({
        message: 'Medidor no encontrado.',
        success: false
      });
    }

    const userGroups = request.userGroups;
    const isAdmin = userGroups.includes('Administrador');
    const isProvider = meterFound.userId === currentUser.id;
    const isAuthorized = meterFound.AuthorizedUsers.some(user => user.id === currentUser.id);
    if (!isAdmin && !isProvider && !isAuthorized) {
      return response.status(403).json({
        message: 'No tienes permiso para registrar consumo en este medidor.',
        success: false
      });
    }

    const previusMeasure = await Measure.findOne({
      where: { meterId: meterFound.id },
      order: [['createdAt', 'DESC']]
    });

    if (previusMeasure && previusMeasure.watts > watts) {
      return response.status(400).json({
        message: 'El consumo no puede ser menor al anterior.',
        success: false
      });
    }

    const consumption = await Measure.create({
      userId: currentUser.id,
      meterId: meterFound.id,
      watts: parsedWatts
    });

    return response.status(201).json({
      message: 'Consumo registrado exitosamente.',
      success: true,
      consumption
    });
  } catch (error) {
    console.error('Error al registrar el consumo:', error);
    return response.status(500).json({
      message: 'Error al registrar el consumo.',
      success: false
    });
  }
}