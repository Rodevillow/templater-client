export class AuthService {
    get() {
        console.log('AuthService -> get');
        return [
            {
                id: 1,
                name: 'First'
            },
            {
                id: 2,
                name: 'Second'
            }
        ];
    }

    create() {
        console.log('AuthService -> create');
    }

    update() {
        console.log('AuthService -> update');
    }

    delete() {
        console.log('AuthService -> delete');
    }
}

export default AuthService;