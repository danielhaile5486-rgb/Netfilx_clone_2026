import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Icons Section - from first image */}
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer Links Section - combining all three lists from second image */}
        <div className="footer_links_grid">
          {/* First column: Audio Description, Investor Relations, Legal Notice */}
          <div className="footer_link_column">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          {/* Second column: Help Center, Jobs, Cookie Preferences */}
          <div className="footer_link_column">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          {/* Third column: Gift Cards, Terms of Use, Corporate Information */}
          <div className="footer_link_column">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>

        {/* Optional: Contact Us & Copyright (from original first image, adds completeness) */}
        <div className="footer_extra">
          <ul className="footer_extra_links">
            <li>Contact Us</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
          </ul>
          <div className="service_code_wrapper">
            <button className="service_code_btn">Service Code</button>
          </div>
          <div className="copyright">
            © 1997-2024 Netflix, Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
