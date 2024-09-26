import React, { useState, useEffect } from 'react';
import './SignUp.css';
import video from "../../Assets/WaterVideo3.mp4";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SignUp = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  // email Validation
  const validateEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    setEmailError(!email.match(emailPattern));
  };

  // handle form submit (Only email validation)
  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();

    if (!emailError) {
      console.log("Form submitted successfully with valid email!");
    }
  };

  return (
    <div className="signup-wrapper">
      {/* Background video */}
      <video src={video} autoPlay loop muted></video>

      {/* Signup container */}
      <div className="signup-container" data-aos="fade-up">
        <header>Sign Up</header>
        <form onSubmit={handleSubmit}>
          <div className={`field email-field ${emailError ? 'invalid' : ''}`}>
            <div className="input-field">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                className="email"
              />
            </div>
            {emailError && (
              <span className="error email-error">
                <i className="bx bx-error-circle error-icon"></i>
                <p className="error-text">Please enter a valid email</p>
              </span>
            )}
          </div>

          <div className="field create-password">
            <div className="input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
              />
              <i className="bx bx-hide show-hide"></i>
            </div>
          </div>

          <div className="field confirm-password">
            <div className="input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="cPassword"
              />
              <i className="bx bx-hide show-hide"></i>
            </div>
          </div>

          <div className="input-field button">
            <input type="submit" value="Submit Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
