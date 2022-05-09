import React from "react";

import Footer from "../components/Footer";
// Assets
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";
import ArrowRight from "../assets/shared/desktop/arrow.svg";
// Homepage Images
import { homeStoryImages, homePageImages, featuresPageIcons } from "../data";
// Card Icons
// import ResponsiveIcon from "../assets/features/desktop/responsive.svg";
// import PhotoLimitIcon from "../assets/features/desktop/no-limit.svg";
// import EmbedIcon from "../assets/features/desktop/embed.svg";

function Home() {
  return (
    <main>
      <section className="home-section home-section--hero mobile-flip">
        <div className="home-section-text homepage-text">
          <div className="text-wrapper">
            <h1 className="h1--white">Create and share your photo Stories.</h1>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
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
        {/* Main Section Img */}
        <div className="section-img-wrapper--home-hero">
          <picture>
            <source
              media="(min-width: 800px )"
              srcSet={homePageImages.createAndShare}
            />
            <source
              media="(min-width: 402px )"
              srcSet={homePageImages.tabletCreateAndShare}
            />
            <img
              className="section-img"
              src={homePageImages.mobileCreateAndShare}
              alt="create-and-share"
            />
          </picture>
        </div>
      </section>
      {/* Beautiful Stories Section*/}
      <section className="home-section homepage-section">
        <div className="section-img-wrapper--home-hero">
          <picture>
            <source
              media="(min-width: 800px )"
              srcSet={homePageImages.beautifulStories}
            />
            <source
              media="(min-width: 402px )"
              srcSet={homePageImages.tabletBeautifulStories}
            />
            <img
              className="section-img beautiful-stories"
              src={homePageImages.mobileBeautifulStories}
              alt="create-and-share"
            />
          </picture>
        </div>

        <div className="home-section-text homepage-text">
          <div className="text-wrapper">
            <h1>Beautiful stories every time</h1>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <button className="btn-arrow ">
              View the stories
              <img
                className="btn-arrow-icon"
                src={ArrowRight}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
      </section>
      {/* Designed for Everyone*/}
      <section className="home-section mobile-flip homepage-section">
        <div className="home-section-text homepage-text">
          <div className="text-wrapper">
            <h1>Designed for everyone</h1>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <button className="btn-arrow ">
              View the stories
              <img
                className="btn-arrow-icon"
                src={ArrowRight}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
        {/* Section Img */}
        <div className="section-img-wrapper--home-hero">
          <picture>
            <source
              media="(min-width: 800px )"
              srcSet={homePageImages.designedForEveryone}
            />
            <source
              media="(min-width: 402px )"
              srcSet={homePageImages.tabletDesignedForEveryone}
            />
            <img
              className="section-img"
              src={homePageImages.mobileDesignedForEveryone}
              alt="designed-for-everyone"
            />
          </picture>
        </div>
      </section>
      <div className="stories-wrapper">
        {homeStoryImages.map((image, idx) => {
          console.log(image);
          const { srcMobile, src, title, artist } = image;
          return (
            <figure key={idx} className="story-wrapper">
              <picture>
                <source media="(min-width: 800px )" srcSet={src} />
                <source media="(min-width: 402px )" srcSet={src} />
                <img className="story-img" src={srcMobile} alt={title} />
              </picture>
              <figcaption className="story-text">
                <h3>{title}</h3>
                <h5>{artist}</h5>
                <div className="story-divider"></div>
                <a className="btn-arrow btn-arrow--white" href="#">
                  read story
                  <img
                    className="btn-arrow-icon"
                    src={ArrowRightWhite}
                    alt="Arrow Right"
                  />
                </a>
              </figcaption>
              <div className="accent-bottom"></div>
            </figure>
          );
        })}
      </div>
      <section className="info-section">
        <div className="info-wrapper">
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
        </div>
      </section>
    </main>
  );
}
export default Home;

// Sunset Cityscapes
//
// Read Story

// 18 Days Voyage
// by Alexei Borodin
// Read Story

// Architecturals
// by Samantha Brooke
// Read Story
