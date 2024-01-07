import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const BannerOne =
  "https://fastly.picsum.photos/id/416/536/354.jpg?hmac=p_T6ASl7J8Od_uXtsT0pUYDKTScGO8bJKgBnyHg4RFg";
const BannerTwo =
  "https://fastly.picsum.photos/id/416/536/354.jpg?hmac=p_T6ASl7J8Od_uXtsT0pUYDKTScGO8bJKgBnyHg4RFg";
const BannerThree =
  "https://fastly.picsum.photos/id/416/536/354.jpg?hmac=p_T6ASl7J8Od_uXtsT0pUYDKTScGO8bJKgBnyHg4RFg";
const Slider = () =>{
   return <section id="home" className="gap-16 bg-gray-20 py-0 md:h-full md:pb-0">
   <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
     <AliceCarousel
       autoPlay={true}
       infinite={true}
       autoPlayInterval={3000}
       autoPlayDirection="ltr"
     >
       <img
         alt="Banner One"
         src={BannerOne}
         className=" md:flex mx-auto md:h-5/6"
       />
       <img
         alt="Banner Two"
         src={BannerTwo}
         className=" md:flex mx-auto md:h-5/6"
       />
       <img
         alt="Banner Three"
         src={BannerThree}
         className=" md:flex mx-auto md:h-5/6"
       />
     </AliceCarousel>
   </div>
 </section>
}

export default Slider;