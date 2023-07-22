"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCodeController = void 0;
const common_1 = require("@nestjs/common");
const sendCode_service_1 = require("../../services/sendCode/sendCode.service");
const microservices_1 = require("@nestjs/microservices");
let SendCodeController = class SendCodeController {
    constructor(sendCodeService) {
        this.sendCodeService = sendCodeService;
    }
    async sendCode(sendTGData) {
        return await this.sendCodeService.sendCodeTG(sendTGData);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('send'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SendCodeController.prototype, "sendCode", null);
SendCodeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [sendCode_service_1.SendCodeService])
], SendCodeController);
exports.SendCodeController = SendCodeController;
//# sourceMappingURL=sendCode.controller.js.map