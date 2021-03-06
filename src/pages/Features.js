import React from "react";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";

import { featuresPageImages, featuresPageIcons } from "../data";

function Features() {
  return (
    <main>
      <section className="home-section home-section--hero mobile-flip fp-section">
        <div className="home-section-text short-text-mobile">
          <div className="text-wrapper">
            <h1 className="h1--white">Features</h1>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <div className="section-img-wrapper--home-hero">
          <picture>
            <source
              media="(min-width: 800px )"
              srcSet={featuresPageImages.featuresHero}
            />
            <source
              media="(min-width: 402px )"
              srcSet={featuresPageImages.tabletFeaturesHero}
            />
            <img
              className="section-img fp-img"
              src={featuresPageImages.mobileFeaturesHero}
              alt="Features hero"
            />
          </picture>
        </div>
      </section>
      <section className="features-info-section">
        <div className="info-wrapper features-info-wrapper">
          {/* Card One */}
          <article className="info-card">
            <img src={featuresPageIcons.ResponsiveIcon} alt="100% Responsive" />

            <h3>100% Responsive</h3>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </article>
          {/* Card Two */}
          <article className="info-card">
            <img src={featuresPageIcons.PhotoLimitIcon} alt="No limit" />
            <h3>No Photo Upload Limit</h3>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </article>
          {/* Card Three */}
          <article className="info-card">
            <img src={featuresPageIcons.EmbedIcon} alt="Available to Embed" />
            <h3>Available to Embed</h3>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </article>
          {/* Card Four */}
          <article className="info-card">
            <img
              src={featuresPageIcons.CustomDomianIcon}
              alt="100% Responsive"
            />
            <h3>Custom Domain</h3>
            <p>
              With Photosnap subscriptions you can host your stories on your own
              domain. You can also remove our branding!
            </p>
          </article>
          {/* Card Five */}
          <article className="info-card">
            <img
              src={featuresPageIcons.BoostExposureIcon}
              alt="100% Responsive"
            />
            <h3>Boost Your Exposure</h3>
            <p>
              Users that viewed your story or gallery can easily get notifed of
              new and featured stories with our built in mailing list.
            </p>
          </article>
          {/* Card Six */}
          <article className="info-card">
            <img
              src={featuresPageIcons.DrapAndDropIcon}
              alt="100% Responsive"
            />
            <h3>Drag & Drop Image</h3>
            <p>
              Easily drag and drop your image and get beautiful shots everytime.
              No over the top tooling to add friction to creating stories.
            </p>
          </article>
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

export default Features;
