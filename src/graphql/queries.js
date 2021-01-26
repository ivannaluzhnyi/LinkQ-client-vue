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

export const GET_USER_APPLICATIONS = gql`
    query {
        applications(skip: 0) {
            id
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

export const GET_PENDING_APPLICATIONS = gql`
    query {
        applications(skip: 0, where: { status: PENDING }) {
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

export const GET_CONTRACTS = gql`
    query {
        contracts(skip: 0) {
            id
            price
            application {
                offer
                id
                property_id
                status
                buyer {
                    id
                    email
                    firstname
                    lastname
                    created
                    salary
                    roles
                }
            }
        }
    }
`;

export const GET_APPLICATION_BY_PROPERTY = gql`
    query applications($user_id: Int!, $property_id: String) {
        applications(
            where: { property_id: $property_id, buyer: { id: $user_id } }
        ) {
            id
        }
    }
`;
