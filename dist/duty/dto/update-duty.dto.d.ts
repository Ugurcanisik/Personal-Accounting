import { CreateDutyDto } from "./create-duty.dto";
declare const UpdateDutyDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDutyDto>>;
export declare class UpdateDutyDto extends UpdateDutyDto_base {
    readonly gorevalanid: string;
    readonly gorev: string;
    readonly id: string;
}
export {};
