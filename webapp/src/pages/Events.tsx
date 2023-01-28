
import jayhawk from "./jayhawk-4.png"

import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

const config = {
  "clientId": "<CLIENT_ID>",
  "apiKey": "<API_KEY>",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)




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
