const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    complaint_category: {
        type: String,
        default: "Residence"
    },
    student_id: {
        type: Number,
        required: [true, 'A student must has a id']
    },
    name: {
        type: String,
        required: [true, 'A student must has a name']
    },
    department: {
        type: String,
        required: [true, 'A student must has a department']
    },
    complaint: {
        type: String,
        required: [true, 'A student must have a complaint']
    }

});
const complaint = mongoose.model('Residence', complaintSchema);

module.exports = complaint;