// Todo app dispatcher with actions responding to both
// view and server actions
// 繼承了 Facebook 提供的 Dispatcher API（主要是繼承了 dispatch、register 和 subscribe 的方法），打造自己的 DispatcherClass
import { Dispatcher } from 'flux';


//當使用者觸發 handleAction() 會 dispatch 出事件
class DispatcherClass extends Dispatcher {
  handleAction(action) {
    this.dispatch({
      type: action.type,
      payload: action.payload,
    });
  }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;