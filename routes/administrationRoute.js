const express = require('express');
const administrationController = require('../controllers/administrationController');

const Router = express.Router();

Router
.route('/')
.get(administrationController.getAllComplaints)
.post(administrationController.createComplaint);

Router
.route('/:id')
.get(administrationController.getComplaint)
.patch(administrationController.updateComplaint)
.delete(administrationController.deleteComplaint)

module.exports = Router;