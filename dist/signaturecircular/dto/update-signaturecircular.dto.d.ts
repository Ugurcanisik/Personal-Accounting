import { CreateSignaturecircularDto } from "./create-signaturecircular.dto";
declare const UpdateSignaturecircularDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSignaturecircularDto>>;
export declare class UpdateSignaturecircularDto extends UpdateSignaturecircularDto_base {
    customerid: string;
    signatureurl: string;
    id: string;
}
export {};
