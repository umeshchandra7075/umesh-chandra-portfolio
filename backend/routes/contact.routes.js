const express = require("express");
const router = express.Router();

const { sendMail } = require("../controllers/contact.controller");

router.post("/", sendMail);

module.exports = router;