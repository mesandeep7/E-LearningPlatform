import React from 'react';
import './CountDemo.css';
import Img1 from '../images/pencil-icon.svg';
import Img2 from '../images/cources-icon.svg';
import Img3 from '../images/gratuate-icon.svg';
import Img4 from '../images/certificate-icon.svg';

import NumberCounter from './counterTask';

const CountsSection = () => {
  return (
    <section id="counts" className="counts">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              {/* <i className="bi bi-emoji-smile"></i> */}
              <div className="Emoji">
                <img src={Img1} alt="Pencil Icon" />
              </div>
              <div className="EmojiContent">
                {/* <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="0" className="purecounter">
                  10
                </span> */}
                <span><NumberCounter start={0} end={100} duration={3000} />K</span>
                <p><strong>Happy Clients</strong></p>

              </div>
              {/*<a href="#">Find out more &raquo;</a>*/}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              {/* <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="0" className="purecounter">20</span>
              <p><strong>Projects</strong></p> */}
              <div className="Emoji">
                <img src={Img2} alt="Pencil Icon"/>
              </div>
              <div className="EmojiContent">
                {/* <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="0" className="purecounter">
                  10
                </span> */}
                <span><NumberCounter start={0} end={100} duration={3000} />K</span>
                <p><strong>Happy Clients</strong></p>

              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <div className="Emoji">
                <img src={Img3} alt="Pencil Icon"/>
              </div>
              <div className="EmojiContent">
                {/* <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="0" className="purecounter">
                  10
                </span> */}
                <span><NumberCounter start={0} end={100} duration={3000} />K</span>
                <p><strong>Happy Clients</strong></p>

              </div>
              {/*<a href="#">Find out more &raquo;</a>*/}
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
            <div className="Emoji">
                <img src={Img4} alt="Pencil Icon" />
              </div>
              <div className="EmojiContent">
                {/* <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="0" className="purecounter">
                  10
                </span> */}
                <span><NumberCounter start={0} end={100} duration={3000} />K</span>
                <p><strong>Happy Clients</strong></p>

              </div>
              {/*<a href="#">Find out more &raquo;</a>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountsSection;
