import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bootcamps with Digital Innovation One (DIO)
                </h3>
                <span className="qualification__subtitle">Brazil</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Jan 2019 - Present
                </div>
              </div>

              <div>
                <sapn className="qualification__rounder"></sapn>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Associate's Degree in Analysis and Systems Development
                </h3>
                <span className="qualification__subtitle">
                  Brazil - Estácio
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Aug 2021 - Dec 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Developer | Java - Angular - PHP - React | Full Stack
                </h3>
                <span className="qualification__subtitle">
                  Freelancer - Brazil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2019 - Present
                </div>
              </div>

              <div>
                <sapn className="qualification__rounder"></sapn>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {" "}
                  Intership Developer | Java - Angular - Cobol - Mainframe |
                  Full Stack
                </h3>
                <span className="qualification__subtitle">IBM - Brazil</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> May 2022 - Aug 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Developer | Java - Angular - Cobol - React | Full
                  Stack
                </h3>
                <span className="qualification__subtitle">IBM - Brazil</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Sep 2022 - Aug 2023
                </div>
              </div>

              <div>
                <sapn className="qualification__rounder"></sapn>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  {" "}
                  Intership Developer | Kotlin | Backend
                </h3>
                <span className="qualification__subtitle">
                  Stone Co. - Brazil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Feb 2024 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
