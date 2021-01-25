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
