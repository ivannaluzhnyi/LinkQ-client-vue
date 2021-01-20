import gql from "graphql-tag";

export const LOGGED_IN_USER = gql`
    query {
        me {
            id
            email
        }
    }
`;

export const GET_APPLICATIONS = gql`
    query {
        applications(skip: 0) {
            id
            buyer {
                id
                email
                firstname
                lastname
                created
                salary
                roles
            }
            contract {
                id
                price
                created
            }
            created
            offer
            property_id
            updated
            status
        }
    }
`;
