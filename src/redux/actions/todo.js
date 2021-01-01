import { database } from "../../firebase/firebase"

export const addTodo = (body) => {
    return {
        type: 'ADD_TODO',
        body
    }
}

export const startAddTodo = ({body = 'nothing', done = false}) => {
    return (dispatch) => {
        const task = {body, done}

        database.ref('tasks').push(task).then((ref) => {
            dispatch(addTodo({
                id: ref.key,
                ...task
            }))
        })
    }
}

export const loadAndSetTodo = () => {
    return (dispatch) => {
        return database.ref('tasks').once('value').then((snapshot) => {
            const  tasks = []

            snapshot.forEach((childSnapshot) => {
                tasks.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            tasks.forEach(task => dispatch(addTodo(task)))

            
        })
    }
}


export const deleteTodo = ({id}) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const startDeleteTodo = ({id}) => {
    return (dispatch) => {
        database.ref(`tasks/${id}`).remove()
    }
}

export const changeDone = ({id}) => {
    return {
        type:'CHANGE_DONE',
        id
    }
}

export const startChangeDone = ({id, done}) => {
    return (dispatch) => {
        database.ref(`tasks/${id}`).update({
            done: !done
        })
    }
}

