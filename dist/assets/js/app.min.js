const input = document.getElementById("task-input");
const inputBtn = document.querySelector(".add-btn");
const toDoContainer = $(".todo__list");

let taskList = [
  {
    status: false,
    task: "Do task 1"
  },
  {
    status: false,
    task: "Do task 2"
  },
  {
    status: false,
    task: "Do task 3"
  },
  {
    status: false,
    task: "Do task 4"
  }
];

var toDo = {
  createElement: function (elem) {
    $(".todo__list").append(
      $(
        '<div class="list"><input class="list__select" type="checkbox" /><div class="list__content">' +
          elem.task +
          '</div><div class="list__delete"><i class="fas fa-trash-alt"></i></div></div>'
      )
    );
  },

  listItem: function () {
    $(taskList).each(function (index, element) {
      toDo.createElement(element);
    });
  },

  addItem: function (elem) {
    taskList.push(elem);
    toDo.createElement(elem);
  },

  addTask: function () {
    $(document).on("click", ".add-btn", function () {
      let inputData = $("#task-input").val();
      let itemarray = { status: false, task: inputData };
      toDo.addItem(itemarray);
      $("#task-input").val("");
    });
  },

  removeItem: function removeElement(i) {
    taskList.splice(i, 1);
    $(toDoContainer.find(".list").get(i)).remove();
  },

  deleteTask: function () {
    $(document).on("click", ".list__delete", function () {
      let k = $(".list .list__delete").index(this);
      toDo.removeItem(k);
    });
  },
  init: function () {
    toDo.listItem();
    toDo.addTask();
    toDo.deleteTask();
  }
};

toDo.init();
