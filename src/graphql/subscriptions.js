import gql from "graphql-tag";

export const APPLICATION_SUBSCRIPTION = gql`
    subscription {
        application {
            actionType
            application {
                id
                status
                updated
                property_id
                offer
                created
                buyer {
                    id
                    email
                    firstname
                    lastname
                    roles
                }
            }
        }
    }
`;
