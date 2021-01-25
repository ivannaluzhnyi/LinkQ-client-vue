import propertyService from "../Services/property.service";
import {http} from "@/core/http";
import commentService from "../Services/comment.service";

function getProperty({ commit }, searchInformation) {
    propertyService
        .getProperty(searchInformation)
        .then((response) => {
            commit("setProperties", response);
        })
        .catch((error) => {
            console.log('error :>> ', error);
        });
}

function loadProperty({ commit }, idProperty){
    propertyService
        .loadProperty(idProperty)
        .then((response) => {
            commit('setProperty', response);
        }).catch((error) => {
            console.log(error);
        });
}

function getActualUser({ commit }, emailUser){
    http.get(`users?email=${emailUser}`)
        .then((response) => {
            commit('setPropertiesUser', response.data[0])
        }).catch((error) => {
        console.log(error);
        });
}

function getComments({ commit }) {
    commentService.getComments(commit)
        .then((r) =>
            console.log(r)
        );
}

function sendComment({ commit }) {
    commentService.sendComment(commit)
        .then((r) =>
            console.log(r)
        );
}


export const actions = { getProperty, loadProperty, getActualUser, getComments, sendComment };
