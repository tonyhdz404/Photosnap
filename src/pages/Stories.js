import React from "react";
import { storyImages } from "../data";
import ArrowRightWhite from "../assets/shared/desktop/arrow-white.svg";

function Stories() {
  return (
    <main>
      <section className="stories-hero">
        <article className="stories-hero-text">
          <h4 className="stories-hero-subtitle">Last month's featured story</h4>
          <h1 className="h1--white">Hazy full moon of Appalachia</h1>
          <p>
            March 2nd 2020 <span>by John Appleseed</span>
          </p>
          <p className="stories-hero-text-paragraph">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
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
      </section>
      <div className="stories-wrapper">
        {storyImages.map((image, idx) => {
          const { date, src, title, artist } = image;
          return (
            <figure key={idx} className="story-wrapper">
              <img className="story-img" src={src} alt={title} />
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
