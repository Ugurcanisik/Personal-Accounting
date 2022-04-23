import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Repository } from "typeorm";
import { Customer } from "./entities/customer.entity";
import { SettingsService } from "../settings/settings.service";
export declare class CustomerService {
    private CustomerRepository;
    private readonly SettingsService;
    constructor(CustomerRepository: Repository<Customer>, SettingsService: SettingsService);
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    countCustomer(): Promise<number>;
    findAll(): Promise<Customer[]>;
    create(CreateCustomerDto: CreateCustomerDto): Promise<Customer>;
    findOne(id: string): Promise<Customer[]>;
    update(UpdateCustomerDto: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
