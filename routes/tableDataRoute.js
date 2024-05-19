const express = require("express");

const router = express.Router();


const { createDataTable, getDataTable } = require("../controllers/tableData");


router.post("/", createDataTable);


router.get("/", getDataTable);





module.exports = router