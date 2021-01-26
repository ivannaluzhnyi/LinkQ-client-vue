import gql from "graphql-tag";

export const GET_COMMENTS = gql`
    query comments($idProperty: Int!) {
        comments(
            where: {
                idProperty: $idProperty
            }
            orderBy: created_DESC
        )
        {
            id
            email
            message
            validate
            idProperty
        }
    }
`;
