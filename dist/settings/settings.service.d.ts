import { UpdateSettingDto } from './dto/update-setting.dto';
import { Repository } from 'typeorm';
import { Setting } from './entities/setting.entity';
export declare class SettingsService {
    private SettingRepository;
    constructor(SettingRepository: Repository<Setting>);
    findAll(): Promise<Setting>;
    update(updateSettingDto: UpdateSettingDto): Promise<import("typeorm").UpdateResult>;
}
