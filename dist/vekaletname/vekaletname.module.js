"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VekaletnameModule = void 0;
const common_1 = require("@nestjs/common");
const vekaletname_service_1 = require("./vekaletname.service");
const vekaletname_controller_1 = require("./vekaletname.controller");
const customer_module_1 = require("../customer/customer.module");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("../orm.config");
const vekaletname_entity_1 = require("./entities/vekaletname.entity");
const settings_module_1 = require("../settings/settings.module");
let VekaletnameModule = class VekaletnameModule {
};
VekaletnameModule = __decorate([
    (0, common_1.Module)({
        controllers: [vekaletname_controller_1.VekaletnameController],
        providers: [vekaletname_service_1.VekaletnameService],
        imports: [
            customer_module_1.CustomerModule,
            typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
            typeorm_1.TypeOrmModule.forFeature([vekaletname_entity_1.Vekaletname]), settings_module_1.SettingsModule
        ]
    })
], VekaletnameModule);
exports.VekaletnameModule = VekaletnameModule;
//# sourceMappingURL=vekaletname.module.js.map