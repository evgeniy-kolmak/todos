import ListTodos, { TodoList } from "./components/ListTodos";
import {
  Container,
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
    _event: React.MouseEvent<HTMLElement>,
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
    setInputValue("");
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
    <Container maxWidth="xs">
      <Box
        sx={{
          pt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Todos
        </Typography>
        <Box>
          <TextField
            sx={{ mr: 2 }}
            value={inputValue}
            size="small"
            placeholder="Введите вашу задачу"
            label="Задача"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={addTodo} variant="contained">
            Добавить
          </Button>
        </Box>
        {filtred.length ? (
          <ListTodos
            list={filtred}
            removeTodo={removeTodo}
            toggleTodo={toogleTodo}
          />
        ) : (
          <Typography variant="h5" sx={{ fontWeight: 300, mt: 2, mb: 1.2 }}>
            Задач больше не осталось
          </Typography>
        )}
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
    </Container>
  );
}

export default App;
