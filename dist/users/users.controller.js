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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const constants_1 = require("../auth/constants");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async index(res, req) {
        return res.render("users", {
            user: req.user,
            allSetting: await this.usersService.allSetting()
        });
    }
    async create(CreateUserDto) {
        const salt = await bcrypt.genSalt();
        const newPassword = await bcrypt.hash(CreateUserDto.password, salt);
        CreateUserDto.password = newPassword;
        CreateUserDto.yetki = Number(CreateUserDto.yetki);
        const newUser = await this.usersService
            .create(CreateUserDto)
            .then((result) => {
            return result;
        })
            .catch((e) => {
            throw new common_1.UnprocessableEntityException("name must be unique");
        });
        const token = await jwt.sign({ id: newUser.id, fullName: newUser.name + " " + newUser.lastname, yetki: newUser.yetki }, constants_1.jwtConstants.secret);
        const upUser = { id: newUser.id, token: token };
        const upToken = await this.usersService.update(upUser);
    }
    async allUsers(req) {
        const yetki = req.user.yetki;
        const allUsers = await this.usersService.findAll();
        const dataArray = [];
        allUsers.forEach(function (key, value) {
            const simple = {
                name: key.name,
                lastname: key.lastname,
                username: key.username,
                yetkibol: key.yetki,
                yetki: yetki,
                id: key.id
            };
            dataArray.push(simple);
        });
        return {
            data: dataArray
        };
    }
    findandfetch(id) {
        return this.usersService
            .findOne(id)
            .then((result) => {
            return result;
        })
            .catch((e) => {
            return e;
        });
    }
    async update(UpdateUserDto) {
        UpdateUserDto.yetki = Number(UpdateUserDto.yetki);
        const token = await jwt.sign({ id: UpdateUserDto.id, fullName: UpdateUserDto.name + " " + UpdateUserDto.lastname, yetki: UpdateUserDto.yetki }, constants_1.jwtConstants.secret);
        UpdateUserDto.token = token;
        const upToken = await this.usersService.update(UpdateUserDto);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("list"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "allUsers", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findandfetch", null);
__decorate([
    (0, common_1.Patch)("update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("delete"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
UsersController = __decorate([
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map