import React from "react";
import EventList from "../components/event/EventList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList item={featuredEvents} />
    </div>
  );
};

export default HomePage;
<h1>The Home Page</h1>;
