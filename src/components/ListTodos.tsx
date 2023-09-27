import Todo, { ITodo } from "./Todo";
import { List } from "@mui/material";

interface IListTodosProps {
  list: TodoList;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function ListTodos({ list, toggleTodo, removeTodo }: IListTodosProps) {
  return list.map((todo) => (
    <List key={todo.id}>
      <Todo toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo} />
    </List>
  ));
}

export default ListTodos;

export type TodoList = ITodo[];
