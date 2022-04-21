import React from "react";

import Footer from "../components/Footer";
// Assets
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";
import HeroImg from "../assets/home/desktop/create-and-share.jpg";
import BeautifulStoriesImg from "../assets/home/desktop/beautiful-stories.jpg";
import DesignedForEveryoneImg from "../assets/home/desktop/designed-for-everyone.jpg";
// Story Images
import { homeStoryImages } from "../data";
// Card Icons
import ResponsiveIcon from "../assets/features/desktop/responsive.svg";
import PhotoLimitIcon from "../assets/features/desktop/no-limit.svg";
import EmbedIcon from "../assets/features/desktop/embed.svg";

function Home() {
  return (
    <main>
      <section className="home-section home-section--hero">
        <div className="home-section-text">
          <div className="text-wrapper">
            <h1>Create and share your photo Stories.</h1>
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
        <img src={HeroImg} alt="create-and-share" />
      </section>
      {/* Beautiful Stories Section*/}
      <section className="home-section">
        <img
          className="section-img beautiful-stories"
          src={BeautifulStoriesImg}
          alt="create-and-share"
        />
        <div className="home-section-text">
          <div className="text-wrapper">
            <h1>Beautiful stories every time</h1>
            <p>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <button className="btn-arrow btn-arrow--white">
              View the stories
              <img
                className="btn-arrow-icon"
                src={ArrowRightWhite}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
      </section>
      {/* Designed for Everyone*/}
      <section className="home-section">
        <div className="home-section-text">
          <div className="text-wrapper">
            <h1>Designed for everyone</h1>
            <p>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <button className="btn-arrow btn-arrow--white">
              View the stories
              <img
                className="btn-arrow-icon"
                src={ArrowRightWhite}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
        <img
          className="section-img beautiful-stories designed-for-everyone"
          src={DesignedForEveryoneImg}
          alt="designed-for-everyone"
        />
      </section>
      <div className="stories-wrapper">
        {homeStoryImages.map((image, idx) => {
          console.log(image);
          const { img, title } = image;
          return (
            <figure key={idx} className="story-wrapper">
              <img
                className="story-img"
                src={`../assets/stories/desktop/${img}`}
                alt={title}
              />
              <figcaption></figcaption>
            </figure>
          );
        })}
      </div>
      <section className="info-section">
        <div className="info-wrapper">
          {/* Card One */}
          <article className="info-card">
            <img src={ResponsiveIcon} alt="100% Responsive" />
            <h3>100% Responsive</h3>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </article>
          {/* Card Two */}
          <article className="info-card">
            <img src={PhotoLimitIcon} alt="No limit" />
            <h3>No Photo Upload Limit</h3>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </article>
          {/* Card Three */}
          <article className="info-card">
            <img src={EmbedIcon} alt="Available to Embed" />
            <h3>Available to Embed</h3>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </article>
        </div>
      </section>
      <Footer />
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
