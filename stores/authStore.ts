import { defineStore } from 'pinia'
import {Ref} from "vue";


export const useAuthStore:any = defineStore('auth', ():object => {
    const accessToken:Ref<string> = ref("")
    const refreshToken:Ref<string> = ref("")

    const setAccessToken = (value: string): void => {
     accessToken.value = value;
    }

    function setRefreshToken(value: string): void {
        refreshToken.value = value;
    }

    return {
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken
    }
})