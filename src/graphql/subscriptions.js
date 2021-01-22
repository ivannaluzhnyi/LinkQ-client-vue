import gql from "graphql-tag";

export const APPLICATION_SUBSCRIPTION = gql`
    subscription {
        application {
            actionType
            application {
                id
                offer
                status
            }
        }
    }
`;
