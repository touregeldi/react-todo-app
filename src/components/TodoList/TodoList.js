import React from 'react';
import { connect } from 'react-redux';
import { changeDone, deleteTodo, startChangeDone, startDeleteTodo } from '../../redux/actions/todo';
import style from './TodoList.module.css'
// import { database } from '../../firebase/firebase';
// import { addTodo } from '../../redux/actions/todo';


function TodoList(props) {
    let tasks = props.tasks;

//       useEffect(() => {
//         database.ref('tasks').once('value').then((snapshot) => {
//         const tasks = snapshot.val()

//         Object.values(tasks).forEach(task => {
//             props.dispatch(addTodo(task))
//         console.log('kirdi');
//       })
//     })
//   }, [])

    return (
        <div className={style.container}>
            <ul className={style.ul}>
                {tasks.map(task => {
                    return (
                        <div key={task.id}>
                        <li 
                            key={task.id} 
                            className={style.li}
                            style={{
                                textDecoration: task.done ? 'line-through': null
                        }}
                        > 
                            <input 
                                key={task.id} 
                                className={style.input} 
                                type='checkbox'
                                onChange={() => {
                                    props.dispatch(changeDone(task))
                                    props.dispatch(startChangeDone(task))
                                }
                                    
                                }/>
                                    {task.body}
                                <button 
                                    className={style.button}
                                    onClick={() => {
                                        props.dispatch(deleteTodo(task))
                                        props.dispatch(startDeleteTodo(task))
                                    }}
                                >X</button>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return{
        tasks: state.todo
    }
} 

export default connect(mapStateToProps)(TodoList);