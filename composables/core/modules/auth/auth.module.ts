import AuthService from "~/composables/core/modules/auth/auth.service";
import { useAuthStore } from "~/stores/authStore";

export class AuthModule {
    private authService: AuthService;
    private authStore: any;
    constructor() {
        this.authStore = useAuthStore();
        this.authService = new AuthService();
    }
    get() {
        this.authService.get();
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