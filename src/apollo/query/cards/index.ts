import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
    query {
        getAllTodos {
            id, value, image, compleated
        }
    }
`

export const GET_ONE_TODO = gql`
    query getTodo($id: ID){
        getOneTodo(id: $id) {
            id, value, image, compleated
        }
    }
`
