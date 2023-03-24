import React from 'react'

function Carousel() {
  return (
    <>
     <div className='carouselbackground'>
      <div className="carousel">
          <img src="https://placekitten.com/1000/1000" alt="Maria de Almeida" className="testimonial-img" />
          <blockquote className="testimonial">
              <p className="testimonial-text">
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa at voluptatibus odio, explicabo
                expedita sapiente consectetur saepe. Sit quidem excepturi aliquam officia dolores recusandae placeat."
              </p>
              <p className="testimonial-author">Lolo </p>
              <p className="testimonial-job">Senior Product Manager at ABC Comercial</p>
          </blockquote>
          <button className="btn btn-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="btn-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="btn btn-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="btn-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="dots">
            <button className="dot dot-filled">&nbsp;</button>
            <button className="dot">&nbsp;</button>
            <button className="dot">&nbsp;</button>
            <button className="dot">&nbsp;</button>
          </div>
      </div>
    </div>
     </>     
  )
}

export default Carousel
