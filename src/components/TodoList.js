import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';

//讓新增的代辦事項可以顯示

function getAppState() {
  return {
    todos: TodoStore.getTodos(),
  };
}
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      todos: [],
    };
  }
  //我們在 componentDidMount 設了一個監聽器 TodoStore 資料改變時會去把資料重新再更新，這樣當使用者新增代辦事項時 TodoList 就會保持同步。
  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState(getAppState());
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.todos.map((todo, key) => (
              <li key={key}>{todo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;