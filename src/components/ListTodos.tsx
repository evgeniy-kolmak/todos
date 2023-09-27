import Todo, { ITodo } from "./Todo";
import { List, Paper } from "@mui/material";

interface IListTodosProps {
  list: TodoList;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function ListTodos({ list, toggleTodo, removeTodo }: IListTodosProps) {
  return (
    <List sx={{ pt: 4, pb: 3, width: "100%" }}>
      {list.map((todo) => (
        <Paper key={todo.id} elevation={2}>
          <Todo toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo} />
        </Paper>
      ))}
    </List>
  );
}

export default ListTodos;

export type TodoList = ITodo[];
