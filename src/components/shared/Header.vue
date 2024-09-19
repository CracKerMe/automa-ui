<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import LoginButton from '../LoginButton.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import LangSwitcher from '../LangSwitcher.vue';
import DropDown from '@/components/downDown/index.vue';

const { t } = useI18n();
</script>
<template>
  <nav
    class="flex container h-16 items-center justify-between w-full bg-opacity-100"
  >
    <div class="flex flex-row justify-between items-center">
      <router-link to="/" class="logo flex items-center">
        <img
          src="@/assets/images/logo.svg"
          alt="Logo"
          class="w-10 inline-block"
        />
        <p class="ml-2 inline-block text-lg align-middle">
          {{ t('common.title') }}
        </p>
      </router-link>
    </div>
    <div
      class="flex-grow text-gray-600 dark:text-gray-300 hidden lg:flex h-full justify-center items-center"
    >
      <router-link to="/about" class="nav-item">{{
        t('common.about')
      }}</router-link>
      <router-link to="/pricing" class="nav-item">{{
        t('common.pricing')
      }}</router-link>
      <DropDown class="resource por">
        <template #trigger>
          <span class="nav-item">
            {{ t('common.resources') }}
            <i-material-symbols:keyboard-arrow-down
              class="nav-item-arrow-down transition-all duration-300"
            />
          </span>
        </template>
        <div
          class="resource-dropdown rounded-lg shadow-2xl bottom-auto left-1/2 hidden lg:block -translate-x-1/2 max-w-5xl xl:max-w-6xl mt-2 mx-auto bg-white dark:bg-black transform rounded-lg transition-transform p-4"
        >
          <nav class="flex space-x-2 xl:space-x-4">
            <router-link
              to="/tutorials"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800"
            >
              <span
                class="p-2 rounded-lg bg-gray-1 inline-block leading-none dark:bg-gray-900"
              >
                <i-material-symbols:book-4-outline class="text-3xl" />
              </span>
              <p class="font-semibold my-2">{{ t('common.tutorials') }}</p>
              <p class="text-gray-600 leading-tight mt-px">
                {{ t('resources-tip-1') }}
              </p>
            </router-link>
            <router-link
              to="/documentation"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800"
            >
              <span
                class="p-2 rounded-lg bg-gray-1 inline-block leading-none dark:bg-gray-900"
              >
                <i-material-symbols:apk-document-outline class="text-3xl" />
              </span>
              <p class="font-semibold my-2">{{ t('common.documentation') }}</p>
              <p class="text-gray-600 leading-tight mt-px">
                {{ t('resources-tip-2') }}
              </p>
            </router-link>
            <router-link
              to="/blog"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800"
            >
              <span
                class="p-2 rounded-lg bg-gray-1 inline-block leading-none dark:bg-gray-900"
              >
                <i-ic:outline-edit-location class="text-3xl" />
              </span>
              <p class="font-semibold my-2">{{ t('common.blog') }}</p>
              <p class="text-gray-600 leading-tight mt-px">
                {{ t('resources-tip-3') }}
              </p>
            </router-link>
            <router-link
              to="/youtube"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800"
            >
              <span
                class="p-2 rounded-lg bg-gray-1 inline-block leading-none dark:bg-gray-900"
              >
                <i-tdesign:logo-youtube class="text-3xl" />
              </span>
              <p class="font-semibold my-2">{{ t('common.youtube') }}</p>
              <p class="text-gray-600 leading-tight mt-px">
                {{ t('resources-tip-4') }}
              </p>
            </router-link>
          </nav>
        </div>
      </DropDown>
      <DropDown class="resource por">
        <template #trigger>
          <span class="nav-item">
            Demo
            <i-material-symbols:keyboard-arrow-down
              class="nav-item-arrow-down transition-all duration-300"
            />
          </span>
        </template>
        <div
          class="resource-dropdown rounded-lg shadow-2xl bottom-auto left-1/2 hidden lg:block -translate-x-1/2 max-w-5xl xl:max-w-6xl mt-2 mx-auto bg-white dark:bg-black transform rounded-lg transition-transform p-4"
        >
          <nav class="flex flex-col">
            <router-link
              to="/gsap"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800 hover:scale-105"
            >
              GSAP
            </router-link>
            <router-link
              to="/contacts"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800 hover:scale-105"
            >
              Contacts
            </router-link>
            <router-link
              to="/editor"
              class="p-4 hover:bg-gray-2 rounded-lg transition w-64 lg:w-72 dark:hover:bg-gray-800 hover:scale-105"
            >
              Fabric Editor
            </router-link>
          </nav>
        </div>
      </DropDown>
    </div>
    <div class="flex flex-row justify-between items-center ml-auto">
      <LangSwitcher />
      <div>
        <ThemeSwitcher class="mx-5" />
      </div>
      <LoginButton />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.logo {
  &:hover p {
    color: var(--el-color-primary);
  }
}

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
    color: var(--el-color-primary);
  }

  &:hover {
    .nav-item-arrow-down {
      transform: rotate(180deg);
    }
  }
}

.resource {
  margin-left: 1rem;
  z-index: 50;

  &-dropdown {
    // width: 318px;
    // height: 360px;
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
    left: 0;
    top: 40px;
  }
}
</style>

<style lang="scss">
.dark {
  .nav-item {
    &.router-link-exact-active {
      color: #ffffff;
    }

    &:hover {
      background-color: rgb(39, 39, 42, 0.05);
    }
  }
}
</style>
