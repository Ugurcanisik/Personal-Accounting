import { NotFoundException } from "@nestjs/common";
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(user: any): Promise<string | NotFoundException>;
}
