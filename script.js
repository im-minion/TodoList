// Code goes here
var todoList = {
  todos: [],
  displayTodos: function() {
    // console.log('My todos : ', this.todos);
    if (this.todos.length == 0) {
      console.log('Todo List is empty :(')
    }
    else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed == true) {
          console.log('(x)', this.todos[i].todoText);
        }
        else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function(position, newItemValue) {
    console.log("before : ")
    this.displayTodos();
    this.todos[position].todoText = newItemValue;
    console.log("after : ")
    this.displayTodos();
  },
  deleTodos: function(position) {
    console.log("before : ")
    this.displayTodos();
    this.todos.splice(position, 1)
    console.log("after : ")
    this.displayTodos();
  },
  todoCompleted: function(position) {
    var temp = this.todos[position];
    temp.completed = !temp.completed;
    //this.displayTodos();
  },
  toggleAll: function() {
    // completedTodos == noOftodos
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed == true) {
        completedTodos++;
      }
    }
    
    if (totalTodos == completedTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    }else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click',function() {
  todoList.displayTodos();
});


toggleAllButton.addEventListener('click',function() {
  todoList.toggleAll();
});
