const { body } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");



exports.createTicketValidation =  [
    body("ticketNo").notEmpty().withMessage("ticketNo is required"),
    body("title").notEmpty().withMessage("title is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("status").notEmpty().withMessage("status is required"),
    body("date").notEmpty().withMessage("date is required"),
    body("time").notEmpty().withMessage("time is required"),
    body("done").optional().isBoolean().withMessage("Must be a boolean"),
    body("actions").notEmpty().withMessage("actions is required").isArray().withMessage("Must be an array"),
    validatorMiddleware
];



