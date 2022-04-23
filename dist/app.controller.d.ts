import { AppService } from './app.service';
import { AuthService } from "./auth/auth.service";
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    index(res: any, cookieCheck: any): Promise<void>;
    loginIndex(res: any, cookieCheck: any): void;
    login(body: any, res: any): Promise<boolean>;
    logout(res: any, cookieCheck: any): Promise<void>;
}
