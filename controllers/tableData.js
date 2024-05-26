const asyncHandler = require("express-async-handler");
const apiError = require("../utils/apiError");
const db = require("../models");

exports.createDataTable = asyncHandler(async (req, res, next) => {
    const result = await db.sequelize.transaction(async (t) => {
        const { name, sortable, sortBy} = req.body;
        console.log(name, sortable, sortBy)
        
        const tableData = await db.dataTable.create({
            name,
            sortable,
            sortBy
        }, { transaction: t });
        res.status(200).json({
            status: "success",
            data: tableData,
        });
    });
})


exports.getDataTable = asyncHandler(async (req, res, next) => {
        const tableData = await db.dataTable.findAll({
        });
        res.status(200).json({
            status: "success",
            data: tableData,
        });
   
})