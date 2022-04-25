import React from "react";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";
import PricingHero from "../assets/pricing/desktop/hero.jpg";

function Pricing() {
  return (
    <main>
      <section className="home-section home-section--hero">
        <div className="home-section-text">
          <div className="text-wrapper">
            <h1>Pricing</h1>
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
            <label htmlFor="check">Monthly</label>
            <input type="checkbox" id="check" className="toggle" />
            <label className="toggle-label" htmlFor="check">
              Yearly
            </label>
          </div>
          <div className="plans-cards">
            <article className="plan-card minor-card">
              <h2>Basic</h2>
              <p>
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              {/* $190.00 per year */}
              <h1>$19.00</h1>
              <p> per month</p>
              <button className="btn btn--black ">Pick Plan </button>
            </article>
            <article className="plan-card major-card">
              <h2>Pro</h2>
              <p>
                More advanced features available. Recommended for photography
                veterans and professionals.
              </p>
              {/* $390.00per year */}
              <h1>$39.00 </h1>
              <p> per month</p>
              <button className="btn btn--white ">Pick Plan </button>
            </article>
          </div>
        </div>
      </section>
      <section className="beta-section">
        <div className="beta-section-text-wrapper">
          <h1>We're in Beta. Get your invite today!</h1>
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

// Business
// Additional features available such as more detailed metrics. Recommended for business owners.
// $99.00 per month
// $990.00 per year
// Pick Plan

// Compare

// The Features

// Basic
// Pro
// Business

// Unlimited Story Posting
// Unlimited Photo Upload
// Embedding Custom Content
// Customize Metadata
// Advanced Metrics
// Photo Downloads
// Search Engine Indexing
// Custom Analytics

// We're in Beta. Get your invite today!

// Get an invite

// Home
// Stories
// Features
// Pricing

// Get an invite

// Copyright 2019. All Rights Reserved
