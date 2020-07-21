const router = require('express').Router();
const controller = require('../controllers/quizController')


router.put('/api/:id/save-quiz', (req, res) => {
    // console.log(req.body)
    controller.saveQuiz (req, res)
})

module.exports = router;