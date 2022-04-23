import { CreateSettingDto } from './create-setting.dto';
declare const UpdateSettingDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSettingDto>>;
export declare class UpdateSettingDto extends UpdateSettingDto_base {
    readonly title: string;
    readonly logo: string;
    readonly ico: string;
    readonly companyname: string;
    readonly id: string;
}
export {};
