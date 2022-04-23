"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DutyModule = void 0;
const common_1 = require("@nestjs/common");
const duty_service_1 = require("./duty.service");
const duty_controller_1 = require("./duty.controller");
const settings_module_1 = require("../settings/settings.module");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const orm_config_1 = require("../orm.config");
const duty_entity_1 = require("./entities/duty.entity");
let DutyModule = class DutyModule {
};
DutyModule = __decorate([
    (0, common_1.Module)({
        controllers: [duty_controller_1.DutyController],
        providers: [duty_service_1.DutyService],
        imports: [settings_module_1.SettingsModule, users_module_1.UsersModule, typeorm_1.TypeOrmModule.forRoot(orm_config_1.config),
            typeorm_1.TypeOrmModule.forFeature([duty_entity_1.Duty]),],
        exports: [duty_service_1.DutyService]
    })
], DutyModule);
exports.DutyModule = DutyModule;
//# sourceMappingURL=duty.module.js.map