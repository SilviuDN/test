const express = require('express')
const router = express.Router()

const Lecture = require('./../models/Lecture.model')


// router.get('/', (req, res) => {

//     Lecture
//         .find()
//         .sort({ position: 1 })
//         .then(response => res.json(response))
//         // .then(response => setTimeout(() => res.json(response), 200))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching lectures', err }))
// })


// router.get('/:lecture_id', (req, res) => {

//     Lecture
//         .findById(req.params.lecture_id)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error fetching lectures', err }))
// })


router.post('/new', (req, res) => {

    const lecture = req.body

    Lecture
        .create(lecture)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving lectures', err }))
})


// router.put('/edit/:lecture_id', (req, res) => {

//     const lecture = req.body

//     Lecture
//         .findByIdAndUpdate(req.params.lecture_id, lecture)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json({ code: 500, message: 'Error editing lectures', err }))
// })


module.exports = router