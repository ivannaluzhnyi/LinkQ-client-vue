import gql from "graphql-tag";

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

