import React from "react";
import ReactDOM from "react-dom";


var Clock = React.createClass({
  render: function () {
    return <span>{Date()}</span>;
/*    return <span>{new Date().toLocaleTimeString()}</span>; */
  }
});


var TodoItems = React.createClass({
  render: function() {
    var todoEntries = this.props.entries;

    function createTasks(item) {
    return <li key={item.key}>{item.key +" "+ ">>>>" +" "+ item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);


    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});


var TodoList = React.createClass({

    getInitialState: function(){
    return{
    items: []
    };
    },
      addItem: function(e) {
          var itemArray = this.state.items;

          itemArray.push(
          {
          text: this._inputElement.value,
          key: new Date().toLocaleTimeString()
    /*    key: Date.now()  */
          }
          );

          this.setState({
          items: itemArray
          });

          this._inputElement.value = "";

          e.preventDefault();

      },


render: function() {
return (
  <div className="todoListMain">
  <span><Clock/></span>
    <div className="header">
      <form onSubmit={this.addItem}>
        <input ref={(a) => this._inputElement = a} placeholder="enter task">
        </input>
        <button type="submit">add</button>
      </form>
    </div>

  <TodoItems entries={this.state.items}/>


  </div>

);
}
});

var destination = document.querySelector("#container");

ReactDOM.render(

<div>
<TodoList/>
</div>,

destination
);
