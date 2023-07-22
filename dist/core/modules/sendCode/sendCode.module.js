"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SendCodeModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCodeModule = void 0;
const common_1 = require("@nestjs/common");
const sendCode_controller_1 = require("../../controllers/sendCode/sendCode.controller");
const sendCode_service_1 = require("../../services/sendCode/sendCode.service");
const axios_1 = require("@nestjs/axios");
let SendCodeModule = SendCodeModule_1 = class SendCodeModule {
};
SendCodeModule = SendCodeModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [SendCodeModule_1, axios_1.HttpModule],
        controllers: [sendCode_controller_1.SendCodeController],
        providers: [sendCode_service_1.SendCodeService],
    })
], SendCodeModule);
exports.SendCodeModule = SendCodeModule;
//# sourceMappingURL=sendCode.module.js.map