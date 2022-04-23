import { CreateUserDto } from "./create-user.dto";
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    readonly name: string;
    readonly lastname: string;
    readonly username: string;
    readonly password: string;
    yetki: number;
    token: string;
    readonly id: string;
}
export {};
