"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignaturecircularModule = void 0;
const common_1 = require("@nestjs/common");
const signaturecircular_service_1 = require("./signaturecircular.service");
const signaturecircular_controller_1 = require("./signaturecircular.controller");
const customer_module_1 = require("../customer/customer.module");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("../orm.config");
const signaturecircular_entity_1 = require("./entities/signaturecircular.entity");
const settings_module_1 = require("../settings/settings.module");
let SignaturecircularModule = class SignaturecircularModule {
};
SignaturecircularModule = __decorate([
    (0, common_1.Module)({
        controllers: [signaturecircular_controller_1.SignaturecircularController],
        providers: [signaturecircular_service_1.SignaturecircularService],
        imports: [
            customer_module_1.CustomerModule,
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
            typeorm_1.TypeOrmModule.forFeature([signaturecircular_entity_1.Signaturecircular]), settings_module_1.SettingsModule
        ]
    })
], SignaturecircularModule);
exports.SignaturecircularModule = SignaturecircularModule;
//# sourceMappingURL=signaturecircular.module.js.map