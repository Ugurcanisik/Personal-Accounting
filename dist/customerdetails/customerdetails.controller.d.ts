import { CustomerdetailsService } from "./customerdetails.service";
import { CreateCustomerdetailDto } from "./dto/create-customerdetail.dto";
import { UpdateCustomerdetailDto } from "./dto/update-customerdetail.dto";
export declare class CustomerdetailsController {
    private readonly customerdetailsService;
    constructor(customerdetailsService: CustomerdetailsService);
    index(res: any, req: any): Promise<void>;
    details(id: string): Promise<any>;
    create(CreateCustomerdetailDto: CreateCustomerdetailDto): Promise<import("./entities/customerdetail.entity").Customerdetail>;
    findAndFetch(id: string): Promise<any>;
    allCustomer(req: any): Promise<{
        data: any[];
    }>;
    update(UpdateCustomerdetailDto: UpdateCustomerdetailDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").UpdateResult>;
}
