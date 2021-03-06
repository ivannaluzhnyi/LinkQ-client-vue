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
        $firstname: String
        $lastname: String
        $salary: Float
    ) {
        signup(
            email: $email
            isActive: $isActive
            password: $password
            roles: $roles
            firstname: $firstname
            lastname: $lastname
            salary: $salary
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

export const CREATE_CONTRACT = gql`
    mutation createContract($price: Float!, $application_id: Int!) {
        createContract(
            data: {
                price: $price
                application: { connect: { id: $application_id } }
            }
        ) {
            id
            price
            created
            updated
        }
    }
`;


export const CREATE_COMMENT = gql`
    mutation createComment(
        $email: String!
        $message: String!
        $idProperty: Int!
        $validate: Boolean
    ) {
        createComment(
            data: {
                email: $email
                message: $message
                validate: $validate
                idProperty: $idProperty

            }
        ) {
            id
            email
            message
            validate
            idProperty
        }
    }
`;


