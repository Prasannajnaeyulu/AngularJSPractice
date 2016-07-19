angular.module("todoapp", [])
  .controller("TodoListController", ['$scope', function($scope) {
    var todoList = {};
    todoList.todos = [{
        "text": "learn english",
        "done": true
    }, {
        "text": "learn hadoop",
        "done": true
    }];

    todoList.addTodo = function() {
        todoList.todos.push({
            text: todoList.todoText,
            done: false
        });
        todoList.todoText = '';
    };

    todoList.remaining = function() {
        var count = 0;
        angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    todoList.archive = function() {
        var oldtodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldtodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };

    $scope.todoList = todoList;
 }]);

