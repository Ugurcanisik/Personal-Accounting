"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const constants_1 = require("./constants");
let CookieAuthGuard = class CookieAuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const Response = context.switchToHttp().getResponse();
        if (request.url === '/login' || request.url == '/') {
            return true;
        }
        try {
            const decoded = jwt.verify(request.cookies.auth, constants_1.jwtConstants.secret);
            request.user = decoded;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
    }
};
CookieAuthGuard = __decorate([
    (0, common_1.Injectable)()
], CookieAuthGuard);
exports.CookieAuthGuard = CookieAuthGuard;
//# sourceMappingURL=auth.guard.js.map