import React from "react";
import Team from "@/components/Team";
import Contacts from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Page = () => {
  return (
    <>
      <Navigation title={"Team"} />
      <Team />
      <Contacts />
    </>
  );
};

export default Page;
