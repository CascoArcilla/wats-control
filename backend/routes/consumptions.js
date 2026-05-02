const { Router } = require('express');
const router = Router();
const cc = require('../controllers/consumptionsController');
const { verifyToken } = require('../middleware/authMiddleware');

const auth = [verifyToken];

router.post('/', ...auth, cc.register);

module.exports = router;