import { setStore, createStore } from "hooks-for-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleWare } from "redux";

const logDispatch = (store) => (next) => {
    return next(action);
};

process.env.NODE_ENV === "development" &&
    setStore(
        createStore({}, composeWithDevTools(applyMiddleWare(logDispatch)))
    );
