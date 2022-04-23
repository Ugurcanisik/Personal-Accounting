import { CreateVekaletnameDto } from './dto/create-vekaletname.dto';
import { UpdateVekaletnameDto } from './dto/update-vekaletname.dto';
import { Repository } from 'typeorm';
import { Vekaletname } from './entities/vekaletname.entity';
import { CustomerService } from '../customer/customer.service';
import { SettingsService } from 'src/settings/settings.service';
export declare class VekaletnameService {
    private VekaletnameRespository;
    private readonly CustomerService;
    private readonly SettingsService;
    constructor(VekaletnameRespository: Repository<Vekaletname>, CustomerService: CustomerService, SettingsService: SettingsService);
    allCustomer(): Promise<import("../customer/entities/customer.entity").Customer[]>;
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    create(CreateVekaletnameDto: CreateVekaletnameDto): Promise<Vekaletname>;
    findAll(): Promise<Vekaletname[]>;
    findOne(id: string): Promise<Vekaletname[]>;
    update(UpdateVekaletnameDto: UpdateVekaletnameDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
