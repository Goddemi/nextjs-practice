import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  const { item } = props;
  return (
    <div>
      {item.map(({ id, title, location, date, image }) => (
        <EventItem
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
        />
      ))}
    </div>
  );
};

export default EventList;
