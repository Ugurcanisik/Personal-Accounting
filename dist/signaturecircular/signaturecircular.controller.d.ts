import { SignaturecircularService } from "./signaturecircular.service";
import { CreateSignaturecircularDto } from "./dto/create-signaturecircular.dto";
import { UpdateSignaturecircularDto } from "./dto/update-signaturecircular.dto";
export declare class SignaturecircularController {
    private readonly signaturecircularService;
    constructor(signaturecircularService: SignaturecircularService);
    index(res: any, req: any): Promise<void>;
    create(CreateSignaturecircularDto: CreateSignaturecircularDto, req: any): Promise<import("./entities/signaturecircular.entity").Signaturecircular>;
    allsignature(req: any): Promise<{
        data: any[];
    }>;
    findAndFetch(id: string): Promise<any>;
    update(UpdateSignaturecircularDto: UpdateSignaturecircularDto, req: any): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
