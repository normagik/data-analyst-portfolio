import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <section id="contact" className="pt-10 min-h-screen">
        <div className=" px-10 md:px-20 lg:px-40 ">
          <h3 className="font-Montserrat font-medium text-3xl text-[#464DAF]  py-1">
            Contact
          </h3>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
