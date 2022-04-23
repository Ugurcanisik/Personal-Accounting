import { CreateCustomerdetailDto } from "./dto/create-customerdetail.dto";
import { UpdateCustomerdetailDto } from "./dto/update-customerdetail.dto";
import { CustomerService } from "../customer/customer.service";
import { Customerdetail } from "./entities/customerdetail.entity";
import { Repository } from "typeorm";
import { SettingsService } from "../settings/settings.service";
export declare class CustomerdetailsService {
    private CustomerDetailsRepository;
    private readonly customerService;
    private readonly SettingsService;
    constructor(CustomerDetailsRepository: Repository<Customerdetail>, customerService: CustomerService, SettingsService: SettingsService);
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    create(CreateCustomerdetailDto: CreateCustomerdetailDto): Promise<Customerdetail>;
    allCustomer(): Promise<import("../customer/entities/customer.entity").Customer[]>;
    findAll(): Promise<Customerdetail[]>;
    sahisIsletmeCount(): Promise<number>;
    sahisSmCount(): Promise<number>;
    sahisBilancoCount(): Promise<number>;
    limitedCount(): Promise<number>;
    asCount(): Promise<number>;
    yCount(): Promise<number>;
    mCount(): Promise<number>;
    hCount(): Promise<number>;
    findOne(id: string): Promise<Customerdetail[]>;
    update(UpdateCustomerdetailDto: UpdateCustomerdetailDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
