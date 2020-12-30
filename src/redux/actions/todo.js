export const addTodo = ({id, body = 'nothing', done = false}) => {
    return {
        type: 'ADD_TODO',
        body:{
            id,
            body, 
            done
        }
    }
}

export const deleteTodo = ({id}) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const changeDone = ({id}) => {
    return {
        type:'CHANGE_DONE',
        id
    }
}