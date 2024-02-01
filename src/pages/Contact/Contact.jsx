import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Rakesh Sankhla</h1>
      <p className="contact-info">
        GitHub:{" "}
        <a
          href="https://github.com/rsankhla20"
          target="_blank"
          rel="noopener noreferrer"
        >
          rsankhla20
        </a>
      </p>
      <p className="contact-info">
        Email:{" "}
        <a href="mailto:your.email@example.com">sankhlarakesh4321@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
