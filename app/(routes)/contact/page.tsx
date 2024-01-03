import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="
        Welcome , where your health and well-being are our top priorities. If you have any questions, concerns, or would like to reach out to us, we're here to assist you. Feel free to contact us."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
