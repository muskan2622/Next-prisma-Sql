import React from 'react';

type Props = {
  body: string;
  onDelete: () => void; // Function to handle delete action
};

function TodoCard({ body, onDelete }: Props) {
  return (
    <div className='card select-none cursor-pointer'>
      <div className='card__wrapper flex justify-between p-4 border bg-white'>
        <p className='text-lg font-semibold'>{body}</p>
        <button className='text-red-600 hover:text-red-700' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
