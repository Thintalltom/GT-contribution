export type ToDoProps = {
  _id?: string;
  title: string;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export const addToDo = (newToDo: ToDoProps) => {
  setToDoList((prevList) => [newToDo, ...prevList]);
};
