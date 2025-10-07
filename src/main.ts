import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@/styles/global.scss'
import { setupStore } from './store'
import { setupRouter, router } from './router'
import { setupRouterGuard } from './router/guard'

const initApp = async () => {
  const app = createApp(App)

  // useWow()
  // Configure store
  setupStore(app)

  // Initialize internal system configuration
  // initAppConfigStore();

  // Register global components
  // registerGlobComp(app);

  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  // app.use(i18n);

  // Configure routing
  setupRouter(app)

  // router-guard
  setupRouterGuard(router)

  // Register global directive
  // setupGlobDirectives(app);

  // Configure global error handling
  // setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app')
}

initApp()
