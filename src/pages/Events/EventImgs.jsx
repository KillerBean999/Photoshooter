import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EventImgs() {
  const nav = useNavigate();

  return (
    <div className="events">
      <div className="event-item wedding">
        <button onClick={() => nav("/weddings")} className="event-btn">
          View Weddings Gallery
        </button>
      </div>
      <div className="event-item birthdays">
        <button onClick={() => nav("/birthday")} className="event-btn">
          View Birthdays Gallery
        </button>
      </div>
      <div className="event-item conserts">
        <button onClick={() => nav("/conserts")} className="event-btn">
          View Conserts Gallery
        </button>
      </div>
    </div>
  );
}
