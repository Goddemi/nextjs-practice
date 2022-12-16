import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://nextjs-335e4-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const events = [];

  for (key in data) {
    events.push({
      id: data.id,
      ...data[key],
    });
  }

  const featuredEvents = events.filter((ele) => ele.isFeatured);

  return featuredEvents;
};

export default AllEventsPage;
