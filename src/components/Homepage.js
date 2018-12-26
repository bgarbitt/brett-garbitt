import React from 'react';
import headshot from '../headshot(small).jpeg';

const Homepage = () => (
  <div className="homepage">
    <img src={headshot} alt="headshot" />
    <p>
      Hi! My name is <b><i>Brett Garbitt</i></b>. I&apos;m a recent graduate of the
      {' '}
      <a href="https://www.ualberta.ca/" target="_blank" rel="noopener noreferrer">
      University of Alberta
      </a>
      {' '}
      and am an aspiring web developer. I graduated with a
      {' '}
      <i>
        <a
          href="https://www.ualberta.ca/computing-science/undergraduate-studies/programs-and-admissions/specialization"
          target="_blank"
          rel="noopener noreferrer"
        >
          specialization
        </a>
      </i>
      {' '}
      degree in Computing Science for software development. I believe this
      education provides me a good foundation to learn almost anything relating
      to computing science (Though current focus is web development).
    </p>
  </div>
);

export default Homepage;
