import React, { useState } from "react";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";
import PricingHero from "../assets/pricing/desktop/hero.jpg";
import IconCheckMark from "../assets/pricing/desktop/check.svg";

function Pricing() {
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  function handleToggle() {
    if (paymentFrequency === "monthly") {
      setPaymentFrequency("yearly");
    } else {
      setPaymentFrequency("monthly");
    }
  }
  return (
    <main>
      <section className="home-section home-section--hero">
        <div className="home-section-text">
          <div className="text-wrapper">
            <h1 className="h1--white">Pricing</h1>
            <p>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
            <button className="btn-arrow btn-arrow--white">
              get an invite
              <img
                className="btn-arrow-icon"
                src={ArrowRightWhite}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
        <img src={PricingHero} alt="create-and-share" />
      </section>
      <section className="plans">
        <div className="plans-wrapper">
          <div className="toggle-container">
            <label
              className={`${
                paymentFrequency === "monthly" ? "label--active" : ""
              }`}
              htmlFor="check"
            >
              Monthly
            </label>

            <input
              onChange={handleToggle}
              type="checkbox"
              id="check"
              className="toggle"
            />

            <label className="toggle-label" htmlFor="check"></label>
            <label
              className={`toggle-label ${
                paymentFrequency === "yearly" ? "label--active" : ""
              }`}
              htmlFor="check"
            >
              Yearly
            </label>
          </div>
          <div className="cards-wrapper">
            <article className="plan-card minor-card">
              <h2>Basic</h2>
              <p>
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              <h1>{paymentFrequency === "monthly" ? "$19.00" : "$190.00 "}</h1>
              <p>{paymentFrequency === "monthly" ? "per month" : "per year"}</p>
              <button className="btn btn--black ">Pick Plan </button>
            </article>
            <article className="plan-card major-card">
              <h2 className="h1--white">Pro</h2>
              <p>
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
              <h1 className="h1--white">
                {paymentFrequency === "monthly" ? "$39.00" : "$390.00"}
              </h1>
              <p>{paymentFrequency === "monthly" ? "per month" : "per year"}</p>
              <button className="btn btn--white ">Pick Plan </button>
            </article>
            <article className="plan-card minor-card">
              <h2>Business</h2>
              <p>
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>

              <h1>{paymentFrequency === "monthly" ? "$99.00" : "$990.00"}</h1>
              <p>{paymentFrequency === "monthly" ? "per month" : "per year"}</p>
              <button className="btn btn--black">Pick Plan </button>
            </article>
          </div>
        </div>
      </section>
      <section className="compare">
        <h1>Compare</h1>
        <div className="compare-grid">
          <h4 className="compare-grid-title col-1">The Features</h4>
          <h4 className="compare-grid-title">Basic</h4>
          <h4 className="compare-grid-title">Pro</h4>
          <h4 className="compare-grid-title">Business</h4>
          <div className="header-divider"></div>
          <h4 className="compare-grid-subtitle col-1">
            Unlimited Story Posting
          </h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="basic" />
          <img src={IconCheckMark} alt="Check" className="pro" />
          <img src={IconCheckMark} alt="Check" className="business" />

          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">
            Unlimited Photo Upload
          </h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="basic" />
          <img src={IconCheckMark} alt="Check" className="pro" />
          <img src={IconCheckMark} alt="Check" className="business" />

          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">
            Embedding Custom Content
          </h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="pro" />
          <img src={IconCheckMark} alt="Check" className="business" />

          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">Customize Metadata</h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="pro" />
          <img src={IconCheckMark} alt="Check" className="business" />

          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">Advanced Metrics</h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="business" />

          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">Photo Downloads</h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="business" />

          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">
            Search Engine Indexing
          </h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="business" />
          <div className="divider"></div>
          <h4 className="compare-grid-subtitle col-1">Custom Analytics</h4>
          {/* CHECKMARKS */}
          <img src={IconCheckMark} alt="Check" className="business" />
          <div className="divider"></div>
        </div>
      </section>
      <section className="beta-section">
        <div className="beta-section-text-wrapper">
          <h1 className="h1--white">We're in Beta. Get your invite today!</h1>
          <button className="btn-arrow btn-arrow--white">
            get an invite
            <img
              className="btn-arrow-icon"
              src={ArrowRightWhite}
              alt="Arrow Right"
            />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Pricing;

// Compare

//

//
//
//

// We're in Beta. Get your invite today!

// Get an invite

// Home
// Stories
// Features
// Pricing

// Get an invite

// Copyright 2019. All Rights Reserved
