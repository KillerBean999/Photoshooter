import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function EventImgs() {
  const nav = useNavigate()

  return (
    <div className="events">
      <div className="event-item dubai">
        <button onClick={()=> nav('/dubai')} className='event-btn' >View Dubai Gallery</button>
      </div>
      <div className="event-item amsterdam">
        <button onClick={()=> nav('/amsterdam')} className='event-btn' >View Amsterdam Gallery</button>
      </div>
      <div className="event-item india">
        <button onClick={()=> nav('/india')} className='event-btn' >View India Gallery</button>
      </div>
    </div>
  );
}
