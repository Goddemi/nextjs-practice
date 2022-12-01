import { useRouter } from "next/router";
import React from "react";

const ClientsProjects = () => {
  const router = useRouter();

  const navigate = () => {
    router.push(`/clients/${router.query.id}/projectA`);
  };

  return (
    <div>
      <h1>clients projects</h1>
      <span>{router.query.id}</span>
      <button onClick={navigate}>button</button>
    </div>
  );
};

export default ClientsProjects;
