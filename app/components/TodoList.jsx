var React = require('react');
var Todo = require('Todo');

// Spread operator (...) can pass properties on object into individual props.
// Unique key property is important so React knows how to keep track if each item.
var TodoList = React.createClass({
  render: function() {
      var {todos} = this.props;
      var renderTodos = () => {
          return todos.map((todo) => {
              return (
                  <Todo key={todo.id} {...todo}/>
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
