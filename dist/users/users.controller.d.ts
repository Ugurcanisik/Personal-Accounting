import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    index(res: any, req: any): Promise<any>;
    create(CreateUserDto: CreateUserDto): Promise<void>;
    allUsers(req: any): Promise<{
        data: any[];
    }>;
    findandfetch(id: string): Promise<any>;
    update(UpdateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
