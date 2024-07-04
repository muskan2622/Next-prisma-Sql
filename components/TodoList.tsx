// components/TodoList.tsx
import React, { useState } from 'react';
import TodoCard from './TodoCard';
import Todo from '../types/todo';

type Props = {
  todos: Array<Todo>;
};

const TodoList: React.FC<Props> = ({ todos }) => {
  const [todoList, setTodoList] = useState<Array<Todo>>(todos);

  // Function to handle deletion of a todo item
  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodos);
  };

  return (
    <section className='flex flex-col gap-2 px-6 border-l border-r mb-4'>
      {todoList && todoList.length > 0 ? (
        todoList.map((todo) => (
          <TodoCard
            key={todo.id}
            body={todo.body}
            onDelete={() => handleDeleteTodo(todo.id)} // Pass delete function as prop
          />
        ))
      ) : (
        <p>No Todos were found...</p>
      )}
    </section>
  );
};

export default TodoList;
