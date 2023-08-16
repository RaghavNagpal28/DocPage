import React from 'react';
import './Main.css';
import Hero from "./Herotext.png";
import loc from "./loc.PNG";
import name from "./name.PNG";
import Pnum from "./Pnum.PNG";
import Oline from "./Offer line.png";
import acc from "./Accreditation.png";
import We from "./We keep expanding.png";
import why from "./Why choose us.png";
import gro from "./Group 8.png";

function Main() {
  return (
    <div className="main-content">
      <div className="hero-section">
        <div className="form-section">
          <h2>Fill in the details to get a call!</h2>
          <form>
            <label className="location-label">
              <img src={name} className="logo_loc" alt="Logo Location" />
              <input type="text" placeholder="Fullname" className="form-input" />
            </label>
            <label className="location-label">
              <img src={Pnum} className="logo_loc" alt="Logo Location" />
              <input type="text" placeholder="Phone Number" className="form-input" />
            </label>
            <label className="location-label">
              <img src={loc} className="logo_loc" alt="Logo Location" />
              <input type="text" placeholder="Location" className="form-input" />
            </label>
            <div className="form-agreement">
              <input type="checkbox" id="agreeCheckbox" className="checkbox-input" />
              <label htmlFor="agreeCheckbox">
                By continuing, you agree to our T&C and privacy policy
              </label>
            </div>
            <button type="submit" className="form-button">Proceed</button>
          </form>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="Hero" className="hero-image" />
        </div>
      </div>
      <div className="offer-line-container">
        <img src={Oline} alt="Offer Line" className="offer-line-image" />
      </div>
      <div className="accreditation-container">
        <img src={acc} alt="Accreditation" className="accreditation-image" />
      </div>
      <div className="we-expanding-container">
        <img src={We} alt="We Keep Expanding" className="we-expanding-image" />
      </div>
      <div className="gro-container">
        <img src={gro} alt="Group 8" className="gro-image" />
      </div>
      <div className="why-choose-us-container">
        <img src={why} alt="Why Choose Us" className="why-choose-us-image" />
      </div>
    </div>
  );
}

export default Main;
