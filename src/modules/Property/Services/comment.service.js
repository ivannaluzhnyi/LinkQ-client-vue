import { apolloClient } from "@/plugins/apollo-client";

import { CREATE_COMMENT } from "@/graphql/mutations";
import { GET_COMMENTS } from "../Store/query";

function getComments(idProperty) {
  return apolloClient
    .query({
      query: GET_COMMENTS,
      variables: {
        idProperty: parseInt(idProperty),
      },
    })
    .then(async ({ data }) => {
      return data.comments;
    });
}

function sendComment(props) {
  console.log("props SERVICE =+> ", props);
  return apolloClient
    .mutate({
      mutation: CREATE_COMMENT,
      variables: { ...props },
    })
    .then(async ({ data }) => {
      console.log("data ==> ", data);
      return data.createComment;
    });
}
export default {
  getComments,
  sendComment,
};
