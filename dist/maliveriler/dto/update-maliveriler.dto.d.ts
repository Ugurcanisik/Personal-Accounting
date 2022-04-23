import { CreateMaliverilerDto } from "./create-maliveriler.dto";
declare const UpdateMaliverilerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMaliverilerDto>>;
export declare class UpdateMaliverilerDto extends UpdateMaliverilerDto_base {
    readonly customerid: string;
    maliveriurl: string;
    readonly date: string;
    readonly id: string;
}
export {};
