import { VekaletnameService } from "./vekaletname.service";
import { CreateVekaletnameDto } from "./dto/create-vekaletname.dto";
import { UpdateVekaletnameDto } from "./dto/update-vekaletname.dto";
export declare class VekaletnameController {
    private readonly vekaletnameService;
    constructor(vekaletnameService: VekaletnameService);
    Index(res: any, req: any): Promise<void>;
    create(CreateVekaletnameDto: CreateVekaletnameDto, req: any): Promise<import("./entities/vekaletname.entity").Vekaletname>;
    allVekaletname(req: any): Promise<{
        data: any[];
    }>;
    findAndFetch(id: string): Promise<any>;
    update(UpdateVekaletnameDto: UpdateVekaletnameDto, req: any): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
