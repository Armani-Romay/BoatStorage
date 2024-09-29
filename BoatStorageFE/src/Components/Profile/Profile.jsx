import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './Profile.css'; 

//video and animation imports
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 

import axios from 'axios'; // import axios for API calls

const Profile = () => {

 // Assuming user's name is stored in state, you can also retrieve it from a global state or backend
 const [user, setUser] = useState({
    name: 'John Doe', // Replace with dynamic data if available
  });

  // Handle active tab state
  const [activeTab, setActiveTab] = useState('Profile');

  // Mock API call to get user details (can be replaced with actual API)
  useEffect(() => {
    // You can fetch user details here if needed
  }, []);

  return (
    <div className="profile-page">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          <h2>Profile</h2>
          <div className="user-info">
            {/* Display the user's name on the top right */}
            <span>{user.name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="profile-content">
        <div className="tabs">
          {/* Tabs: Profile and Paying */}
          <button 
            className={activeTab === 'Profile' ? 'active' : ''} 
            onClick={() => setActiveTab('Profile')}
          >
            Profile
          </button>
          <button 
            className={activeTab === 'Paying' ? 'active' : ''} 
            onClick={() => setActiveTab('Paying')}
          >
            Paying
          </button>
        </div>

        {/* Display tab content based on activeTab */}
        <div className="tab-content">
          {activeTab === 'Profile' && (
            <div className="profile-tab">
              <h3>Welcome, {user.name}!</h3>
              <p>This is your profile page.</p>
              {/* You can add more details about the user here */}
            </div>
          )}

          {activeTab === 'Paying' && (
            <div className="paying-tab">
              <h3>Pay for your Subscription</h3>
              <p>Select your payment method below.</p>
              {/* Example payment options or form */}
              <button>Pay with Credit Card</button>
              <button>Pay with PayPal</button>
              {/* Add your payment processing logic here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Profile;
