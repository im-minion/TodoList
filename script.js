var todoList = {
  todos: [],
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodos: function(position, newItemValue) {
    this.todos[position].todoText = newItemValue;
  },
  deleTodos: function(position) {
    this.todos.splice(position, 1);
  },
  todoCompleted: function(position) {
    var temp = this.todos[position];
    temp.completed = !temp.completed;
  },
  toggleAll: function() {
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
  }
};
var handlers = {
	addTodos : function(){
		var addTodoTextInput=document.getElementById('addTodoTextInput');
		todoList.addTodos(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodos : function(){
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var chnageTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodos(changeTodoPositionInput.valueAsNumber, chnageTodoTextInput.value)
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleTodos : function(){
		var deleTodoPositionInput = document.getElementById('deleTodoPositionInput');
		todoList.deleTodos(deleTodoPositionInput.valueAsNumber);
		deleTodoPositionInput.value = '';
		view.displayTodos();
	},
	todoCompleted : function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.todoCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll : function(){
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	displayTodos : function(){
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';
		for(var i = 0 ; i < todoList.todos.length ; i++){
			var todoLi = document.createElement('li');		
			var todo = todoList.todos[i];
			var todoTextWthCompletion = '';
			
			if(todo.completed == true ){
				todoTextWthCompletion = '(x) ' + todo.todoText;
			}
			else{ 
				todoTextWthCompletion = '( ) ' + todo.todoText;
			}	
			
			todoLi.textContent = todoTextWthCompletion;
			todoUl.append(todoLi);
		}
	}	
}
