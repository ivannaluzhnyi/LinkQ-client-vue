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
