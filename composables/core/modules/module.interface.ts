export interface BasicModuleInterface {
    get():any
    create():any
    update():any
    delete():any
}

export interface AuthModuleInterface {
    doRegistration(data:any):any
    doLogin():any
}