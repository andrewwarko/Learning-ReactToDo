var React = require('react');
var Todo = require('Todo');

// Spread operator (...) can pass properties on object into individual props.
// Unique key property is important so React knows how to keep track if each item.
var TodoList = React.createClass({
  render: function() {
      var {todos} = this.props;
      var renderTodos = () => {
          if (todos.length === 0) {
              return (
                <p className="container__message">Nothing To Do</p>  
              );
          }
          return todos.map((todo) => {
              return (
                  <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
              );
          });
      };
    return (
      <div>
          {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
