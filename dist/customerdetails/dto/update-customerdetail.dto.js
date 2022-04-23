"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerdetailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_customerdetail_dto_1 = require("./create-customerdetail.dto");
class UpdateCustomerdetailDto extends (0, mapped_types_1.PartialType)(create_customerdetail_dto_1.CreateCustomerdetailDto) {
}
exports.UpdateCustomerdetailDto = UpdateCustomerdetailDto;
//# sourceMappingURL=update-customerdetail.dto.js.map