import AuthModule from "~/composables/core/modules/auth/auth.module";
import ItemsModule from "~/composables/core/modules/items/items.module";

interface CoreModules {
    auth:BasicModuleInterface,
    items:BasicModuleInterface
}

export const useAppCore = ():CoreModules => {
    return {
        auth: new AuthModule(),
        items: new ItemsModule()
    }
}

export default useAppCore;