import React, { useState }from 'react';
import style from './TodoForm.module.css'
import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions/todo';
import { v4 as uuidv4 } from 'uuid';


function TodoForm(props) {
    const [state, setState] = useState('')

    const sumbitHandler = (e) =>{
        e.preventDefault();
        if(state===''){
            return
        }
        props.dispatch(addTodo({
            id: uuidv4(),
            body: state,
            done:false
        }))
        setState('')
    }

    return (
        <div className={style.container}>
            <form onSubmit={sumbitHandler} className={style.form}>
                <input
                    type='text'
                    placeholder='Task'
                    autoFocus
                    onChange={e=>setState(e.target.value)}
                    className={style.input}
                    value={state}
                />
                <button className={style.button}>Sumbit</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return{}
}

export default connect(mapStateToProps)(TodoForm);