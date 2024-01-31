const express = require('express');
const router=express.Router();
const {getGoal,setGoal,deleteGoal,updateGoal}=require('../controllers/goalController')


router.route('/').get(getGoal).post(setGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports= router

// exports.router=router;