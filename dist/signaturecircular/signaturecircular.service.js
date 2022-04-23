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
exports.SignaturecircularService = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("../customer/customer.service");
const typeorm_1 = require("@nestjs/typeorm");
const signaturecircular_entity_1 = require("./entities/signaturecircular.entity");
const typeorm_2 = require("typeorm");
const settings_service_1 = require("../settings/settings.service");
let SignaturecircularService = class SignaturecircularService {
    constructor(SignatureCircularRespository, CustomerService, SettingsService) {
        this.SignatureCircularRespository = SignatureCircularRespository;
        this.CustomerService = CustomerService;
        this.SettingsService = SettingsService;
    }
    async allCustomer() {
        return await this.CustomerService.findAll();
    }
    allSetting() {
        return this.SettingsService.findAll();
    }
    async create(CreateSignaturecircularDto) {
        const newProduct = this.SignatureCircularRespository.create(CreateSignaturecircularDto);
        return await this.SignatureCircularRespository.save(newProduct);
    }
    async findAll() {
        return await this.SignatureCircularRespository.find({ relations: ["customerid"], where: { deleted: false } });
    }
    async findOne(id) {
        return await this.SignatureCircularRespository.find({
            relations: ["customerid"],
            where: { id: id, deleted: false }
        });
    }
    async update(UpdateSignaturecircularDto) {
        return await this.SignatureCircularRespository.update(UpdateSignaturecircularDto.id, UpdateSignaturecircularDto);
    }
    async delete(id) {
        return await this.SignatureCircularRespository.update(id, { deleted: true });
    }
};
SignaturecircularService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(signaturecircular_entity_1.Signaturecircular)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        customer_service_1.CustomerService,
        settings_service_1.SettingsService])
], SignaturecircularService);
exports.SignaturecircularService = SignaturecircularService;
//# sourceMappingURL=signaturecircular.service.js.map