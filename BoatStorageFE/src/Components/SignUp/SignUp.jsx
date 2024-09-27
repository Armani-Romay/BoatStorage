import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './SignUp.css'; 

//video and animation imports
import video from "../../Assets/WaterVideo3.mp4"; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 

import axios from 'axios'; // import axios for API calls

const SignUp = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // state for success and error messages, and loading status during form submission
  const [successMessage, setSuccessMessage] = useState(null); 
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 

  // state for form data: username, email, password1, and password2 (default as empty strings)
  const [formData, setFormData] = useState({
    username: '', 
    email: '', 
    password1: '', 
    password2: '', 
  });

  // function to handle form field changes, dynamically updating the formData state
  const handleChange = (e) => {
    // extract the name and value from the input field
    const { name, value } = e.target; 
    setFormData({
      ...formData, // keep the existing form data
      [name]: value, // update the specific field that changed 
    });
  };

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior (page reload)
    if (isLoading) return; 

    setIsLoading(true); // set loading state to true to indicate submission is in progress
    setError(''); 
    setSuccessMessage(''); 

    try {
      // send form data to the server for registration
      await axios.post("http://127.0.0.1:8000/api/register/", formData, {
        //specify the conent as JSON
        headers: {
          "Content-Type": 'application/json'

        }
      });
      setSuccessMessage("Successfully Created an Account!"); 
    } catch (error) {
      // if an error occurs, check if the server returned any error messages
      if (error.response && error.response.data) {
        Object.keys(error.response.data).forEach(field => {
          const errorMessages = error.response.data[field]; // extract error messages for each field
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]); // set the first error message for the respective field
          }
        });
      }
    } finally {
      setIsLoading(false); // reset loading state to false after the request is done
    }
  };

  return (
    <div className="signup-wrapper"> 
      <video src={video} autoPlay loop muted></video>
      <div className="signup-container" data-aos="fade-up">
        <header>Sign Up</header>
        <div className="loginLink" data-aos="fade-up">
            <h3>Already have an account?</h3>
                <Link to="/login">
                    <h4>Login</h4>
                </Link>
            
        </div>
        <form onSubmit={handleSubmit}>   {/* Form element with onSubmit handler */}

          {/* Username input field */}
          <div className="input-field">
            <input
              type="text" 
              name="username" 
              placeholder="Enter your username" 
              value={formData.username}
              onChange={handleChange} // call handleChange function on input change
            />
          </div>

          {/* Email input field */}
          <div className="input-field">
            <input
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>

          {/* Password input field */}
          <div className="input-field">
            <input
              type="password" 
              name="password1" 
              placeholder="Create password"
              value={formData.password1} 
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password input field */}
          <div className="input-field">
            <input
              type="password" 
              name="password2" 
              placeholder="Confirm password" 
              value={formData.password2} 
              onChange={handleChange} 
            />
          </div>

          {/* Submit button */}
          <div className="input-field button">
            <button type="submit" disabled={isLoading}>
              {/* Button is disabled while the form is being submitted */}
              {isLoading ? 'Submitting...' : 'Submit Now'} 
              {/* Button text changes based on loading state */}
            </button>
          </div>

          {/* Success message displayed after successful registration */}
          {successMessage && <div className="success-message">{successMessage}</div>}
          
          {/* Error message displayed if an error occurs */}
          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
