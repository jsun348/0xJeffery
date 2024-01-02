import React from 'react';
import { Link } from 'react-router-dom';
import { books, medias, thoughts } from "../database";

const ReadingList = ({ items, itemType }) => {
  return (
    <div className='flex flex-wrap'>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            {item.link ? (
              <a href={item.link} target="_blank">{item.title}</a>
            ) : (
              <span>{item.title}</span>
            )}
            <span className='disclaimer'> {item.author}</span> - {item.description}
            {item.notes && (
              <Link to={item.notes} className="text-orange-600"> 【My Notes】</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const BookList = () => <ReadingList items={books} itemType="book" />;
export const MediaList = () => <ReadingList items={medias} itemType="media" />;
export const ThoughtList = () => <ReadingList items={thoughts} itemType="media" />;
