const express = require('express');
const academicController = require('./../controllers/academicController');

const Router = express.Router();

Router
.route('/')
.get(academicController.getAllComplaints)
.post(academicController.createComplaint);

Router
.route('/:id')
.get(academicController.getComplaint)
.patch(academicController.updateComplaint)
.delete(academicController.deleteComplaint)

module.exports = Router; 