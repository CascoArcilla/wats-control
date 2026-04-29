const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

// Basic route test
app.get('/api/health', (req, res) => {
  res.json({ status: 'API Eletrican Control running...' });
});

// Routes placeholders
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/meters', require('./routes/meters'));
// app.use('/api/consumptions', require('./routes/consumptions'));

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: true }).then(() => {
  console.log('Database connected and synced (tables recreated)');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to sync database:', err);
});
