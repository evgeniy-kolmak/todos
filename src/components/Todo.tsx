import { Typography, ListItem, Checkbox } from "@mui/material";
import { CheckCircle, DataUsage, Close } from "@mui/icons-material";

interface ITodoProps extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

function Todo({ id, status, text, toggleTodo, removeTodo }: ITodoProps) {
  return (
    <ListItem>
      <Checkbox
        checked={status}
        color="success"
        icon={<DataUsage />}
        checkedIcon={<CheckCircle />}
        onChange={() => toggleTodo(id)}
      />
      <Typography
        sx={
          status ? { color: "#cccccc", textDecoration: "line-through" } : null
        }
      >
        {text}
      </Typography>
      <Close
        sx={{
          cursor: "pointer",
        }}
        onClick={() => removeTodo(id)}
      />
    </ListItem>
  );
}

export default Todo;

export interface ITodo {
  id: number;
  text: string;
  status: boolean;
}
