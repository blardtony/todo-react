export type TodoItemType = {
  id: number;
  name: string;
  description: string;
};


export type TodoType = {
  id: number;
  name: string;
  tasks: Array<TodoItemType>;
};

export type TodosListType = Array<TodoType>;
