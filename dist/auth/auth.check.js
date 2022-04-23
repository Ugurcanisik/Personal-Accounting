"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieCheck = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const constants_1 = require("./constants");
exports.cookieCheck = (0, common_1.createParamDecorator)((data = 'dt', ctx) => {
    const request = ctx.switchToHttp().getRequest();
    try {
        jwt.verify(request.cookies.auth, constants_1.jwtConstants.secret);
        return true;
    }
    catch (e) {
        return false;
    }
});
//# sourceMappingURL=auth.check.js.map