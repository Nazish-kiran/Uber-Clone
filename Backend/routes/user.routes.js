import express from 'express'
import {body} from "express-validator"
import {registerUser} from '../controllers/user.controller.js'

const router = express.Router()

router.post('/register',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('firstname').isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body('lastname').isLength({min:3}).withMessage("Last name must be at least 3 characters long")
],registerUser)


export default router 