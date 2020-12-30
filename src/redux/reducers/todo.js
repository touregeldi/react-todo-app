const todo = (state =[], action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.body
            ]
        case 'DELETE_TODO':
            let newarray = state.filter(item => item.id !== action.id)
            return[
                ...newarray
            ]
        case 'CHANGE_DONE':
            let newarray2 = state.map(({id, body, done}) => {
                if(action.id === id){
                    return {
                        id,
                        body,
                        done: !done
                    }
                }
                return {
                    id,
                    body,
                    done
                }
            })
            return [
                ...newarray2
            ]
        default:
            return state
    }
    
}

export default todo;