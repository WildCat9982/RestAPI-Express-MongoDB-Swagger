'use strict';

const mongoose = require('mongoose')
const Model = mongoose.model('User')


const create = (req, res) => {
    var model = new Model(req.body)
    model.save( (err, model) => {
        if (err)
            res.status(500).json({ success: false, message: err.message })
        res.json(model)
    })
}

const read = (req, res) => {
    Model.findById(req.params.id, (err, model) => {
        if (err)
            res.status(500).json({ success: false, message: err.message })
        res.json(model)
    })
}

const readAll = (req, res) => {
    // console.log(req)
    Model.find(req.query, (err, model) => {
        if (err)
            res.status(500).json({ success: false, message: err.message })
        res.json(model)
    })
}

const update = (req, res) => {
    Model.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, model)=>{
        if (err)
            res.status(500).json({ success: false, message: err.message })
        res.json(model)
    })
}

const remove = (req, res) => {
    Model.remove({_id: req.params.id}, (err, model) => {
        if (err)
            res.status(500).json({ success: false, message: err.message })
        res.json({ success: true, message: 'Record has been removed successfully.'})
    })
}

module.exports = {
    create, 
    read, 
    readAll,
    update,
    remove
}
