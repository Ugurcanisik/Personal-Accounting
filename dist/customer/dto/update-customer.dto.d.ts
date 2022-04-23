import { CreateCustomerDto } from "./create-customer.dto";
declare const UpdateCustomerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateCustomerDto>>;
export declare class UpdateCustomerDto extends UpdateCustomerDto_base {
    readonly namelastname: string;
    readonly tc: number;
    readonly phone: string;
    readonly email: string;
    readonly secondemail: string;
    readonly startdate: string;
    readonly enddate: string;
    readonly id: string;
}
export {};
