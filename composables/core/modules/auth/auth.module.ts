import AuthService from "~/composables/core/modules/auth/auth.service";
import { useAuthStore } from "~/stores/authStore";
import {T} from "untyped/dist/types-a20127ea";

interface ResponseDTO {
    success: Boolean,
    data: Array<T>,
    errors: Array<T>
}

export class AuthModule {
    private authService: AuthService;
    private authStore: any;

    constructor() {
        this.authStore = useAuthStore();
        this.authService = new AuthService();
    }

    async get():Promise<ResponseDTO|null> {
        try {
            const response:any = await this.authService.get()
            this.authStore.accessToken = response.token;
            return response;
        } catch (event) {
            console.log('AuthModule -> get');
        }

        return null;
    }

    create() {
        this.authService.create();
    }

    update() {
        this.authService.update();
    }

    delete() {
        this.authService.delete();
    }
}

export default AuthModule;