const express = require('express');
const residenceController = require('./../controllers/residenceController');

const Router = express.Router();

Router
.route('/')
.get(residenceController.getAllComplaints)
.post(residenceController.createComplaint);

Router
.route('/:id')
.get(residenceController.getComplaint)
.patch(residenceController.updateComplaint)
.delete(residenceController.deleteComplaint)

module.exports = Router;