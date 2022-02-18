import Vue from 'vue';
import settings from '@/core/app-settings'

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Axios
import axios, { AxiosStatic } from 'axios'

axios.defaults.baseURL = settings.API_URL;
Vue.prototype.$axios = axios;
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

Vue.config.productionTip = false;
