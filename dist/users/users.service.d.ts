import { SettingsService } from 'src/settings/settings.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private UsersRespository;
    private readonly SettingsService;
    constructor(UsersRespository: Repository<User>, SettingsService: SettingsService);
    allSetting(): Promise<import("../settings/entities/setting.entity").Setting>;
    findUser(id: string): Promise<any>;
    create(CreateUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    findUsername(username: string): Promise<User>;
    update(UpdateUserDto: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
