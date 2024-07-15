<script lang="ts" setup>
// import { useI18n } from 'vue-i18n';
import LoginButton from '../LoginButton.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import LangSwitcher from '../LangSwitcher.vue';
import DropDown from '@/components/downDown/index.vue';

// const { t } = useI18n();
</script>
<template>
  <nav
    class="flex container h-16 items-center justify-between w-full bg-opacity-100"
  >
    <div class="flex flex-row justify-between items-center">
      <router-link to="/" class="flex items-center">
        <img
          src="@/assets/images/logo.svg"
          alt="Logo"
          class="w-10 inline-block"
        />
        <p class="ml-2 inline-block text-lg align-middle">ACME</p>
      </router-link>
    </div>
    <div
      class="flex-grow text-gray-600 dark:text-gray-300 hidden lg:flex h-full justify-center items-center"
    >
      <router-link to="/about" class="nav-item"> 关于 </router-link>
      <router-link to="/pricing" class="nav-item"> 价格 </router-link>
      <DropDown class="resource por">
        <template #trigger>
          <router-link to="/resources" class="nav-item">
            资源
            <i-material-symbols:keyboard-arrow-down
              class="nav-item-arrow-down"
            />
            <i-material-symbols:keyboard-arrow-up class="nav-item-arrow-up" />
          </router-link>
        </template>
        <div class="resource-dropdown" />
      </DropDown>
    </div>
    <div class="flex flex-row justify-between items-center ml-auto">
      <LangSwitcher />
      <ThemeSwitcher class="mx-5" />
      <LoginButton />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.nav-item {
  padding: 0.35rem 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke,
    opacity,
    box-shadow,
    transform,
    filter,
    backdrop-filter,
    -webkit-backdrop-filter cubic-bezier(0.4, 0, 0.2, 1) 0.15s;

  &:not(:nth-of-type(1)) {
    margin-left: 1rem;
  }

  &.router-link-exact-active {
    color: #000000;
  }

  &:hover {
    background-color: rgb(39, 39, 42, 0.05);
  }

  .nav-item-arrow-up {
    opacity: 0;
    width: 0;
    height: 0;
  }

  &:hover {
    .nav-item-arrow-down {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .nav-item-arrow-up {
      opacity: 1;
      width: auto;
      height: auto;
    }
  }
}

.resource {
  margin-left: 1rem;

  &-dropdown {
    width: 318px;
    height: 360px;
    background: #ffffff;
    border-radius: 10px;
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: transparent;
    bottom: -10px;
    left: 0;
  }

  ::v-deep(.drop-down-box) {
    left: -120px;
    top: 40px;
  }
}
</style>
