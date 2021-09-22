'use strict'

const router = require('express').Router()
const { create, read, readAll, update, remove } = require('./user.controller')

router.route('/')
    .get(readAll)
    .post(create)

router.route('/:id')
    .get(read)
    .put(update)
    .delete(remove)

module.exports = router
