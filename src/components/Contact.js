import Title from './Title';

const Contact = () => {
  return (
    <section className="wrapper py-10" id="contact">
      <Title
        title="Get In Touch"
        description="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to:"
        email
      />

      <form className="w-full mx-auto max-w-3xl shadow-[inset_0_0_10px_#000] p-8 rounded-md mt-5">
        <input
          className="text-input"
          type="text"
          placeholder="Enter Your Name"
          required
        />
        <input
          className="text-input  my-3"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <textarea
          className="text-input"
          placeholder="Your Message"
          required
          rows={4}
        />
        <button type="submit" className="btn-primary w-full mt-3">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
