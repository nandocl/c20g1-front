import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// const baseURL = "http://localhost:3000";
const baseURL = "https://grupo1b20mintic-back.herokuapp.com";
axios.defaults.baseURL = baseURL;

Vue.use(VueAxios, axios);