import React, { useState } from "react";

import { storyImages, storyPageImages } from "../data";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";

function Stories() {
  return (
    <main>
      <section className="stories-hero">
        <figure className="story-hero-wrapper">
          <picture>
            <source
              media="(min-width: 800px )"
              srcSet={storyPageImages.moonOfAppalacia}
            />
            <source
              media="(min-width: 402px )"
              srcSet={storyPageImages.tabletMoonOfAppalacia}
            />

            <img
              className="stories-hero-bg-img"
              src={storyPageImages.mobileMoonOfAppalacia}
              alt="Moon of Appalacia"
            />
          </picture>
        </figure>
        <div className={`stories-hero-text-wrapper`}>
          <article className="stories-hero-text">
            <h4 className="stories-hero-subtitle">
              Last month's featured story
            </h4>
            <h1 className="h1--white">Hazy full moon of Appalachia</h1>
            <p>
              March 2nd 2020 <span>by John Appleseed</span>
            </p>
            <p className="stories-hero-text-paragraph">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <a className="btn-arrow btn-arrow--white" href="#">
              read story
              <img
                className="btn-arrow-icon"
                src={ArrowRightWhite}
                alt="Arrow Right"
              />
            </a>
          </article>
        </div>
      </section>

      <div className="stories-wrapper">
        {storyImages.map((image, idx) => {
          const { date, src, srcMobile, title, artist } = image;
          return (
            <figure key={idx} className="story-wrapper">
              <picture>
                <source media="(min-width: 800px )" srcSet={src} />
                <source media="(min-width: 402px )" srcSet={src} />
                <img className="story-img" src={srcMobile} alt={title} />
              </picture>

              <figcaption className="story-text">
                <h5>{date}</h5>
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
    </main>
  );
}

export default Stories;
