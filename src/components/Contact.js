import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { PopupWidget } from "react-calendly";
const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = process.env.REACT_APP_SERVICE;
  const templateID = "template_ID";
  const userID = process.env.REACT_APP_USER_ID;

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    reset.target.reset();
  };
  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully!  I will reply ASAP!");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center py-5">
        <h1>Contact Me</h1>
        <p>
          Please fill out this form and leave a detailed message. I'll get back
          to you as soon as possible.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please leave a name with fewer than 20 characters",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={register({
                    required: "Please add your phone number",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid Number",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Please add your email address",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: "You forgot to add the subject",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="description"
                  ref={register({
                    required: "Please leave a message",
                  })}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
      <PopupWidget url={process.env.REACT_APP_CALENDLY} />
    </div>
  );
};

export default Contact;
