import { SettingsService } from './settings.service';
import { UpdateSettingDto } from './dto/update-setting.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    index(res: any, req: any): Promise<any>;
    update(updateSettingDto: UpdateSettingDto): Promise<import("typeorm").UpdateResult>;
}
