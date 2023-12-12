// controllers/eateriesController.js
const eateryModel = require('../models/eatery');

function index(req, res) {
  const eateries = eateryModel.getAll();
  res.json(eateries);
}

function show(req, res) {
  const id = parseInt(req.params.id, 10);
  const eatery = eateryModel.getOne(id);

  if (eatery) {
    res.json(eatery);
  } else {
    res.status(404).json({ error: 'Eatery not found' });
  }
}

module.exports = {
  index,
  show
};
