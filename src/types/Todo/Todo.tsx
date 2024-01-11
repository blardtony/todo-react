export type TodoItemType = {
  id: string;
  name: string;
  description: string;
};

export type TodoType = {
  id: string;
  name: string;
  tasks: Array<TodoItemType>;
};

export type TodosListType = Array<TodoType>;
