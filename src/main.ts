import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'virtual:svg-icons-register';

import App from './App.vue';
import { store } from './store';
import { router } from './router';
import { i18n } from './i18n';
import { updateTheme } from './utils/theme';

import 'virtual:uno.css';
import '@/assets/styles/index.scss';
// If you want to use ElMessage, import it.
import './assets/styles/element/index.scss';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';

async function main() {
  // Start mock server
  if (import.meta.env.DEV || import.meta.env.VITE_IS_VERCEL) {
    const { worker } = await import('./mocks/index');
    worker.start({ onUnhandledRequest: 'bypass' });
  }

  const app = createApp(App);

  // load plugins
  app.use(store);
  app.use(router);
  app.use(ElementPlus);
  app.use(i18n);

  app.mount('#app');

  updateTheme();
}

main();
