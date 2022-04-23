import { SettingsService } from 'src/settings/settings.service';
import { CustomerService } from "../customer/customer.service";
import { DutyService } from "../duty/duty.service";
import { CustomerdetailsService } from "../customerdetails/customerdetails.service";
export declare class DashboardService {
    private readonly SettingsService;
    private readonly CustomerService;
    private readonly DutyService;
    private readonly CustomerDetailsService;
    constructor(SettingsService: SettingsService, CustomerService: CustomerService, DutyService: DutyService, CustomerDetailsService: CustomerdetailsService);
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    totalCustomer(): Promise<number>;
    sahisIsletmeCount(): Promise<number>;
    sahisSmCount(): Promise<number>;
    sahisBilancoCount(): Promise<number>;
    limitedCount(): Promise<number>;
    asCount(): Promise<number>;
    checkDuty(id: string): Promise<import("../duty/entities/duty.entity").Duty[]>;
    yCount(): Promise<number>;
    mCount(): Promise<number>;
    hCount(): Promise<number>;
}
