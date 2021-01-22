import {
    ACCEPT_APPLICATION_FAILURE,
    ACCEPT_APPLICATION_REQUEST,
    ACCEPT_APPLICATION_SUCCESS,
    REFUSE_APPLICATION_FAILURE,
    REFUSE_APPLICATION_SUCCESS,
    REFUSE_APPLICATION_REQUEST,
    RESET_APPLICATION_ACTION,
} from "./mutation-actions";

export const mutations = {
    [ACCEPT_APPLICATION_REQUEST](state) {
        state.actionLoading = true;
        state.responseType = "";
    },
    [ACCEPT_APPLICATION_SUCCESS](state) {
        state.actionLoading = false;
        state.responseType = "ACCEPT_SUCCESS";
    },
    [ACCEPT_APPLICATION_FAILURE](state) {
        state.actionLoading = false;
        state.responseType = "ACCEPT_FAILURE";
    },
    [REFUSE_APPLICATION_REQUEST](state) {
        state.actionLoading = true;
        state.responseType = "";
    },
    [REFUSE_APPLICATION_SUCCESS](state) {
        state.actionLoading = false;
        state.responseType = "REFUSE_SUCCESS";
    },
    [REFUSE_APPLICATION_FAILURE](state) {
        state.actionLoading = false;
        state.responseType = "REFUSE_FAILURE";
    },
    [RESET_APPLICATION_ACTION](state) {
        state.actionLoading = false;
        state.responseType = "";
    },
};
