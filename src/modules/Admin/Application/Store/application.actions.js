import {
    ACCEPT_APPLICATION_FAILURE,
    ACCEPT_APPLICATION_REQUEST,
    ACCEPT_APPLICATION_SUCCESS,
    REFUSE_APPLICATION_FAILURE,
    REFUSE_APPLICATION_SUCCESS,
    REFUSE_APPLICATION_REQUEST,
    RESET_APPLICATION_ACTION,
} from "./mutation-actions";

import applicationService from "../Services/application.service";

function acceptApplication({ commit }, { application }) {
    commit(ACCEPT_APPLICATION_REQUEST, { application });

    applicationService
        .changeStatusApplication(application.id, "ACCEPTED")
        .then((response) => {
            commit(ACCEPT_APPLICATION_SUCCESS, response);

            return response;
        })
        .catch((error) => {
            commit(ACCEPT_APPLICATION_FAILURE, error);

            return error;
        });
}

function refuseApplication({ commit }, { application }) {
    commit(REFUSE_APPLICATION_REQUEST, { application });

    applicationService
        .changeStatusApplication(application.id, "REFUSED")
        .then((response) => {
            commit(REFUSE_APPLICATION_SUCCESS, response);
        })
        .catch((error) => {
            commit(REFUSE_APPLICATION_FAILURE, error);
        });
}

function resetApplicationActionState({ commit }) {
    commit(RESET_APPLICATION_ACTION);
}

export const actions = {
    acceptApplication,
    refuseApplication,
    resetApplicationActionState,
};
