import {createStore} from "vuex";

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

const store = createStore({
   modules: {
       prods: productsModule,
       cart: cartModule
   },
    state() {
       return {
           isLoggedIn: false
       }
    },
    mutations: {
        login(state, payload) {
            state.isLoggedIn = true;
        },
        logout(state, payload) {
            state.isLoggedIn = false;
        },
    },
    actions: {
       userLogin(context) {
           context.commit('login')
       },
        userLogout(context) {
           context.commit('logout')
        }
    },
    getters: {
       isAuth(state) {
           return state.isLoggedIn;
       }
    }
});

export default store;