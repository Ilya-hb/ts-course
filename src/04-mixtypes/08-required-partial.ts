interface Todo {
  readonly id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: number;
}

type ReadOnlyTodo = Readonly<Todo>;

type PartialTodo = Partial<Todo>;

function updateTodo(todo: Todo, fieldstoUpdate: PartialTodo) {
  return { ...todo, ...fieldstoUpdate };
}

type RequiredTodo = Required<Todo>;
