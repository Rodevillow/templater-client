import AuthService from "~/composables/core/modules/auth/auth.service";
import { useAuthStore } from "~/stores/authStore";
import {T} from "untyped/dist/types-a20127ea";
import { AuthModuleInterface } from "../module.interface";

interface ResponseDTO {
    success: Boolean,
    data: Array<T>,
    errors: Array<T>
}

export class AuthModule implements AuthModuleInterface {
    private authService: AuthService;
    private authStore: any;

    constructor() {
        this.authStore = useAuthStore();
        this.authService = new AuthService();
    }

    async doRegistration(formData: any) {
        await this.authService.create(formData);
    }

    async doLogin() {
        // await this.authService.get();
    }
}

export default AuthModule;