import { DutyService } from './duty.service';
import { CreateDutyDto } from './dto/create-duty.dto';
import { UpdateDutyDto } from './dto/update-duty.dto';
export declare class DutyController {
    private readonly dutyService;
    constructor(dutyService: DutyService);
    index(req: any, res: any): Promise<void>;
    create(CreateDutyDto: CreateDutyDto, req: any): Promise<import("./entities/duty.entity").Duty>;
    allDuty(grv: string, req: any): Promise<{
        data: any[];
    }>;
    notcomp(req: any): Promise<{
        data: any[];
    }>;
    findAndFetch(id: string): Promise<any>;
    update(UpdateDutyDto: UpdateDutyDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
