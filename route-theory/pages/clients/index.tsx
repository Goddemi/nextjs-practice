import Link from "next/link";
import React from "react";

const Clients = () => {
  const clientsInfo = [
    { id: "max", name: "maxmillian" },
    {
      id: "oki",
      name: "okithanks",
    },
  ];
  return (
    <div>
      <h1>this Clients</h1>
      <ul>
        hi
        {clientsInfo.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`/clients/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Clients;
