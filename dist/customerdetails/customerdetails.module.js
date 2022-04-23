"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerdetailsModule = void 0;
const common_1 = require("@nestjs/common");
const customerdetails_service_1 = require("./customerdetails.service");
const customerdetails_controller_1 = require("./customerdetails.controller");
const customer_module_1 = require("../customer/customer.module");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("../orm.config");
const customerdetail_entity_1 = require("./entities/customerdetail.entity");
const settings_module_1 = require("../settings/settings.module");
let CustomerdetailsModule = class CustomerdetailsModule {
};
CustomerdetailsModule = __decorate([
    (0, common_1.Module)({
        controllers: [customerdetails_controller_1.CustomerdetailsController],
        providers: [customerdetails_service_1.CustomerdetailsService],
        imports: [customer_module_1.CustomerModule, typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
            typeorm_1.TypeOrmModule.forFeature([customerdetail_entity_1.Customerdetail]),
            settings_module_1.SettingsModule,
        ],
        exports: [customerdetails_service_1.CustomerdetailsService]
    })
], CustomerdetailsModule);
exports.CustomerdetailsModule = CustomerdetailsModule;
//# sourceMappingURL=customerdetails.module.js.map