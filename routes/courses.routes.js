const express = require('express')
const router = express.Router()

const Course = require('./../models/Course.model')


router.get('/', (req, res) => {

    Course
        .find()
        .sort({ position: 1 })
        .then(response => res.json(response))
        // .then(response => setTimeout(() => res.json(response), 200))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching courses', err }))
})


router.get('/:course_id', (req, res) => {

    Course
        .findById(req.params.course_id)
        .populate('lectures')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching courses', err }))
})


router.post('/new', (req, res) => {

    const course = req.body

    Course
        .create(course)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving courses', err }))
})


router.put('/edit/:course_id', (req, res) => {

    const course = req.body

    Course
        .findByIdAndUpdate(req.params.course_id, course)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing courses', err }))
})


module.exports = router