const express = require("express");

const router = express.Router();

const {createTicketValidation } = require("../utils/validations/ticketValidation");
const { createTickets, getTickets } = require("../controllers/tickets");



router.post("/", createTicketValidation , createTickets);
router.get("/", getTickets);

module.exports = router