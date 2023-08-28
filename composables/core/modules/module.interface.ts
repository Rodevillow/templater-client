export interface BasicModuleInterface {
    get():any
    create():any
    update():any
    delete():any
}

export interface AuthModuleInterface {
    getStore():any
    doRegistration(data:any):any
    doLogin(data:any):any
    doLogout():any
}