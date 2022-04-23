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
exports.MaliverilerService = void 0;
const common_1 = require("@nestjs/common");
const settings_service_1 = require("../settings/settings.service");
const customer_service_1 = require("../customer/customer.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const maliveriler_entity_1 = require("./entities/maliveriler.entity");
let MaliverilerService = class MaliverilerService {
    constructor(SettingsService, CustomerService, MaliVeriRepository) {
        this.SettingsService = SettingsService;
        this.CustomerService = CustomerService;
        this.MaliVeriRepository = MaliVeriRepository;
    }
    allSetting() {
        return this.SettingsService.findAll();
    }
    allCustomer() {
        return this.CustomerService.findAll();
    }
    async create(CreateMaliverilerDto) {
        const newUser = await this.MaliVeriRepository.create(CreateMaliverilerDto);
        return await this.MaliVeriRepository.save(newUser);
    }
    async findAll() {
        return await this.MaliVeriRepository.find({
            relations: ['customerid'],
            where: { deleted: false },
        });
    }
    async findOne(id) {
        return await this.MaliVeriRepository.find({
            relations: ['customerid'],
            where: { id: id, deleted: false },
        });
    }
    async update(UpdateMaliverilerDto) {
        return await this.MaliVeriRepository.update(UpdateMaliverilerDto.id, UpdateMaliverilerDto);
    }
    async delete(id) {
        return await this.MaliVeriRepository.update(id, { deleted: true });
    }
};
MaliverilerService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(maliveriler_entity_1.Maliveriler)),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        customer_service_1.CustomerService,
        typeorm_2.Repository])
], MaliverilerService);
exports.MaliverilerService = MaliverilerService;
//# sourceMappingURL=maliveriler.service.js.map