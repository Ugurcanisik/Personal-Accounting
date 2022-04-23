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
exports.SignaturecircularController = void 0;
const common_1 = require("@nestjs/common");
const signaturecircular_service_1 = require("./signaturecircular.service");
const create_signaturecircular_dto_1 = require("./dto/create-signaturecircular.dto");
const update_signaturecircular_dto_1 = require("./dto/update-signaturecircular.dto");
const platform_express_1 = require("@nestjs/platform-express");
require("dotenv/config");
const { Storage } = require("@google-cloud/storage");
let SignaturecircularController = class SignaturecircularController {
    constructor(signaturecircularService) {
        this.signaturecircularService = signaturecircularService;
    }
    async index(res, req) {
        res.render("signaturecircular", {
            customer: await this.signaturecircularService.allCustomer(),
            user: req.user,
            allSetting: await this.signaturecircularService.allSetting()
        });
    }
    create(CreateSignaturecircularDto, req) {
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
            CreateSignaturecircularDto.signatureurl = random + originalname;
            const customersignature = JSON.parse(JSON.stringify(CreateSignaturecircularDto));
            return this.signaturecircularService.create(customersignature);
        }
        else {
            throw new common_1.BadRequestException("hata");
        }
    }
    async allsignature(req) {
        const yetki = req.user.yetki;
        const customers = await this.signaturecircularService.findAll();
        const dataArray = [];
        customers.forEach(function (key, value) {
            const simple = {
                DT_RowId: key.id,
                id: key.id,
                signatureurl: key.signatureurl,
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
        return this.signaturecircularService
            .findOne(id)
            .then((result) => {
            return result[0];
        })
            .catch((e) => {
            return e;
        });
    }
    update(UpdateSignaturecircularDto, req) {
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
            UpdateSignaturecircularDto.signatureurl = random + originalname;
        }
        const update = JSON.parse(JSON.stringify(UpdateSignaturecircularDto));
        return this.signaturecircularService.update(update);
    }
    delete(id) {
        return this.signaturecircularService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SignaturecircularController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("add"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("signature")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_signaturecircular_dto_1.CreateSignaturecircularDto, Object]),
    __metadata("design:returntype", void 0)
], SignaturecircularController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("list"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SignaturecircularController.prototype, "allsignature", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignaturecircularController.prototype, "findAndFetch", null);
__decorate([
    (0, common_1.Patch)("update"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("signature")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_signaturecircular_dto_1.UpdateSignaturecircularDto, Object]),
    __metadata("design:returntype", void 0)
], SignaturecircularController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("delete"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignaturecircularController.prototype, "delete", null);
SignaturecircularController = __decorate([
    (0, common_1.Controller)("signaturecircular"),
    __metadata("design:paramtypes", [signaturecircular_service_1.SignaturecircularService])
], SignaturecircularController);
exports.SignaturecircularController = SignaturecircularController;
//# sourceMappingURL=signaturecircular.controller.js.map