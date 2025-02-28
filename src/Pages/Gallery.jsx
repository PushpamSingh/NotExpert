import LightGallery from "lightgallery/react";
import gallery from "../ApiJson/Gallery.json";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";
// # lgAutoplay, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay"
import lgFullscreen from "lightgallery/plugins/fullscreen"
import lgRotate from "lightgallery/plugins/rotate"
import lgShare from "lightgallery/plugins/share"
import { NavLink } from "react-router";


export const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div>
      <h1 className="text-center m-t-2 text-2xl font-[800] text-green-700 border-b-2">Our Gallery</h1>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom,lgAutoplay,lgFullscreen,lgRotate,lgShare]}
        >
          {gallery.map((img, index) => {
            return (
              <a href={img.img} key={index} className="rounded-[12px] overflow-hidden shadow-[2px_2px_5px_gray,-2px_-2px_5px_gray] transition-all duration-300 hover:scale-[1.1] hover:opacity-[.8] w-full">
                <img src={img.img} alt="" className="w-full h-full"/>
              </a>
            );
          })}
        </LightGallery>
        <div className="flex justify-center items-center m-b-4">
        <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLScIxqaPuJ6LlO5SeqOgHQ9oiJDq-C34oL3axQB4NSW2UFxg4w/viewform"
        className="bg-cyan-700 text-xl button-p text-white font-[700] cursor-pointer transition-all duration-300 hover:bg-cyan-400 rounded-xl text-center"
        >Upload Photo
        </NavLink>
        </div>
      </div>
  );
};
