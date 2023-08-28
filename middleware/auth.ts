import {getItem as getItemFromCookieStorage} from "~/utils/storage/cookie";
import {COOKIE_STORAGE__ACCESS_TOKEN} from "~/constans/storage";

export default defineNuxtRouteMiddleware(() => {
    if (!getItemFromCookieStorage(COOKIE_STORAGE__ACCESS_TOKEN)) return navigateTo('/auth/login');
});