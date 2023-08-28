<template>
  <header class="header">

    <nav>

      <NuxtLink to="/">
        <UiTextH1>TEMPLATER</UiTextH1>
      </NuxtLink>

      <div class="header__menu">
        <div class="header__menu-left"></div>
        <div class="header__menu-right">

          <div class="header__menu-right_item">
            <NuxtLink
                to="/docs"
                :active-class="currentRouteName === 'docs'"
            >Docs</NuxtLink>
          </div>
          <div class="header__menu-right_item" v-if="!appCore.auth.getStore().isAuthenticated">
            <NuxtLink
                to="/auth/login"
                :active-class="currentRouteName === 'auth-login'"
            >Log In</NuxtLink>
          </div>
          <div class="header__menu-right_item" v-if="!appCore.auth.getStore().isAuthenticated">
            <NuxtLink
                to="/auth/registration"
                :active-class="currentRouteName === 'auth-registration'"
            >Sing Up</NuxtLink>
          </div>

          <div
              v-if="appCore.auth.getStore().isAuthenticated"
              class="header__menu-right_item"
              @click="appCore.auth.doLogout()"
          >
            <a href="#">Log Out</a>
          </div>
        </div>
      </div>

    </nav>

  </header>
</template>

<script lang="ts" setup>
const appCore = useAppCore()
const route = useRoute()

const currentRouteName = computed(() => route.name);
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";
.router-link-exact-active {
  opacity: .5;
}

.header {
  width: 100%;
  padding: 10px 0;

  nav {
    height: 100px;
    display: flex;
    padding: 0 40px;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #8B9BA4;
    justify-content: space-between;
    //background-color: $secondary-color;
  }

  &__menu {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-left {
      display: flex;
      &_item {
        margin-left: 20px;
        &:first-child {
          margin-right: 0;
        }
      }
    }
    &-right {
      display: flex;
      &_item {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
