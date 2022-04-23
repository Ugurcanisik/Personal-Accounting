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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const settings_service_1 = require("../settings/settings.service");
const customer_service_1 = require("../customer/customer.service");
const duty_service_1 = require("../duty/duty.service");
const customerdetails_service_1 = require("../customerdetails/customerdetails.service");
let DashboardService = class DashboardService {
    constructor(SettingsService, CustomerService, DutyService, CustomerDetailsService) {
        this.SettingsService = SettingsService;
        this.CustomerService = CustomerService;
        this.DutyService = DutyService;
        this.CustomerDetailsService = CustomerDetailsService;
    }
    allSetting() {
        return this.SettingsService.findAll();
    }
    totalCustomer() {
        return this.CustomerService.countCustomer();
    }
    sahisIsletmeCount() {
        return this.CustomerDetailsService.sahisIsletmeCount();
    }
    sahisSmCount() {
        return this.CustomerDetailsService.sahisSmCount();
    }
    sahisBilancoCount() {
        return this.CustomerDetailsService.sahisBilancoCount();
    }
    limitedCount() {
        return this.CustomerDetailsService.limitedCount();
    }
    asCount() {
        return this.CustomerDetailsService.asCount();
    }
    checkDuty(id) {
        return this.DutyService.alinan(id);
    }
    yCount() {
        return this.CustomerDetailsService.yCount();
    }
    mCount() {
        return this.CustomerDetailsService.mCount();
    }
    hCount() {
        return this.CustomerDetailsService.hCount();
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        customer_service_1.CustomerService,
        duty_service_1.DutyService,
        customerdetails_service_1.CustomerdetailsService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map