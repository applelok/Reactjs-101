import React, { Component } from 'react';
import { TodoActions } from '../actions/todoActions';

//我們主要任務是讓使用者可以透過 input 新增代辦事項

// Component 中我們讓使用者可以新增代辦事項
class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.state = {
      text: '',
      editing: false,
    };
  }
  onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  onAdd() {
    TodoActions.addTodo(this.state.text);
    this.setState({
      text: '',
    });
  }

  // 使用者輸入文字在 input 時會觸發 onChange 事件，進而更新內部的 state
  //當使用者按了送出鈕就會觸發 onAdd 事件，dispatch 出 addTodo event
  render() {
    return (
      <div>
        <h1>TodoFlux</h1>
        <div>
          <input
            value={this.state.text}
            type="text"
            placeholder="請輸入代辦事項"
            onChange={this.onChange}
          />
          <button
            onClick={this.onAdd}
          >
            送出
          </button>
        </div>
      </div>
    );
  }
}

export default TodoHeader;