import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./footer.css"; // Import CSS file for the footer

// Create a functional component for BlackBanner
const BlackBanner = () => {
  return (
    <div className="black-banner">
      <div className="left">
        STAY UPTO DATE ABOUT OUR <br className="newsletter-break"/>
        LATEST OFFERS
      </div>
      <div className="right">
        <span>
          <img src="/icons/email.svg" alt="" width={30} />
          <input type="text" placeholder="Enter your email Address" />
        </span>
        <button>Subscribe to Newsletter</button>
      </div>
    </div>
  );
};

// Create a functional component for WhiteBanner
const WhiteBanner = () => {
  return (
    <div className="container">
      <div className="white-banner">
        {/* below div is created for left most section that has few social media links */}
        <div className="left">
          <p className="branding">UNLOCKDISCOUNTS</p>
          <p className="summary">
            We have clothes that suits your style and which you{"'"}re proud to
            wear. From women to men.
          </p>
          <div className="contact-icons">
          <a href=''><img src="/icons/twitter.svg" alt="" width={20} /> </a>
            <a href='https://chat.whatsapp.com/ESR3BCiCQHTIUIZKwRuLMQ' target='_blank'><img src="/icons/whatsapp.png" alt="" width={20} /></a>
            <a href='https://www.facebook.com/people/UnlockDiscounts/61560425212006/' target='_blank'><img src="/icons/facebook.svg" alt="" width={20} /></a>
            <a href='https://www.instagram.com/unlock_discounts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'><img src="/icons/instagram.svg" alt="" width={20} /></a>
          </div>
        </div>

        {/*  below div is created to display he right section that has the direct links to various pages  */}
        <div className="right">
          {/*  below div is created to display the column with pages link of ONLINE LEARNING */}
          <div className="col">
            <h2 className="sub-heading">ONLINE LEARNING</h2>
            <nav>
              <li>
                <Link className="link" to="/distancelearning">
                  Courses
                </Link>
              </li>
              <li>
                <Link className="link" to="/distancelearning">
                  Colleges
                </Link>
              </li>
              <li>
                <Link className="link" to="/blog">
                  Blogs
                </Link>
              </li>
            </nav>
          </div>

          {/*  below div is created to display the column with pages link of FASHION */}
          <div className="col">
            <h2 className="sub-heading">FASHION</h2>
            <nav>
              <li>
                <Link className="link" to="/fashion/mens-wear">
                  Men{"'"}s Wear
                </Link>
              </li>
              <li>
                <Link className="link" to="/fashion/womens-wear">
                  Women{"'"}s Wear
                </Link>
              </li>
              <li>
                <Link className="link" to="/fashion/kids-wear">
                  Kid{"'"}s Wear
                </Link>
              </li>
            </nav>
          </div>

          {/*  below div is created to display the column with pages link of ELECTRONICS */}
          <div className="col">
            <h2 className="sub-heading">ELECTRONICS</h2>
            <nav>
              <li>
                <Link className="link" to="/electronics/phones-accessories">
                  Mobile and Accessories
                </Link>
              </li>
              <li>
                <Link className="link" to="/electronics/appliances">
                  Health Care
                </Link>
              </li>
              <li>
                <Link className="link" to="/electronics/appliances">
                  Home Appliances
                </Link>
              </li>
            </nav>
          </div>

          {/*  below div is created to display the column with pages link of BANKING */}
          <div className="col">
            <h2 className="sub-heading">BANKING</h2>
            <nav>
              <li>
                <Link className="link" to="/banking">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link className="link" to="/banking">
                  Zero Saving Account
                </Link>
              </li>
              <li>
                <Link className="link" to="/banking">
                  Saving Applications
                </Link>
              </li>
            </nav>
          </div>
          <div className="col">
            <h2 className="sub-heading">OTHERS</h2>
            <nav>
              <li>
                <Link className="link" to="/certification">
                  Certificate Verification
                </Link>
              </li>
              <li>
                <Link className="link" target="_blank" to="https://www.linkedin.com/company/unlockdiscounts/jobs/">
                  Internships
                </Link>
              </li>
              <li>
                <Link className="link" target="_blank" to="https://www.linkedin.com/company/unlockdiscounts/jobs/">
                  Jobs
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
function Footer() {
  return (
    <footer className="footer">
      <BlackBanner />
      <WhiteBanner />
    </footer>
  );
}

export default Footer;
