"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var path_1 = require("path");
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    db_port: process.env.PORT,
    db_url: process.env.DB_URL,
    BycrptsaltRounds: process.env.BycrptsaltRounds,
    default_password: process.env.defaultPassword
};
