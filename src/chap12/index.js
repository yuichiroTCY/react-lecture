import React, { Component } from 'react';

import App from './App';

export default class extends Component {
  render() {
    return (
      <div>
        <h2>Simple Todo</h2>

        <div className="panel panel-default">
          <div className="panel-body">
            <App />
          </div>
        </div>

        <section className="well">
          <h3>このサンプルのポイント</h3>
          <ul>
            <li>Todoリストを最上位Componentのstateとして管理する</li>
            <li>各Todoを表示するli要素は別Componentにする</li>
            <li>TodoItem内にToggleボタン，Deleteボタンがあるが，onClickはコールバックで渡す</li>
          </ul>
        </section>
      </div>
    );
  }
}
