const asyncHandler = require("express-async-handler");
const apiError = require("../utils/apiError");
const db = require("../models");
// const sequelize = require("sequelize");



exports.createTickets = asyncHandler(async (req, res, next) => {
    const result = await db.sequelize.transaction(async (t) => {
        const {
            ticketNo,
            title,
            description,
            status,
            date,
            time,
            done,
        } = req.body;
        if (!ticketNo || !title || !description || !status || !date || !time || !done) {
            throw new apiError("All fields are required", 400);
        }
        const ticket = await db.tickets.create(req.body, { transaction: t });
        res.status(200).json({
            status: "success",
            data: ticket,
          });
    
        
    })
    

})

exports.getTickets = asyncHandler(async (req, res, next) => {
    const tickets = await db.tickets.findAll();
    res.status(200).json({
        status: "success",
        data: tickets,
      });
})


