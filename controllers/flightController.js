const models = require("../models/Flight");
const { v4: uuidv4 } = require("uuid");

// Add/Book Flight
const addBookFlight = (req, res) => {
  const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
  models.exampleModel.push({ ...req.body, id: id });
  res.send(models.exampleModel);
};

// Get all Flight
const getAllFlights = (req, res) => {
  console.log("example");
  res.send(models.exampleModel);
};

// Get single Flight
const getSingleFlight = (req, res) => {
  const { id } = req.params;
  const getFlight = models.exampleModel.find((flight) => flight.id === id);
  res.send(getFlight);
};

// Update/Edit Flight
const editFlight = (req, res) => {
  const { id } = req.params;
  const { title, time, date, price } = req.body;
  const updateFlight = models.exampleModel.find((flight) => flight.id === id);
  if (title) models.exampleModel.title = title;
  if (time) models.exampleModel.time = time;
  if (date) models.exampleModel.date = date;
  if (price) models.exampleModel.price = price;
  res.send(updateFlight);
};

// Delete Flight
const deleteFlight = (req, res) => {
  const { id } = req.params;
  const deleteFlight = models.exampleModel.filter((flight) => flight.id !== id);
  res.send(deleteFlight);
};

module.exports = {
  addBookFlight,
  getAllFlights,
  getSingleFlight,
  editFlight,
  deleteFlight,
};
