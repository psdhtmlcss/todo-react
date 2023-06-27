export type Task = {
  id: string;
  name: string;
  deleteTask: (id: string) => void;
};