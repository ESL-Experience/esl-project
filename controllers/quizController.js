// import {Router} from "react-router";
const { User } = require("../models");


const saveQuiz = (req, res) => {
    console.log(req.user._id)
    console.log(req.body)

User.updateOne({
    _id: req.user._id, 'activities.title' : {$ne: req.body.title }
    }, 
    {
    $push: {
    activities:{
        title: req.body.title,
        date: req.body.dateTaken,
        quizData: req.body.actRes,
        numTaken: 1,
      }, 
    }
    },
    function(err, response){

    if (err) {
        console.log("err:", err)
        res.send(err);
    } 
    else {
        if(response.n === 0)
        {
            console.log("Found exiting activity")
            User.updateOne({
                _id: req.user._id, 'activities.title' : req.body.title 
                }, 
                {
                $set: {
                    'activities.$.date' : req.body.dateTaken,
                    'activities.$.quizData' : req.body.actRes,
                },
                $inc: {
                    'activities.$.numTaken'  : 1
                }
                },
                function(err, response){
                
                if (err) {
                    console.log("err:", err)
                    res.send(err);
                } 
                else {
                    console.log(response);
                    res.send(response);
                }
            });
        }
        else {
       
        console.log(response);
        res.send(response);
        }
    }
});
};

module.exports = {
  saveQuiz,
};
