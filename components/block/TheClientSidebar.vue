<template>
  <div class="client-menu-items">
    <UiSidebarItem>
      <template #icon-left>
        <UiIconProfile />
      </template>
      <template #default> Profile </template>
    </UiSidebarItem>
    <UiSidebarItem>
      <template #icon-left>
        <UiIconBurger />
      </template>
      <template #default> Orders </template>
    </UiSidebarItem>
    <UiSidebarItem>
      <template #icon-left>
        <UiIconGear />
      </template>
      <template #default> Settings </template>
    </UiSidebarItem>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.client-menu-items {
  padding: 15px 0;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border-style: solid;
  border-color: var(--primary, #8b9ba4);
  border-width: 1px 0px 1px 0px;
  width: 306px;
}
</style>
