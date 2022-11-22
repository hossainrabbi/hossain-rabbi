import { Button, Textarea, TextInput } from 'flowbite-react';
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
        <TextInput
          id="name"
          type="text"
          placeholder="Enter Your Name"
          required={true}
        />
        <TextInput
          id="email"
          type="email"
          className="my-3"
          placeholder="Enter Your Email"
          required={true}
        />
        <Textarea
          id="message"
          placeholder="Your Message"
          required={true}
          rows={4}
        />
        <Button
          type="submit"
          className="!bg-secondary-light block w-full px-2 mt-3"
        >
          Send
        </Button>
      </form>
    </section>
  );
};

export default Contact;
