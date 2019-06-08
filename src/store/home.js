import {getOnlineTodo} from "../api/home"

const state = {
    count: 1,
    onlineTodo: {
        userId: 0,
        id: 0,
        title: '',
        completed: false
    },
};


const getters = {

    counterString: ({count}) => {
        return `一共计数${count}次`;
    },

};


const mutations = {

    increase(state, payload) {
        state.count += payload;
    },

    showOnlineTodo(state, payload) {
        state.onlineTodo = {
            ...state.onlineTodo,
            ...payload
        }
    },
};


const actions = {

    asyncIncrease(ctx, payload) {
        setTimeout(() => {
            ctx.commit("increase", payload);
        }, 1000);
    },

    getOnlineTodo(ctx, payload) {
        getOnlineTodo(payload).then(res => {
            ctx.commit("showOnlineTodo", res)
        }).catch(() => {
            // err
        })
    }

};


export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
};
