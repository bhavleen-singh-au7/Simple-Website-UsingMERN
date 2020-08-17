const express = require('express');
const { Router } = require("express");
const { check, validationResult } = require('express-validator');
const { signup, signin, signout } = require('../controllers/user');
const router = express.Router();

router.post("/signup", [
  check("name", "name should be at least 3 characters").isLength({ min: 3 }),
  check("email", "Email is required in correct format").isEmail(),
  check("phoneNumber", "10 digits allowed only").isMobilePhone(),
  check("password", "please provide the password more than 6 characters").isLength({ min: 6 })
], signup);

router.post("/signin", [
  check("email", "Email is required in correct format").isEmail(),
  check("password", "password field is required").isLength({ min: 1 })
], signin);


router.get("/signout", signout);

module.exports = router;