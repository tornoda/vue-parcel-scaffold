import Vuex from "vuex";
import home from "./home.js";

export default () => {
    return new Vuex.Store({
        modules: {
            home
        }
    });
};
