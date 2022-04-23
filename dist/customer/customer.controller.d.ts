import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    index(res: any, req: any): Promise<void>;
    allCustomer(req: any): Promise<{
        data: any[];
    }>;
    addCustomer(CreateCustomerDto: CreateCustomerDto): Promise<boolean>;
    findAndFetch(id: string): Promise<any>;
    update(UpdateCustomerDto: UpdateCustomerDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
