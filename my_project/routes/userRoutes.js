const express = require('express');
const router = express.Router();
const client = require('../db/db.js');

router.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM solicitudes');
    res.render('admin', { title: 'Panel de Administración', solicitudes: result.rows });
  } catch (error) {
    console.error('Error al obtener solicitudes:', error);
    res.status(500).send('Error al obtener solicitudes');
  }
});

module.exports = router;
