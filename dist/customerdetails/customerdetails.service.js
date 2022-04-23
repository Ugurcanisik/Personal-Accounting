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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerdetailsService = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("../customer/customer.service");
const typeorm_1 = require("@nestjs/typeorm");
const customerdetail_entity_1 = require("./entities/customerdetail.entity");
const typeorm_2 = require("typeorm");
const settings_service_1 = require("../settings/settings.service");
let CustomerdetailsService = class CustomerdetailsService {
    constructor(CustomerDetailsRepository, customerService, SettingsService) {
        this.CustomerDetailsRepository = CustomerDetailsRepository;
        this.customerService = customerService;
        this.SettingsService = SettingsService;
    }
    allSetting() {
        return this.SettingsService.findAll();
    }
    async create(CreateCustomerdetailDto) {
        const newUser = await this.CustomerDetailsRepository.create(CreateCustomerdetailDto);
        return await this.CustomerDetailsRepository.save(newUser);
    }
    async allCustomer() {
        return await this.customerService.findAll();
    }
    async findAll() {
        return await this.CustomerDetailsRepository.find({
            relations: ["customerid"],
            where: { deleted: false }
        });
    }
    async sahisIsletmeCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { companytype: "Şahıs-İşletme", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async sahisSmCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { companytype: "Şahıs-SM", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async sahisBilancoCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { companytype: "Şahıs-Bilanço", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async limitedCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { companytype: "Limited", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async asCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { companytype: "A.Ş", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async yCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { sm: "Y", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async mCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { sm: "M", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async hCount() {
        const all = await this.CustomerDetailsRepository.find({ where: { sm: "H", deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async findOne(id) {
        return await this.CustomerDetailsRepository.find({ relations: ["customerid"], where: { id: id, deleted: false } });
    }
    async update(UpdateCustomerdetailDto) {
        return await this.CustomerDetailsRepository.update(UpdateCustomerdetailDto.id, UpdateCustomerdetailDto);
    }
    async delete(id) {
        return await this.CustomerDetailsRepository.update(id, { deleted: true });
    }
};
CustomerdetailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customerdetail_entity_1.Customerdetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        customer_service_1.CustomerService,
        settings_service_1.SettingsService])
], CustomerdetailsService);
exports.CustomerdetailsService = CustomerdetailsService;
//# sourceMappingURL=customerdetails.service.js.map