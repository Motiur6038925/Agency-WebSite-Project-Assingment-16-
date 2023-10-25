import AllProject from "./../../components/AllProject";
import Contact from "./../../components/Contact";
import Navigation from "@/components/Navigation";
const Page = () => {
  return (
    <>
      <Navigation title={"Project"} />
      <AllProject />

      <Contact />
    </>
  );
};

export default Page;
