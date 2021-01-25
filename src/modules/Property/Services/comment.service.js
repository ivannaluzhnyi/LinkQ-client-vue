import { apolloClient } from "@/plugins/apollo-client";

import { CREATE_COMMENT } from "../Store/mutation";
import { GET_COMMENTS } from "../Store/query";

function getComments(idProperty) {
    return apolloClient
        .query( {
            query: GET_COMMENTS,
            variables: {
                where: {
                    idProperty: idProperty,
                },
            },
        })
        .then(async ({ data }) => {
            return data.comments;
        });
}

function sendComment(props) {
    return apolloClient
        .mutate({
            mutation: CREATE_COMMENT,
            variables: { ...props }
        })
        .then(async ({ data }) => {
            return data.createComment;
        });
}
export default {
    getComments,
    sendComment
};