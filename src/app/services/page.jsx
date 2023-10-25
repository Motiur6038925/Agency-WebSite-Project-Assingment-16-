import React from "react";
import Services from "@/components/Services";
import Contacts from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Page = () => {
  return (
    <>
      <Navigation title={"Servies"} />
      <Services />
      <Contacts />
    </>
  );
};

export default Page;
