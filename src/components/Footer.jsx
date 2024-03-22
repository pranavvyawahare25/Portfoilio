import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://scontent.fixu1-1.fna.fbcdn.net/v/t39.30808-6/274307431_469783678221360_2675783256178011452_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c-DbeRk--lIAX-bxEuY&_nc_ht=scontent.fixu1-1.fna&oh=00_AfBWBbRBVcuiK76o63N6Jy1hM7n5TbCyN7qasP7c8jQ-sw&oe=660176DC"}
          alt="Founder"
        />

        <h2>Pranav</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/pranav-vyawahare-29a871203/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://leetcode.com/pranavvyawahare25/" target={"blank"}>
            <AiFillCode/>
          </a>
          <a href="https://github.com/pranavvyawahare25" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
