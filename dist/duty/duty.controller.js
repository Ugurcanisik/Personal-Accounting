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
exports.DutyController = void 0;
const common_1 = require("@nestjs/common");
const duty_service_1 = require("./duty.service");
const create_duty_dto_1 = require("./dto/create-duty.dto");
const update_duty_dto_1 = require("./dto/update-duty.dto");
let DutyController = class DutyController {
    constructor(dutyService) {
        this.dutyService = dutyService;
    }
    async index(req, res) {
        res.render('duty', {
            user: req.user,
            allSetting: await this.dutyService.allSetting(),
            allUsers: await this.dutyService.allUsers(req.user),
        });
    }
    create(CreateDutyDto, req) {
        CreateDutyDto.gorevveren = req.user.id;
        return this.dutyService.create(CreateDutyDto);
    }
    async allDuty(grv, req) {
        const grvtur = grv;
        let gorevler;
        const dataArray = [];
        if (grvtur == 'alinan') {
            gorevler = await this.dutyService.alinan(req.user.id);
            gorevler.forEach(function (key, value) {
                const simple = {
                    DT_RowId: key.id,
                    id: key.id,
                    namelastname: key.gorevveren['name'] + key.gorevveren['lastname'],
                    gorev: key.gorev,
                    gorevdurumu: key.gorevok,
                };
                dataArray.push(simple);
            });
        }
        else if (grvtur == 'verilen') {
            gorevler = await this.dutyService.verilen(req.user.id);
            gorevler.forEach(function (key, value) {
                const simple = {
                    DT_RowId: key.id,
                    id: key.id,
                    namelastname: key.gorevalan['name'] + key.gorevalan['lastname'],
                    gorev: key.gorev,
                    gorevdurumu: key.gorevok,
                };
                dataArray.push(simple);
            });
        }
        return {
            data: dataArray,
        };
    }
    async notcomp(req) {
        const dataArray = [];
        const gorevler = await this.dutyService.verilenNot(req.user.id);
        gorevler.forEach(function (key, value) {
            const simple = {
                isimsoyisim: key.gorevalan['name'] + key.gorevalan['lastname'],
                gorev: key.gorev,
                gorevdurumu: key.gorevok,
            };
            dataArray.push(simple);
        });
        return {
            data: dataArray,
        };
    }
    findAndFetch(id) {
        return this.dutyService
            .findOne(id)
            .then(async (result) => {
            return await result[0];
        })
            .catch((e) => {
            return e;
        });
    }
    update(UpdateDutyDto) {
        return this.dutyService.update(UpdateDutyDto);
    }
    delete(id) {
        return this.dutyService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DutyController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_duty_dto_1.CreateDutyDto, Object]),
    __metadata("design:returntype", void 0)
], DutyController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('list'),
    __param(0, (0, common_1.Body)('tur')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DutyController.prototype, "allDuty", null);
__decorate([
    (0, common_1.Post)('notcomp'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DutyController.prototype, "notcomp", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DutyController.prototype, "findAndFetch", null);
__decorate([
    (0, common_1.Patch)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_duty_dto_1.UpdateDutyDto]),
    __metadata("design:returntype", void 0)
], DutyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DutyController.prototype, "delete", null);
DutyController = __decorate([
    (0, common_1.Controller)('duty'),
    __metadata("design:paramtypes", [duty_service_1.DutyService])
], DutyController);
exports.DutyController = DutyController;
//# sourceMappingURL=duty.controller.js.map