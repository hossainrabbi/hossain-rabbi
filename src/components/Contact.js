import { useForm } from "@formspree/react";
import swal from "sweetalert";
import Title from "./Title";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdojvnoy");
  if (state.succeeded) {
    swal(
      "Thanks for sending the message!",
      "I will reply as soon as possible!",
      "success"
    );
  } else if (state?.errors?.length) {
    swal("Message Sending Fail!", state?.errors[0]?.message, "error");
  }

  return (
    <section className="wrapper pt-10 shadow" id="contact">
      <Title
        title="Get In Touch"
        description="Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to:"
        email
      />

      <form
        className="w-full mx-auto max-w-3xl shadow-[inset_0_0_10px_#000] p-8 rounded-md mt-5"
        onSubmit={handleSubmit}
      >
        <input
          className="text-input"
          type="text"
          name="username"
          placeholder="Enter Your Name"
          required
        />
        <input
          className="text-input  my-3"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <textarea
          className="text-input"
          name="message"
          placeholder="Your Message"
          required
          rows={4}
        />
        <button
          type="submit"
          className="btn-primary w-full mt-3"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
