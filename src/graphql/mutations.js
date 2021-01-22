import gql from "graphql-tag";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                roles
                isActive
                created
                firstname
                lastname
                email
                birthdate
            }
        }
    }
`;

export const REGISTER_USER = gql`
    mutation signup(
        $email: String!
        $isActive: Boolean!
        $password: String!
        $roles: Json!
    ) {
        signup(
            email: $email
            isActive: $isActive
            password: $password
            roles: $roles
        ) {
            token
            user {
                id
                roles
                isActive
                created
                firstname
                lastname
                email
                birthdate
            }
        }
    }
`;

export const CREATE_APPLICATION = gql`
    mutation createApplication(
        $offer: Float!
        $property_id: String!
        $buyerId: Int!
    ) {
        createApplication(
            data: {
                offer: $offer
                property_id: $property_id
                status: PENDING
                buyer: { connect: { id: $buyerId } }
                contract: {}
            }
        ) {
            id
            created
            status
            property_id
        }
    }
`;

export const UPDATE_APPLICATION = gql`
    mutation updateApplication(
        $data: ApplicationUpdateInput!
        $where: ApplicationWhereUniqueInput!
    ) {
        updateApplication(data: $data, where: $where) {
            id
            created
            status
            property_id
        }
    }
`;
