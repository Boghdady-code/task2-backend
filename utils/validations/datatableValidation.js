const { body } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");


exports.createDataTableValidation =  [
    body("name").notEmpty().withMessage("name is required"),
    body("sortable").notEmpty().withMessage("sortable is required"),
    body("sortBy").notEmpty().withMessage("sortBy is required"),
    validatorMiddleware
];