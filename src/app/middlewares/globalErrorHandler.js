"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var globalErrorHandler = function (err, req, res, next) {
    var statusCode = 500;
    var message = "something wrong";
    return res.status(statusCode).json({
        success: false,
        message: message,
        error: err
    });
};
exports.globalErrorHandler = globalErrorHandler;
