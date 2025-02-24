import React, { useState } from 'react';
import Banner from '../../comon/Banner/Banner';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { Facebook, Instagram, Twitter, Mail, Phone, MessageCircle } from 'lucide-react';
import proflie from '../../assets/hornet1.jpg';
import cover from '../../assets/hornet2.jpg';

function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
    },
    contentArea: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative',
    },
    mainContent: {
      backgroundColor: '#000', // Black background
      color: '#fff', // White text for all nested elements
      minHeight: '100vh',
      padding: '20px',
    },
    coverPhoto: {
      position: 'relative',
      height: '250px',
      overflow: 'hidden',
    },
    profilePicContainer: {
      position: 'absolute',
      top: '-80px',
      left: '20px',
    },
    profilePic: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      border: '4px solid white',
      overflow: 'hidden',
    },
    profileInfo: {
      paddingTop: '100px',
      paddingBottom: '10px',
    },
    profileName: {
      fontSize: '28px',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: '24px',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
      fontSize: '24px',
    },
    socialIconLink: {
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div style={styles.contentArea}>
        {/* Site Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Cover Photo */}
          <div style={styles.coverPhoto}>
            <img
              src={cover}
              alt="Cover"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Profile Section */}
          <div style={{ padding: '0 20px', position: 'relative' }}>
            {/* Profile Picture */}
            <div style={styles.profilePicContainer}>
              <div style={styles.profilePic}>
                <img
                  src={proflie}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Profile Info */}
            <div style={styles.profileInfo}  width={'auto'} height={'auto'}>
              <h1 style={styles.profileName}>
                Harsha Lakmal (Senior Software Engineer)
              </h1>
            </div>
          </div>

<br />
          {/* About Me */}
          <div style={{ padding: '10px' }}  width={'auto'} height={'auto'} >
            <h1 style={styles.sectionTitle}>- About Me -</h1>
            <p>I am Harsha Lakmal ...</p>
          </div>

          <br />

          {/* Education */}
          <div style={{ padding: '10px' }}  width={'auto'} height={'auto'}>
            <h1 style={styles.sectionTitle}>Education:</h1>
            <p>School Name Here</p>
          </div>
          <br />

          {/* Location */}
          <div style={{ padding: '10px' }}  width={'auto'} height={'auto'}>
            <h1 style={styles.sectionTitle}>Location:</h1>
            <p>Location Name Here</p>
          </div>
          <br />


          {/* Birthday */}
          <div style={{ padding: '10px' }}  width={'auto'} height={'auto'} >
            <h1 style={styles.sectionTitle}>Birthday:</h1>
            <p>January 1, 2000</p>
          </div>
          <br />

          {/* Email */}
          <div style={{ padding: '10px' }}  width={'auto'} height={'auto'}>
            <h1 style={styles.sectionTitle}>Email:</h1>
            <p>example@example.com</p>
          </div>

          <br />
          <br />

          {/* Social Media Contacts */}
          <div style={{ padding: '10px' }}  width={'auto'} height={'auto'}>
            <h1 style={styles.sectionTitle}>Follow Me on Social Media:</h1>
            <br />
            <div style={styles.socialIcons}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIconLink}
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIconLink}
              >
                <Instagram />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIconLink}
              >
                <Twitter />
              </a>
             
            </div>
          </div>
        </div>

        {/* Banner Component */}
        <Banner />
      </div>
    </div>
  );
}

export default AboutPage;
