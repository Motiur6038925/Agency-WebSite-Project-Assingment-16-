import Testimonial from "@/components/Testimonial";
import Contact from "./../../components/Contact";
import Navigation from "@/components/Navigation";

const Page = () => {
  return (
    <>
      <Navigation title={"Testimonial"} />

      <Testimonial />

      <Contact />
    </>
  );
};

export default Page;
