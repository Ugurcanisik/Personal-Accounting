import { CreateDutyDto } from "./dto/create-duty.dto";
import { UpdateDutyDto } from "./dto/update-duty.dto";
import { SettingsService } from "../settings/settings.service";
import { UsersService } from "../users/users.service";
import { Repository } from "typeorm";
import { Duty } from "./entities/duty.entity";
export declare class DutyService {
    private readonly SettingService;
    private readonly UserService;
    private DutyRepository;
    constructor(SettingService: SettingsService, UserService: UsersService, DutyRepository: Repository<Duty>);
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    allUsers(user: any): Promise<any>;
    create(CreateDutyDto: CreateDutyDto): Promise<Duty>;
    findAll(id: string): Promise<Duty[]>;
    findOne(id: string): Promise<Duty[]>;
    findOneAlinan(id: string): Promise<Duty[]>;
    findOneVerilen(id: string): Promise<Duty[]>;
    update(UpdateDutyDto: UpdateDutyDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
    alinan(id: string): Promise<Duty[]>;
    verilen(id: string): Promise<Duty[]>;
    verilenNot(id: string): Promise<Duty[]>;
}
