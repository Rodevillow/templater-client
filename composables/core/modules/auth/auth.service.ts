import ApiUtil from "~/utils/api/api.util";

export class AuthService {

    private apiUtil:any

    constructor() {
        this.apiUtil = ApiUtil.getInstance();
    }

    async get(formData:Object): Promise<any> {
        const response = await this.apiUtil.post('/auth/login', formData);
    }

    async create (formData:Object): Promise<any> {
        const response = await this.apiUtil.post('/auth/register', formData);
    }

    update() {
        console.log('AuthService -> update');
    }

    delete() {
        console.log('AuthService -> delete');
    }
}

export default AuthService;