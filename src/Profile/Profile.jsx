import React from 'react';
import './stlye.css'
import imgpf  from '../assets/joblk.png'
const UserProfileForm = () => {
  return (
    <div className="container">
      <div className="form-section">
        <div className="form-header">
          <h2>General Information</h2>
          <button className="btn new-btn">+ New</button>
        </div>
        <form className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Also your last name" />
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input type="date" placeholder="mm/dd/yyyy" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="name@company.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="+12-345-678-910" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Enter your home address" />
          </div>
          <div className="form-group">
            <label>Number</label>
            <input type="text" placeholder="No." />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="form-group">
            <label>State</label>
            <select>
              <option value="">State</option>
            </select>
          </div>
          <div className="form-group">
            <label>ZIP</label>
            <input type="text" placeholder="ZIP" />
          </div>
          <button className="btn save-btn">Save All</button>
        </form>
      </div>

      <div className="profile-card">
        <div className="profile-image">
          <img src={imgpf} alt="Profile" />
        </div>
        <br />
        <br />

        <h3>Neil Sims</h3>
        <br />
        <br />

        <p>Senior Software Engineer</p>
        <br />
        <br />

        <p>New York, USA</p>
       
       
      </div>
    </div>
  );
};

export default UserProfileForm;
