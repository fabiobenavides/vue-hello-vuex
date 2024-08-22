import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        counter: 0,
        colorCode: 'blue'
    },
    mutations: {
        increaseCounter(state, randomNumber) {
            state.counter += randomNumber;
        },
        decreaseCounter(state, randomNumber) {
            state.counter -= randomNumber;
        },
        setColorCode(state, newColorCode) {
            state.colorCode = newColorCode;
        }
    },
    actions: {
        increaseCounter({commit}) {
            axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&format=plain&base=10')
                .then(response => {
                    commit('increaseCounter', response.data);
                });
        },
        decreaseCounter({commit}) {
            axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&format=plain&base=10')
                .then(response => {
                    commit('decreaseCounter', response.data);
                });
        }
    },
    getters: {
        counterSquared(state) {
            return state.counter * state.counter;
        }
    },
    modules: {

    }
})