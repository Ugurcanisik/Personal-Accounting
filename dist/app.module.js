"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const customer_module_1 = require("./customer/customer.module");
const customerdetails_module_1 = require("./customerdetails/customerdetails.module");
const signaturecircular_module_1 = require("./signaturecircular/signaturecircular.module");
const vekaletname_module_1 = require("./vekaletname/vekaletname.module");
const settings_module_1 = require("./settings/settings.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const auth_module_1 = require("./auth/auth.module");
const maliveriler_module_1 = require("./maliveriler/maliveriler.module");
const duty_module_1 = require("./duty/duty.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, customer_module_1.CustomerModule, customerdetails_module_1.CustomerdetailsModule, signaturecircular_module_1.SignaturecircularModule, vekaletname_module_1.VekaletnameModule, settings_module_1.SettingsModule, dashboard_module_1.DashboardModule, auth_module_1.AuthModule, maliveriler_module_1.MaliverilerModule, duty_module_1.DutyModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map