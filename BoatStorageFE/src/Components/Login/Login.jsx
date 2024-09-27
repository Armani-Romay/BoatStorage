import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 

//video and animation imports
import video from "../../Assets/WaterVideo3.mp4"; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 

import axios from 'axios'; // import axios for API calls


const Login = () => {

    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
  
    // useState hook to manage success and error messages, loading state, and form data
  const [successMessage, setSuccessMessage] = useState(null); // Manages the success message
  const [error, setError] = useState(null); // Manages the error message
  const [isLoading, setIsLoading] = useState(false); // Manages the loading state
  const navigate = useNavigate(); // Hook for programmatic navigation

  // useState hook to manage form input data
  const [formData, setFormData] = useState({
    email: "", // Holds the email input
    password: "", // Holds the password input
  });

  // function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // get name and value of the changed input field
    setFormData({
      ...formData, // spread previous formData state
      [name]: value, // update the specific form field (email or password)
    });
  };

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents the default form submission (which reloads the page)
    if (isLoading) { // if already submitting, return early to prevent double submission
      return;
    }

    setIsLoading(true); // set loading state to true while processing submission
    setError(""); // vlear any previous error message
    setSuccessMessage(""); // Clear any previous success message

    try {
      // sending a POST request to the backend API with formData (email and password)
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData, {
        headers: {
          "Content-Type": 'application/json', // Set headers to specify JSON content
        },
      });

      // if response has tokens, the user is successfully authenticated
      if (response.data && response.data.tokens) {
        const tokens = response.data.tokens; // extract the tokens from the response
        setSuccessMessage("Successfully Signed In!"); // set success message
        localStorage.setItem('userToken', JSON.stringify(tokens)); // store tokens in localStorage for web
        // navigate("/profile"); // navigate to the profile page after successful login
      }
    } catch (error) {
      // If there is an error, handle it by checking the response data
      if (error.response && error.response.data) {
        // Loop over the error fields and set the first error message
        Object.keys(error.response.data).forEach(field => {
          const errorMessages = error.response.data[field];
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]); // Set error message to display
          }
        });
      }
    } finally {
      setIsLoading(false); // Turn off loading state after submission is complete
    }
  };

  return (
    <div className="login-wrapper">
      <video src={video} autoPlay loop muted></video>
      <div className="login-container" data-aos="fade-up">
        <header>Login</header>
        <div className="signUpLink" data-aos="fade-up">
            <h3>Don't have an account?</h3>
            <Link to="/signup">
                <h4>Create an Account</h4>
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
              name="password" 
              placeholder="Create password"
              value={formData.password1} 
              onChange={handleChange}
            />
          </div>


          {/* Login button */}
          <div className="input-field button">
            <button type="submit" disabled={isLoading}>
              {/* Button is disabled while the form is being submitted */}
              {isLoading ? 'Signing you in...' : 'Login'} 
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
  export default Login;
  

