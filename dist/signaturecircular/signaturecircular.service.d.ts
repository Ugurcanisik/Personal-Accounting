import { CreateSignaturecircularDto } from "./dto/create-signaturecircular.dto";
import { UpdateSignaturecircularDto } from "./dto/update-signaturecircular.dto";
import { CustomerService } from "../customer/customer.service";
import { Signaturecircular } from "./entities/signaturecircular.entity";
import { Repository } from "typeorm";
import { SettingsService } from "../settings/settings.service";
export declare class SignaturecircularService {
    private SignatureCircularRespository;
    private readonly CustomerService;
    private readonly SettingsService;
    constructor(SignatureCircularRespository: Repository<Signaturecircular>, CustomerService: CustomerService, SettingsService: SettingsService);
    allCustomer(): Promise<import("../customer/entities/customer.entity").Customer[]>;
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    create(CreateSignaturecircularDto: CreateSignaturecircularDto): Promise<Signaturecircular>;
    findAll(): Promise<Signaturecircular[]>;
    findOne(id: string): Promise<Signaturecircular[]>;
    update(UpdateSignaturecircularDto: UpdateSignaturecircularDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
