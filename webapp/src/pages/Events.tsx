import React from "react";
import jayhawk from "./jayhawk-4.png"
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const Events = () => {
  return (
    <>
      <img src={jayhawk} alt="" width ="500" height = "500" />
      <div>Events</div>
      <iframe src="https://calendar.google.com/calendar/embed?src=ku.blockchain.institute%40gmail.com&ctz=America%2FChicago" style={{ border: 0 }} width={800} height={600} frameBorder={0} scrolling="no"></iframe>

    </>
  );
};

export default Events;
