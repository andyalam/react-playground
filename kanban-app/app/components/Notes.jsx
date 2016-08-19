import React from 'react';
import uuid from 'uuid';

import Note from './Note';

export default ({notes, onDelete}) => (
  <ul>{notes.map(note =>
      <li key={note.id}>
        <Note
          onDelete={onDelete.bind(null, note.id)}
          task={note.task}/>
      </li>
  )}</ul>
)
