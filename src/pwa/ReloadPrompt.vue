<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue';

// replaced dyanmicaly
const reloadSW: any = '__RELOAD_SW__';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  immediate: true,
  onRegistered(r: any) {
    if (reloadSW === 'true') {
      r &&
        setInterval(async () => {
          // eslint-disable-next-line no-console
          console.log('Checking for sw update');
          await r.update();
        }, 20000 /* 20s for testing purposes */);
    } else {
      // eslint-disable-next-line no-console
      console.log(`SW Registered: ${r}`);
    }
  },
});

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="pwa-toast bg-white dark:bg-black"
    role="alert"
  >
    <div class="message">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <el-button v-if="needRefresh" @click="updateServiceWorker()">
      Reload
    </el-button>
    <el-button @click="close">Close</el-button>
  </div>
</template>

<style>
.pwa-toast {
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  box-shadow: 3px 4px 5px 0 #8885;
  text-align: left;
}

.pwa-toast .message {
  margin-bottom: 8px;
}

.pwa-toast button {
  margin-right: 5px;
  padding: 3px 10px;
  border: 1px solid #8885;
  border-radius: 2px;
  outline: none;
}
</style>
