"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const http_exception_filter_1 = require("./http-exception.filter");
const auth_guard_1 = require("./auth/auth.guard");
require('dotenv/config');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views', 'inc'));
    app.use(cookieParser());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalGuards(new auth_guard_1.CookieAuthGuard());
    await app.listen(process.env.SRC_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map