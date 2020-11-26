export const login = `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password:$password) {
            user{
                id
                firstName
                lastName
                userType
                email
            }
            token
            tokenExpiration
        }
    }
`;
