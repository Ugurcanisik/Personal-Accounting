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
exports.CustomerdetailsController = void 0;
const common_1 = require("@nestjs/common");
const customerdetails_service_1 = require("./customerdetails.service");
const create_customerdetail_dto_1 = require("./dto/create-customerdetail.dto");
const update_customerdetail_dto_1 = require("./dto/update-customerdetail.dto");
let CustomerdetailsController = class CustomerdetailsController {
    constructor(customerdetailsService) {
        this.customerdetailsService = customerdetailsService;
    }
    async index(res, req) {
        res.render("customerdetails", {
            customer: await this.customerdetailsService.allCustomer(),
            user: req.user,
            allSetting: await this.customerdetailsService.allSetting(),
        });
    }
    details(id) {
        return this.customerdetailsService.findOne(id)
            .then((result) => {
            return result[0];
        })
            .catch((e) => {
            return e;
        });
    }
    create(CreateCustomerdetailDto) {
        return this.customerdetailsService.create(CreateCustomerdetailDto);
    }
    findAndFetch(id) {
        return this.customerdetailsService.findOne(id)
            .then((result) => {
            return result[0];
        })
            .catch((e) => {
            return e;
        });
    }
    async allCustomer(req) {
        const yetki = req.user.yetki;
        const customers = await this.customerdetailsService.findAll();
        const dataArray = [];
        customers.forEach(function (key, value) {
            const simple = {
                DT_RowId: key.id,
                id: key.id,
                namelastname: key.customerid["namelastname"],
                tc: key.customerid["tc"],
                vergino: key.vergino,
                vergidairesi: key.vergidairesi,
                companytype: key.companytype,
                yetki: yetki
            };
            dataArray.push(simple);
        });
        return {
            data: dataArray
        };
    }
    update(UpdateCustomerdetailDto) {
        return this.customerdetailsService.update(UpdateCustomerdetailDto);
    }
    delete(id) {
        return this.customerdetailsService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerdetailsController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("details"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerdetailsController.prototype, "details", null);
__decorate([
    (0, common_1.Post)("add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customerdetail_dto_1.CreateCustomerdetailDto]),
    __metadata("design:returntype", void 0)
], CustomerdetailsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("update"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerdetailsController.prototype, "findAndFetch", null);
__decorate([
    (0, common_1.Post)("list"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerdetailsController.prototype, "allCustomer", null);
__decorate([
    (0, common_1.Patch)("update"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_customerdetail_dto_1.UpdateCustomerdetailDto]),
    __metadata("design:returntype", void 0)
], CustomerdetailsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("delete"),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerdetailsController.prototype, "delete", null);
CustomerdetailsController = __decorate([
    (0, common_1.Controller)("customerdetails"),
    __metadata("design:paramtypes", [customerdetails_service_1.CustomerdetailsService])
], CustomerdetailsController);
exports.CustomerdetailsController = CustomerdetailsController;
//# sourceMappingURL=customerdetails.controller.js.map