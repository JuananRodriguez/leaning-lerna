"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../Constraints/User"));
var validate_js_1 = require("validate.js");
var User = (function () {
    function User() {
        var _this = this;
        this.validate = function () {
            return validate_js_1.validate(_this.getData(), User_1.default);
        };
        this.getData = function () {
            var obj = {};
            var instance = _this;
            Object.keys(_this).map(function (key) {
                if (!_this.exclude.includes(key))
                    obj[key] = instance[key];
            });
            return obj;
        };
        this._id = '';
        this.name = "string tonto";
        this.surname = "string tonto";
        this.email = "string tonto";
        this.telephone = "string tonto";
        this.exclude = ['exclude', 'validate', 'getData'];
    }
    return User;
}());
exports.default = User;
