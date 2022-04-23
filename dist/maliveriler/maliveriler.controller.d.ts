import { MaliverilerService } from "./maliveriler.service";
import { CreateMaliverilerDto } from "./dto/create-maliveriler.dto";
import { UpdateMaliverilerDto } from "./dto/update-maliveriler.dto";
export declare class MaliverilerController {
    private readonly maliverilerService;
    constructor(maliverilerService: MaliverilerService);
    index(res: any, req: any): Promise<void>;
    create(CreateMaliverilerDto: CreateMaliverilerDto, req: any): Promise<import("./entities/maliveriler.entity").Maliveriler>;
    allMaliVeriler(req: any): Promise<{
        data: any[];
    }>;
    findAndFetch(id: string): Promise<any>;
    update(UpdateMaliverilerDto: UpdateMaliverilerDto, req: any): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
