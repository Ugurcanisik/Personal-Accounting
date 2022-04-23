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
exports.VekaletnameController = void 0;
const common_1 = require("@nestjs/common");
const vekaletname_service_1 = require("./vekaletname.service");
const create_vekaletname_dto_1 = require("./dto/create-vekaletname.dto");
const update_vekaletname_dto_1 = require("./dto/update-vekaletname.dto");
const platform_express_1 = require("@nestjs/platform-express");
require("dotenv/config");
const { Storage } = require("@google-cloud/storage");
let VekaletnameController = class VekaletnameController {
    constructor(vekaletnameService) {
        this.vekaletnameService = vekaletnameService;
    }
    async Index(res, req) {
        res.render("vekaletname", {
            customer: await this.vekaletnameService.allCustomer(),
            user: req.user,
            allSetting: await this.vekaletnameService.allSetting()
        });
    }
    create(CreateVekaletnameDto, req) {
        if (req.file != undefined) {
            const storage = new Storage({
                keyFilename: "./" + process.env.C_FILE,
                projectId: process.env.C_PROID
            });
            const bucket = storage.bucket(process.env.C_BUCKET);
            const { originalname, buffer } = req.file;
            const random = Math.floor(Math.random() * 100);
            const blob = bucket.file(random + originalname);
            const blobStream = blob
                .createWriteStream({
                resumable: false
            })
                .end(buffer);
            CreateVekaletnameDto.vekaletnameurl = random + originalname;
            const customersignature = JSON.parse(JSON.stringify(CreateVekaletnameDto));
            return this.vekaletnameService.create(customersignature);
        }
        else {
            throw new common_1.BadRequestException("hata");
        }
    }
    async allVekaletname(req) {
        const yetki = req.user.yetki;
        const customers = await this.vekaletnameService.findAll();
        const dataArray = [];
        customers.forEach(function (key, value) {
            const simple = {
                DT_RowId: key.id,
                id: key.id,
                vekaletnameurl: key.vekaletnameurl,
                tc: key.customerid["tc"],
                namelastname: key.customerid["namelastname"],
                yetki: yetki
            };
            dataArray.push(simple);
        });
        return {
            data: dataArray
        };
    }
    findAndFetch(id) {
        return this.vekaletnameService
            .findOne(id)
            .then((result) => {
            return result[0];
        })
            .catch((e) => {
            return e;
        });
    }
    update(UpdateVekaletnameDto, req) {
        if (req.file != undefined) {
            const storage = new Storage({
                keyFilename: "./" + process.env.C_FILE,
                projectId: process.env.C_PROID
            });
            const bucket = storage.bucket(process.env.C_BUCKET);
            const { originalname, buffer } = req.file;
            const random = Math.floor(Math.random() * 100);
            const blob = bucket.file(random + originalname);
            const blobStream = blob
                .createWriteStream({
                resumable: false
            })
                .end(buffer);
            UpdateVekaletnameDto.vekaletnameurl = random + originalname;
        }
        const update = JSON.parse(JSON.stringify(UpdateVekaletnameDto));
        return this.vekaletnameService.update(update);
    }
    delete(id) {
        return this.vekaletnameService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], VekaletnameController.prototype, "Index", null);
__decorate([
    (0, common_1.Post)("add"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("vekaletname")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vekaletname_dto_1.CreateVekaletnameDto, Object]),
    __metadata("design:returntype", void 0)
], VekaletnameController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("list"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VekaletnameController.prototype, "allVekaletname", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VekaletnameController.prototype, "findAndFetch", null);
__decorate([
    (0, common_1.Patch)("update"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("vekaletname")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_vekaletname_dto_1.UpdateVekaletnameDto, Object]),
    __metadata("design:returntype", void 0)
], VekaletnameController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("delete"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VekaletnameController.prototype, "delete", null);
VekaletnameController = __decorate([
    (0, common_1.Controller)("vekaletname"),
    __metadata("design:paramtypes", [vekaletname_service_1.VekaletnameService])
], VekaletnameController);
exports.VekaletnameController = VekaletnameController;
//# sourceMappingURL=vekaletname.controller.js.map