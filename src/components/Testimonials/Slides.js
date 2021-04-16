const Slides = (img, testimonial, name) => (
  `<div class="Slides icon-cards__item d-flex align-items-center justify-content-center">
        <img src="${img}" alt="Person img">
        <p>"${testimonial}"</p>
        <b>${name}</b>
    </div>`
);

export default Slides;
