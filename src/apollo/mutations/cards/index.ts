import { gql } from '@apollo/client'

export const CREATE_TODO = gql`
    mutation createTodo($input: TodoInput) {
        createUser(input: $input) {
            id, value, image
        }
    }
`

export const CREATE_TODOS = gql`
    mutation createTodo($input: TodoInput) {
        createUser(input: $input) {
            id, value, image
        }
    }
`