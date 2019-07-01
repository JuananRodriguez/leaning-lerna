"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zone_1 = require("../Enums/Zone");
var Status_1 = require("../Enums/Status");
var Incident = (function () {
    function Incident() {
        this._id = 354554;
        this.family = 'more';
        this.subfamily = 'more';
        this.zone = Zone_1.Zone['SLR'];
        this.user = "asdadassd";
        this.status = Status_1.Status.close;
        this.validated = false;
        this.presenterName = 'string tonto';
        this.presenterSurname = 'string tonto';
        this.presenterEmail = 'string tonto';
        this.presenterTelephone = 'string tonto';
        this.description = 'string tonto';
        this.city = 'string tonto';
        this.number = 'string tonto';
        this.street = 'string tonto';
        this.zipCode = 41500;
        this.coords = [213, 13453];
        this.images = { url: '', creDate: '', uploader: '' };
        this.creDate = 53465;
        this.modDate = 44654564;
    }
    return Incident;
}());
exports.default = Incident;
