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
exports.DutyService = void 0;
const common_1 = require("@nestjs/common");
const settings_service_1 = require("../settings/settings.service");
const users_service_1 = require("../users/users.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const duty_entity_1 = require("./entities/duty.entity");
let DutyService = class DutyService {
    constructor(SettingService, UserService, DutyRepository) {
        this.SettingService = SettingService;
        this.UserService = UserService;
        this.DutyRepository = DutyRepository;
    }
    allSetting() {
        return this.SettingService.findAll();
    }
    allUsers(user) {
        return this.UserService.findUser(user.id);
    }
    async create(CreateDutyDto) {
        const newUser = await this.DutyRepository.create(CreateDutyDto);
        return await this.DutyRepository.save(newUser);
    }
    async findAll(id) {
        return await this.DutyRepository.find({ relations: ["gorevalan"], where: { gorevveren: id, deleted: false } });
    }
    async findOne(id) {
        return await this.DutyRepository.find({
            relations: ["gorevalan"],
            where: { id: id, deleted: false }
        });
    }
    async findOneAlinan(id) {
        return await this.DutyRepository.find({
            relations: ["gorevveren"],
            where: { id: id, deleted: false }
        });
    }
    async findOneVerilen(id) {
        return await this.DutyRepository.find({
            relations: ["gorevalan"],
            where: { id: id, deleted: false }
        });
    }
    async update(UpdateDutyDto) {
        return await this.DutyRepository.update(UpdateDutyDto.id, UpdateDutyDto);
    }
    async delete(id) {
        return await this.DutyRepository.update(id, { deleted: true });
    }
    async alinan(id) {
        return await this.DutyRepository.find({
            relations: ["gorevveren"], where: { gorevalan: id, deleted: false }
        });
    }
    async verilen(id) {
        return await this.DutyRepository.find({
            relations: ["gorevalan"], where: { gorevveren: id, deleted: false }
        });
    }
    async verilenNot(id) {
        return await this.DutyRepository.find({
            relations: ["gorevalan"], where: { gorevveren: id, deleted: false, gorevok: 'Bekliyor' }
        });
    }
};
DutyService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(duty_entity_1.Duty)),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        users_service_1.UsersService,
        typeorm_2.Repository])
], DutyService);
exports.DutyService = DutyService;
//# sourceMappingURL=duty.service.js.map