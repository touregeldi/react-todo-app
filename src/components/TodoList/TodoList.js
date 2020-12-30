import React from 'react';
import { connect } from 'react-redux';
import { changeDone, deleteTodo } from '../../redux/actions/todo';
import style from './TodoList.module.css'


function TodoList(props) {
    let tasks = props.tasks;
    
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
                                }
                                    
                                }/>
                                    {task.body}
                                <button 
                                    className={style.button}
                                    onClick={() => {
                                        props.dispatch(deleteTodo(task))
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