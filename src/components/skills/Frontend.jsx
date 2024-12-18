import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">HTML</h3>
                    <br></br>
                    {/**<span className="skills__level">Advanced</span> */}
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">CSS</h3>
                    <br></br>
                    {/**<span className="skills__level">Advanced</span> */}
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Javascript</h3>
                    <br></br>
                    {/**<span className="skills__level">Advanced</span> */}
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Angular</h3>
                    <br></br>
                    {/**<span className="skills__level">Intermediate</span> */}
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">React.JS</h3>
                    <br></br>
                    {/**<span className="skills__level">Intermediate</span> */}
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">WordPress</h3>
                    <br></br>
                    {/**<span className="skills__level">Intermediate</span> */}
                </div>
                </div>
            </div>



      </div>
    </div>
  );
};

export default Frontend;
