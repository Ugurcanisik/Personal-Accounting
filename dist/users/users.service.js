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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const settings_service_1 = require("../settings/settings.service");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(UsersRespository, SettingsService) {
        this.UsersRespository = UsersRespository;
        this.SettingsService = SettingsService;
    }
    allSetting() {
        return this.SettingsService.findAll();
    }
    async findUser(id) {
        return (0, typeorm_2.getConnection)()
            .createQueryBuilder()
            .select()
            .from(user_entity_1.User, 'user')
            .where('user.id != :id', { id: id })
            .andWhere('user.deleted = false')
            .execute();
    }
    async create(CreateUserDto) {
        const newUser = await this.UsersRespository.create(CreateUserDto);
        return await this.UsersRespository.save(newUser);
    }
    async findAll() {
        return await this.UsersRespository.find({ where: { deleted: false } });
    }
    findOne(id) {
        return this.UsersRespository.findOne({ where: { id: id, deleted: false } });
    }
    findUsername(username) {
        return this.UsersRespository.findOne({
            where: { username: username, deleted: false },
        });
    }
    async update(UpdateUserDto) {
        return await this.UsersRespository.update(UpdateUserDto.id, UpdateUserDto);
    }
    remove(id) {
        return this.UsersRespository.update(id, { deleted: true });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        settings_service_1.SettingsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map