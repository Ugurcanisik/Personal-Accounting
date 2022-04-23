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
exports.MaliverilerController = void 0;
const common_1 = require("@nestjs/common");
const maliveriler_service_1 = require("./maliveriler.service");
const create_maliveriler_dto_1 = require("./dto/create-maliveriler.dto");
const update_maliveriler_dto_1 = require("./dto/update-maliveriler.dto");
const platform_express_1 = require("@nestjs/platform-express");
const storage_1 = require("@google-cloud/storage");
let MaliverilerController = class MaliverilerController {
    constructor(maliverilerService) {
        this.maliverilerService = maliverilerService;
    }
    async index(res, req) {
        res.render("maliveriler", {
            user: req.user,
            customer: await this.maliverilerService.allCustomer(),
            allSetting: await this.maliverilerService.allSetting()
        });
    }
    create(CreateMaliverilerDto, req) {
        if (req.file != undefined) {
            const storage = new storage_1.Storage({
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
            CreateMaliverilerDto.maliveriurl = random + originalname;
            const customersignature = JSON.parse(JSON.stringify(CreateMaliverilerDto));
            return this.maliverilerService.create(customersignature);
        }
        else {
            throw new common_1.BadRequestException("hata");
        }
    }
    async allMaliVeriler(req) {
        const yetki = req.user.yetki;
        const customers = await this.maliverilerService.findAll();
        const dataArray = [];
        customers.forEach(function (key, value) {
            const simple = {
                DT_RowId: key.id,
                id: key.id,
                maliveriurl: key.maliveriurl,
                tc: key.customerid["tc"],
                date: key.date,
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
        return this.maliverilerService
            .findOne(id)
            .then((result) => {
            return result[0];
        })
            .catch((e) => {
            return e;
        });
    }
    update(UpdateMaliverilerDto, req) {
        if (req.file != undefined) {
            const storage = new storage_1.Storage({
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
            UpdateMaliverilerDto.maliveriurl = random + originalname;
        }
        const update = JSON.parse(JSON.stringify(UpdateMaliverilerDto));
        return this.maliverilerService.update(update);
    }
    delete(id) {
        return this.maliverilerService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MaliverilerController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("add"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("maliveri")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maliveriler_dto_1.CreateMaliverilerDto, Object]),
    __metadata("design:returntype", void 0)
], MaliverilerController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("list"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MaliverilerController.prototype, "allMaliVeriler", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaliverilerController.prototype, "findAndFetch", null);
__decorate([
    (0, common_1.Patch)("update"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("maliveri")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_maliveriler_dto_1.UpdateMaliverilerDto, Object]),
    __metadata("design:returntype", void 0)
], MaliverilerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("delete"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MaliverilerController.prototype, "delete", null);
MaliverilerController = __decorate([
    (0, common_1.Controller)("maliveriler"),
    __metadata("design:paramtypes", [maliveriler_service_1.MaliverilerService])
], MaliverilerController);
exports.MaliverilerController = MaliverilerController;
//# sourceMappingURL=maliveriler.controller.js.map