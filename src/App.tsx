import ListTodos, { TodoList } from "./components/ListTodos";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const listTodos: TodoList = [
  { id: 1, text: "Тестовое задание", status: false },
  { id: 2, text: "Прекрасный код", status: true },
  { id: 3, text: "Покрытие тестами", status: false },
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(listTodos);

  const addTodo = () => {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: listTodos.length + 1,
          text: inputValue,
          status: false,
        },
      ]);
    }
  };

  const toogleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          status: !todo.status,
        };
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Todos</Typography>
      <Box>
        <TextField
          sx={{ mr: 2 }}
          size="small"
          placeholder="Введите вашу задачу"
          label="Задача"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={addTodo} variant="contained">
          Добавить
        </Button>
      </Box>
      <ListTodos list={todos} removeTodo={removeTodo} toggleTodo={toogleTodo} />
    </Box>
  );
}

export default App;
