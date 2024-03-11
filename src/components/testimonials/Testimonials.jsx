import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//ARRAY OF TESTIMONIALS TO DISPLAY THEM DYNAMICALLY

const data = [
  {
    avatar: AVTR1,
    name: "Dan Njoroge",
    review:
      "It's been a pleasure mentoring David Thumbi as a junior developer. His curiosity and enthusiasm are infectious, and he approaches every task with a positive attitude and a thirst for knowledge. David's commitment to expanding his skill set makes him an invaluable member of our team.",
  },
  {
    avatar: AVTR2,
    name: "Jet'aime Wambui",
    review:
      "David Thumbi's dedication to mastering new technologies sets him apart as a junior developer. His commitment to delivering high-quality work and his willingness to experiment showcase his adaptability and drive to excel in his role.",
  },
  {
    avatar: AVTR3,
    name: "Lilian Wanjiru",
    review:
      "I have had the privilege of collaborating with David Thumbi, and his dedication to perfection is unparalleled. He approaches every task with a relentless pursuit of excellence, leaving no stone unturned until he achieves the perfect outcome. David's commitment to perfectionism sets a high standard for professionalism and quality in our organization.",
  },
  {
    avatar: AVTR4,
    name: "James Otieno",
    review:
      "I cannot speak highly enough of David Thumbi's contributions to our project. His professionalism, technical expertise, and collaborative nature as a junior developer were instrumental in its success. David's ability to grasp complex requirements and deliver results in a timely manner exceeded our expectations. It was a pleasure working with him, and I look forward to future opportunities to collaborate.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
