"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv/config');
exports.config = {
    type: 'postgres',
    port: 5432,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
};
//# sourceMappingURL=orm.config.js.map