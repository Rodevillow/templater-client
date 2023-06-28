export class AuthService {
    async get() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ success: true, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" })
            }, 3000);
        })
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