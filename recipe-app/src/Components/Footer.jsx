import React from "react";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "../Components/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="div1">
        <h3>About SocialChef Community</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
        </p>
      </div>

      <div className="div2">
        <h4>Need Help?</h4>

        <p>Contact us via phone or email</p>

        <ul>
          <li>
            <b style={{ color: "orange" }}>T:</b>1-5555-5555-0000
          </li>
          <li>
            <b style={{ color: "orange" }}>E: </b>info@socialcheff.com
          </li>
        </ul>
      </div>

      <div className="icons">
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaInstagramSquare />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>

      <p style={{ color: "grey", marginBottom: "40px", marginLeft: '2rem' }}>
        © socialchef.com 2023. All rights reserved.
      </p>
    </div>
  );
}
