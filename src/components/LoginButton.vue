<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { toast } from '@/utils/toast';
import API from '@/api';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
const router = useRouter();
const { t } = useI18n();

const isLoginDialogVisible = ref(false);
const isLogoutDialogVisible = ref(false);
const formData = ref({
  username: 'admin',
  password: 'admin',
});

function showLoginDialog() {
  isLoginDialogVisible.value = true;
}

async function submitLogin() {
  const res = await API.login('test', '123');
  console.log('res', res);
  if (res.code === 0) {
    toast({
      type: 'success',
      message: '登录成功',
    });
    const userRes = await API.getUser();
    userStore.updateUser(userRes.data);

    isLoginDialogVisible.value = false;
  } else {
    toast({
      type: 'error',
      message: '登录失败',
    });
  }
}

function logout() {
  isLogoutDialogVisible.value = true;
}

function logoutConfirm() {
  userStore.updateUser(null);
  isLogoutDialogVisible.value = false;
}

function goProfilePage() {
  router.push('/profile');
}
</script>

<template>
  <div class="user-info">
    <div v-if="userStore.isLogin" class="flex items-center">
      <el-dropdown>
        <p class="leading-none">{{ userStore?.userInfo?.username }}</p>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goProfilePage">
              个人中心
            </el-dropdown-item>
            <el-dropdown-item @click="logout"> 退出登录 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-button v-else id="login-btn" @click="showLoginDialog">
      {{ t('common.login') }}
    </el-button>
  </div>

  <!-- login dialog -->
  <el-dialog
    id="login-dialog"
    v-model="isLoginDialogVisible"
    :append-to-body="true"
    :align-center="true"
    :title="t('common.login')"
  >
    <el-form :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="formData.password"
          autocomplete="off"
          type="password"
          show-password
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isLoginDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitLogin">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- logout dialog -->
  <el-dialog
    v-model="isLogoutDialogVisible"
    :append-to-body="true"
    :align-center="true"
    title="Logout"
  >
    <span>你确定要退出登录么?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isLogoutDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="logoutConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style lang="scss" scoped>
.user-info {
  display: flex;
}
</style>
