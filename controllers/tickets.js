const asyncHandler = require("express-async-handler");
const apiError = require("../utils/apiError");
const { pagination } = require('../helpers/pagination');
const db = require("../models");


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
            actions
        } = req.body;
        // if (!ticketNo || !title || !description || !status || !date || !time || !done || !actions) {
        //     throw new apiError("All fields are required", 400);
        // }
        const ticket = await db.tickets.create(req.body, { transaction: t });
        res.status(200).json({
            status: "success",
            data: ticket,
        });  
    })
})



exports.getTickets = asyncHandler(async (req, res, next) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const per_page = req.query.per_page ? parseInt(req.query.per_page) : 3;
    const {order} = req.query;
    const orderQuery = order ? [order, 'DESC'] : ['date', 'DESC'];



    
    const { rows, count } = await db.tickets.findAndCountAll({
        offset: (page - 1) * per_page,
        limit: per_page,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        order: [orderQuery],
        
        
        
    });
    const result = pagination({
        data: rows,
        count,
        page,
        per_page
    });
    res.status(200).json({
        status: "success",
        data: result,
    });
})


