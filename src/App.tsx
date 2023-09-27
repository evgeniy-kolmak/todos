import ListTodos, { TodoList } from "./components/ListTodos";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState, useEffect } from "react";

const listTodos: TodoList = [
  { id: 1, text: "Тестовое задание", status: false },
  { id: 2, text: "Прекрасный код", status: true },
  { id: 3, text: "Покрытие тестами", status: false },
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(listTodos);
  const [alignment, setAlignment] = useState("all");
  const [filtred, setFiltred] = useState(todos);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      todoFilter(newAlignment);
    }
  };

  const todoFilter = (alignment: string) => {
    switch (alignment) {
      case "active": {
        setFiltred(todos.filter((todo) => !todo.status));
        break;
      }
      case "completed": {
        setFiltred(todos.filter((todo) => todo.status));
        break;
      }
      default: {
        setFiltred(todos);
        break;
      }
    }
  };

  const addTodo = () => {
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
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

  useEffect(() => todoFilter(alignment), [todos]);
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
      <ListTodos
        list={filtred}
        removeTodo={removeTodo}
        toggleTodo={toogleTodo}
      />
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="all">Все</ToggleButton>
        <ToggleButton value="active">Активные</ToggleButton>
        <ToggleButton value="completed">Завершенные</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default App;
