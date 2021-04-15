import Swiper from 'swiper';
import Slides from './Slides';
import person1 from '../../../assets/images/person_1.jpg';
import person2 from '../../../assets/images/person_2.jpg';
import person3 from '../../../assets/images/person_3.jpg';

const Testimonials = (testimonials) => {
  const photos = {
    person_1: person1,
    person_2: person2,
    person_3: person3,
  };
  //function classToggle() {
  //  var el = document.querySelector('.icon-cards__content');
  //  el.classList.toggle('step-animation');
  //}
  
  //document.querySelector('#toggle-animation').addEventListener('click', classToggle);
  return (
    ` <div class="Testimonials">
            <h1>Testimonials</h1>
            <figure class="icon-cards mt-3">
            <div class="icon-cards__content">
                ${testimonials.map((info) => Slides(photos[info.photoId], info.post, info.name))}
            </div>
          </figure>
            </div>
        </div>`.replaceAll(',', '')
  );
};

export default Testimonials;
