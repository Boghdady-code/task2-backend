const express = require("express");

const router = express.Router();

const { createDataTableValidation } = require("../utils/validations/datatableValidation");


const { createDataTable, getDataTable } = require("../controllers/tableData");


router.post("/", createDataTableValidation,createDataTable);


router.get("/", getDataTable);





module.exports = router