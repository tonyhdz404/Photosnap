import React from "react";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";
import HeroImg from "../assets/home/desktop/create-and-share.jpg";
import BeautifulStoriesImg from "../assets/home/desktop/beautiful-stories.jpg";

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
          className="section-img"
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
              get an invite
              <img
                className="btn-arrow-icon"
                src={ArrowRightWhite}
                alt="Arrow Right"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;

// View the stories

// Designed for everyone

// Photosnap can help you create stories that resonate with your audience.  Our
// tool is designed for photographers of all levels, brands, businesses you name it.

// View the stories

// The Mountains
// by John Appleseed
// Read Story

// Sunset Cityscapes
// by Benjamin Cruz
// Read Story

// 18 Days Voyage
// by Alexei Borodin
// Read Story

// Architecturals
// by Samantha Brooke
// Read Story

// 100% Responsive

// No matter which the device you’re on, our site is fully responsive and stories
// look beautiful on any screen.

// No Photo Upload Limit

// Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
// share all of your stories in one go.

// Available to Embed

// Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
// Google Maps, and more.

// Home
// Stories
// Features
// Pricing

// Get an invite

// Copyright 2019. All Rights Reserved
