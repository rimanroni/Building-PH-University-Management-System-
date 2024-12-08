"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFund = void 0;
var http_status_codes_1 = require("http-status-codes");
var notFund = function (req, res, next) {
    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'api not found ',
        error: ""
    });
};
exports.notFund = notFund;
