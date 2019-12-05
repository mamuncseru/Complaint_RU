const Complaint = require('./../models/administrationModel');


exports.getAllComplaints = async(req, res) => {
    try
    {
        const complaints = await Complaint.find()

        res.status(200).json({
            status: 'success',
            results: complaints.length,
            data:{
                complaints
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.getComplaint = async(req, res) => {
    try
    {
        const complaint = await Complaint.findByID(req.params.id);

        res.status(200).json({
            status: 'success',
            data:{
                complaint
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.createComplaint = async (req, res) => {
    try {
        var newComplaint = await Complaint.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                complaint: newComplaint
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};
exports.updateComplaint = async(req, res) => {
    try {
        const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                complaint
            }
        })

    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.deleteComplaint = async(req, res) => {
    try {
        res.status(204).json({
            status: 'success',
            data: null
        });
    
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

