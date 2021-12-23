import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const contactRef = useRef(null);
  const [contactInfoRef, contactInfoInView, contactInfoEntry] = useInView({
    threshold: 0,
  });

  return (
    <div ref={contactRef} className="flex min-h-screen">
      Contact Stuff
    </div>
  );
};

export default Contact;
