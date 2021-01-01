import React, { useState }from 'react';
import style from './TodoForm.module.css'
import { connect } from 'react-redux'
import { startAddTodo } from '../../redux/actions/todo';



function TodoForm(props) {
    const [state, setState] = useState('')

    const sumbitHandler = (e) =>{
        e.preventDefault();
        if(state===''){
            return
        }
        props.dispatch(startAddTodo({
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