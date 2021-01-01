import React from 'react';
import {connect} from 'react-redux'
import style from './App.module.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';



function App(props) {

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <p className={style.header}>React Todo</p>
      </div>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}

const mapStateToProps = (props, state) => {
  return { }
}

export default connect(mapStateToProps)(App);
