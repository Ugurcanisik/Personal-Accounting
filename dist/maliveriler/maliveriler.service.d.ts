import { CreateMaliverilerDto } from "./dto/create-maliveriler.dto";
import { UpdateMaliverilerDto } from "./dto/update-maliveriler.dto";
import { SettingsService } from "../settings/settings.service";
import { CustomerService } from "../customer/customer.service";
import { Repository } from "typeorm";
import { Maliveriler } from "./entities/maliveriler.entity";
export declare class MaliverilerService {
    private readonly SettingsService;
    private readonly CustomerService;
    private MaliVeriRepository;
    constructor(SettingsService: SettingsService, CustomerService: CustomerService, MaliVeriRepository: Repository<Maliveriler>);
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    allCustomer(): Promise<import("../customer/entities/customer.entity").Customer[]>;
    create(CreateMaliverilerDto: CreateMaliverilerDto): Promise<Maliveriler>;
    findAll(): Promise<Maliveriler[]>;
    findOne(id: string): Promise<Maliveriler[]>;
    update(UpdateMaliverilerDto: UpdateMaliverilerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
