const express = require('express');
const transportController = require('./../controllers/transportController');

const Router = express.Router();

Router
.route('/')
.get(transportController.getAllComplaints)
.post(transportController.createComplaint);

Router
.route('/:id')
.get(transportController.getComplaint)
.patch(transportController.updateComplaint)
.delete(transportController.deleteComplaint)

module.exports = Router;