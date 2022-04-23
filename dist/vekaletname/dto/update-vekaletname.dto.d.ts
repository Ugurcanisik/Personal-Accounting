import { CreateVekaletnameDto } from './create-vekaletname.dto';
declare const UpdateVekaletnameDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVekaletnameDto>>;
export declare class UpdateVekaletnameDto extends UpdateVekaletnameDto_base {
    customerid: string;
    vekaletnameurl: string;
    id: string;
}
export {};
