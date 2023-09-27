import { Box, Typography, ListItem, Checkbox, Button } from "@mui/material";
import { CheckCircle, DataUsage, Close } from "@mui/icons-material";

interface ITodoProps extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function Todo({ id, status, text, toggleTodo, removeTodo }: ITodoProps) {
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Checkbox
        checked={status}
        color="success"
        icon={<DataUsage sx={{ fontSize: 28 }} />}
        checkedIcon={<CheckCircle sx={{ fontSize: 28 }} />}
        onChange={() => toggleTodo(id)}
      />
      <Box
        sx={
          status ? { color: "#cccccc", textDecoration: "line-through" } : null
        }
      >
        <Typography variant="h5" sx={{ fontWeight: 300 }}>
          {text}
        </Typography>
      </Box>
      <Button
        sx={{ flexGrow: 2, justifyContent: "flex-end" }}
        onClick={() => removeTodo(id)}
      >
        <Close color="error" sx={{ fontSize: 28 }} />
      </Button>
    </ListItem>
  );
}

export default Todo;

export interface ITodo {
  id: number;
  text: string;
  status: boolean;
}
