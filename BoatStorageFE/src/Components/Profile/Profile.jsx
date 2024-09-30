import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import './Profile.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import axios from 'axios'; // import axios for API calls

const Profile = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // State for user details
  const [user, setUser] = useState({
    name: 'John Doe', // Replace with dynamic data
  });

  // Handle active tab state
  const [activeTab, setActiveTab] = useState('Payments');

  // State for payment section
  const [paymentTab, setPaymentTab] = useState('Upcoming Payments');

  // Mock API call to get user details (can be replaced with actual API)
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace with your API
        setUser(response.data); // Assuming API returns a user object
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  // Handle logout functionality
  const handleLogout = () => {
    // Clear user session (e.g., remove token, clear state)
    // Redirect to login or home page
    navigate('/login'); // Assuming you have a login route
  };

  return (
    <div className="dashboard-page">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          {/* Logout button on the left */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>

          {/* User's name on the right */}
          <div className="user-info">
            <span>Welcome, {user.name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content" data-aos="fade-up">
        {/* Tabs for main navigation */}
        <div className="tabs" data-aos="fade-up">
          <button 
            className={activeTab === 'Payments' ? 'active' : ''} 
            onClick={() => setActiveTab('Payments')}
          >
            Payments
          </button>
          <button 
            className={activeTab === 'Account Details' ? 'active' : ''} 
            onClick={() => setActiveTab('Account Details')}
          >
            Account Details
          </button>
          <button 
            className={activeTab === 'Spots Available' ? 'active' : ''} 
            onClick={() => setActiveTab('Spots Available')}
          >
            Spots Available
          </button>
          <button 
            className={activeTab === 'Shopping Cart' ? 'active' : ''} 
            onClick={() => setActiveTab('Shopping Cart')}
          >
            Shopping Cart
          </button>
        </div>

        {/* Container to display content based on active tab */}
        <div className="tab-content">
          {activeTab === 'Payments' && (
            <div className="payments-tab">
              <h3>Payments</h3>
              <div className="payment-section">
                <div className="payment-tabs">
                  <button 
                    className={paymentTab === 'Upcoming Payments' ? 'active' : ''} 
                    onClick={() => setPaymentTab('Upcoming Payments')}
                  >
                    Upcoming Payments
                  </button>
                  <button 
                    className={paymentTab === 'Make Payment' ? 'active' : ''} 
                    onClick={() => setPaymentTab('Make Payment')}
                  >
                    Make Payment
                  </button>
                  <button 
                    className={paymentTab === 'Payment History' ? 'active' : ''} 
                    onClick={() => setPaymentTab('Payment History')}
                  >
                    Payment History
                  </button>
                </div>

                {/* Display tab content based on paymentTab */}
                <div className="payment-tab-content">
                  {paymentTab === 'Upcoming Payments' && (
                    <div className="upcoming-payments-tab">
                      <h4>Upcoming Payments</h4>
                      <p>Your next payment is due on [Next Payment Date].</p>
                      {/* Calendar can be implemented here */}
                    </div>
                  )}

                  {paymentTab === 'Make Payment' && (
                    <div className="make-payment-tab">
                      <h4>Make Payment</h4>
                      <p>Select your payment method below.</p>
                      <button>Pay with Credit Card</button>
                      <button>Pay with PayPal</button>
                    </div>
                  )}

                  {paymentTab === 'Payment History' && (
                    <div className="payment-history-tab">
                      <h4>Payment History</h4>
                      <p>View your past payment transactions here.</p>
                      {/* Payment history details can be displayed here */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Account Details' && (
            <div className="account-tab">
              <h3>Account Details</h3>
              <p>Update your personal information here.</p>
              {/* Form to update account details can go here */}
            </div>
          )}

          {activeTab === 'Spots Available' && (
            <div className="spots-tab">
              <h3>Available Spots</h3>
              <p>View the available spots for booking or reservation.</p>
              {/* Display spots data dynamically */}
            </div>
          )}

          {activeTab === 'Shopping Cart' && (
            <div className="cart-tab">
              <h3>Shopping Cart</h3>
              <p>Review and checkout items in your cart.</p>
              {/* Shopping cart details and checkout functionality */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
