"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("./Models/test"));
var Incident_1 = __importDefault(require("./Models/Incident"));
var User_1 = __importDefault(require("./Models/User"));
exports.default = {
    Test: test_1.default,
    Incident: Incident_1.default,
    User: User_1.default
};
