import React, { useEffect, useState } from "react";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";
import FullSizedGrid from "../components/FullSizedGrid";
import SmallGrid from "../components/SmallGrid";
import { pricingPageImgs } from "../data";

function Pricing() {
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
    if (window.innerWidth > 400) {
      setIsMobile(false);
    } else {
      return;
    }
  });
  const [isMobile, setIsMobile] = useState(false);

  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  function handleToggle() {
    if (paymentFrequency === "monthly") {
      setPaymentFrequency("yearly");
    } else {
      setPaymentFrequency("monthly");
    }
  }
  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
    if (window.innerWidth > 400) {
      setIsMobile(false);
    }
  }, []);
  return (
    <main>
      <section className="home-section home-section--hero mobile-flip fp-section">
        <div className="home-section-text short-text-mobile">
          <div className="text-wrapper">
            <h1 className="h1--white">Pricing</h1>
            <p>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
        <div className="section-img-wrapper--home-hero">
          <picture>
            <source
              media="(min-width: 800px )"
              srcSet={pricingPageImgs.pricingHero}
            />
            <source
              media="(min-width: 402px )"
              srcSet={pricingPageImgs.tabletPricingHero}
            />
            <img
              className="section-img fp-img"
              src={pricingPageImgs.mobilePricingHero}
              alt="Features hero"
            />
          </picture>
        </div>
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
              <div className="plan-details-wrapper">
                <h2>Basic</h2>
                <p>
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
              </div>
              <div className="price-details-wrapper">
                <h1>
                  {paymentFrequency === "monthly" ? "$19.00" : "$190.00 "}
                </h1>
                <p>
                  {paymentFrequency === "monthly" ? "per month" : "per year"}
                </p>
              </div>
              <button className="btn btn--black ">Pick Plan </button>
            </article>
            <article className="plan-card major-card">
              <div className="plan-details-wrapper">
                <h2 className="h1--white">Pro</h2>
                <p>
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="price-details-wrapper">
                <h1 className="h1--white">
                  {paymentFrequency === "monthly" ? "$39.00" : "$390.00"}
                </h1>
                <p>
                  {paymentFrequency === "monthly" ? "per month" : "per year"}
                </p>
              </div>
              <button className="btn btn--white ">Pick Plan </button>
            </article>
            <article className="plan-card minor-card">
              <div className="plan-details-wrapper">
                <h2>Business</h2>
                <p>
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="price-details-wrapper">
                <h1>{paymentFrequency === "monthly" ? "$99.00" : "$990.00"}</h1>
                <p>
                  {paymentFrequency === "monthly" ? "per month" : "per year"}
                </p>
              </div>
              <button className="btn btn--black">Pick Plan </button>
            </article>
          </div>
        </div>
      </section>
      <section className="compare">
        <h1>Compare</h1>
        {(isMobile && <SmallGrid />) || <FullSizedGrid />}
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
