const express = require("express");

const router = express.Router();


const { createTickets, getTickets } = require("../controllers/tickets");



router.post("/", createTickets);
router.get("/", getTickets);

module.exports = router