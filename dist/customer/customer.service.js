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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("./entities/customer.entity");
const settings_service_1 = require("../settings/settings.service");
let CustomerService = class CustomerService {
    constructor(CustomerRepository, SettingsService) {
        this.CustomerRepository = CustomerRepository;
        this.SettingsService = SettingsService;
    }
    allSetting() {
        return this.SettingsService.findAll();
    }
    async countCustomer() {
        const all = await this.CustomerRepository.find({ where: { deleted: false } });
        let counter = 0;
        all.forEach(function () {
            counter++;
        });
        return counter;
    }
    async findAll() {
        return await this.CustomerRepository.find({
            where: { deleted: false }
        });
    }
    async create(CreateCustomerDto) {
        const newUser = await this.CustomerRepository.create(CreateCustomerDto);
        return await this.CustomerRepository.save(newUser);
    }
    async findOne(id) {
        return await this.CustomerRepository.find({
            where: { id: id, deleted: false }
        });
    }
    async update(UpdateCustomerDto) {
        return await this.CustomerRepository.update(UpdateCustomerDto.id, UpdateCustomerDto);
    }
    async delete(id) {
        return await this.CustomerRepository.update(id, { deleted: true });
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        settings_service_1.SettingsService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map