import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    state() {
        return {
            counter: 0,
            user: ''
        }
    },
        mutations: {
            increment(state, payload){
                state.counter += payload.number;
                state.user = payload.user;
                state.message = (`User ${payload.user} touched the button.`);
            }
        }
};
const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setLogin(state, status) {
            state.isLoggedIn = status;
        }
    },
    actions: {
        loginUser(context) {
            context.commit('setLogin', true);
        },
        logoutUser(context) {
            context.commit('setLogin', false);
        }
    },
    getters: {
        userIsLoggedIn(state) {
            return state.isLoggedIn;
        }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app');
