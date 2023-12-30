import React from 'react';
import { books, medias, thoughts } from "../database";

const ReadingList = ({ items, itemType }) => {
    return (
      <div className='flex flex-wrap'>
        <ul>
          {items.map((item) => (
            <li key={item.title}>
              {item.link ? (
                <a href={item.link} target="_blank" className=''>{item.title} </a>
              ) : (
                <span className=''>{item.title} </span>
              )}
              <span className='disclaimer'>{itemType === 'book' ? item.author : item.creator}</span> - {item.description} 
              {item.notes && <a className="text-orange-600" href={item.notes}> 【My Notes】</a>}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export const BookList = () => <ReadingList items={books} itemType="book" />;
export const MediaList = () => <ReadingList items={medias} itemType="media" />;
export const ThoughtList = () => <ReadingList items={thoughts} itemType="media" />;