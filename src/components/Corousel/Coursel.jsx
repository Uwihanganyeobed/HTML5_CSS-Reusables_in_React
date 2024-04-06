import  { useState, useEffect } from 'react';
import './Coursel.css'; // Assuming you have a separate CSS file for styling
import img1 from '../../components/jon-flobrant-lRSChvh1Mhs-unsplash.jpg'
import img2 from '../../components/PXL_20231030_135925530.PORTRAIT.jpg'
import img3 from '../../components/wallpaperflare.com_wallpaper (3).jpg'

const Coursel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { setSlideIndex(1); }
    if (n < 1) { setSlideIndex(slides.length); }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src={img1} />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src={img2} />
        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src={img3} />
        <div className="text">Caption Three</div>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>(()</a>
      <a className="next" onClick={() => plusSlides(1)}>())</a>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Coursel;
