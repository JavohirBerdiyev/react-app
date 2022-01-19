import React from 'react';
import Bookitem from './BookItem';

const books = [
  {
    title: 'Hello Js',
    author: 'Bello Nello',
    status: 'deleted'
  },
  {
    title: 'Bye bye',
    author: 'Tine Mina',
    status: 'active'
  },
  {
    title: 'Hello React',
    author: 'Husan',
    status: 'active'
  }
]

const Books = () => {

  const authorDetails = (author) => {
    alert(`I am ${author}`);
  }

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        <li>
          <Bookitem
            title="My React book"
            author="Tim Kim Jim"
            handleClick={authorDetails}
            status="deleted"
          />
        </li>
        <li>
          <Bookitem
            title="Book2 title"
            author="Unknown"
            status="active"
            handleClick={authorDetails}
          />
        </li>
        <li>Book3</li>
        <li>Book4</li>
      </ul>
    </div>
  )
}

export default Books;