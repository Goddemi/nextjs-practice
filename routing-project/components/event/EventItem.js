import Link from "next/link";
import React from "react";

const EventItem = (props) => {
  const { id, title, image, date, location } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <div>{humanReadableDate}</div>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <Link href={exploreLink}>EXplore Events</Link>
      </div>
    </li>
  );
};

export default EventItem;
