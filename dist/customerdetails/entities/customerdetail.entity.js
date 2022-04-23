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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customerdetail = void 0;
const typeorm_1 = require("typeorm");
const customer_entity_1 = require("../../customer/entities/customer.entity");
let Customerdetail = class Customerdetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Customerdetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => customer_entity_1.Customer, (customer) => customer.id),
    __metadata("design:type", Array)
], Customerdetail.prototype, "customerid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "vergino", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "vergidairesi", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "edevletpassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "intusername", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "intpassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "sskusername", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "sskpassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "sskworkpassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "nestusername", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "nestpassword", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "efatura", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 100, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "efaturatarih", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "edefter", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 100, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "edeftertarih", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "sm", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "muhtasar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "companytype", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "babs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 400, nullable: true }),
    __metadata("design:type", String)
], Customerdetail.prototype, "not", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Customerdetail.prototype, "deleted", void 0);
Customerdetail = __decorate([
    (0, typeorm_1.Entity)('Customerdetail')
], Customerdetail);
exports.Customerdetail = Customerdetail;
//# sourceMappingURL=customerdetail.entity.js.map