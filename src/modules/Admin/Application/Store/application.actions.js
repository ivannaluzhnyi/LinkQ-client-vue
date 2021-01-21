import {
    ACCEPT_APPLICATION_FAILURE,
    ACCEPT_APPLICATION_REQUEST,
    ACCEPT_APPLICATION_SUCCESS,
    REFUSE_APPLICATION_FAILURE,
    REFUSE_APPLICATION_SUCCESS,
    REFUSE_APPLICATION_REQUEST,
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

    console.log("application actions ==> ", application);

    applicationService
        .changeStatusApplication(application.id, "REFUSED")
        .then((response) => {
            commit(REFUSE_APPLICATION_SUCCESS, response);

            return response;
        })
        .catch((error) => {
            commit(REFUSE_APPLICATION_FAILURE, error);

            return error;
        });
}

export const actions = { acceptApplication, refuseApplication };
