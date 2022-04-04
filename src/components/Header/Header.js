import React from 'react';
import useReview from '../../hook/useReview';
import banner from '../../images/banner.png'
import ReviewDetalis from '../ReviewDetalis/ReviewDetalis';

const Header = () => {
    const [review, setReview] = useReview();
    return (
      <section>
            <div className='w-full mx-auto md:grid grid-cols-2 md:p-12'>
            <div className="header-content xl:pl-16 ">
                <h1 className='text-6xl font-bold uppercase text-black-700 py-4'>Asus Tuf Gaming F15</h1>
                <p className='text-xl tracking-wider leading-10'>The TUF Gaming chassis has been redesigned for 2022, and is 4.5% smaller than last year’s models. The TUF logo has been reimagined as well, with both embossed and laser-sculpted versions. Despite this size reduction, the brand new 2022 TUF Gaming F15 still houses a large touchpad with anime-inspired accents and four-way indicators.</p>
               <button className=' mt-4 bg-slate-900 border-none text-white px-6 py-2 rounded-lg'> <a  className="no-underline font-semibold text-xl" href='https://youtu.be/_mgwli8n15c' >Live Demo</a></button>
            </div>
            <div className="header-img">
                <img src={banner} alt="Not a Banner img" />
            </div>
           
        </div>
          <div className='w-10/12 mx-auto pt-12'>
              <h2 className='text-3xl font-bold text-center py-12'>Review Section</h2>
            <div className="review-item w-full mx-auto md:grid grid-cols-3 gap-x-5">
                {
                    review.slice(0,3).map(reviewdetalis => <ReviewDetalis key={reviewdetalis.id}
                    reviewdetalis={reviewdetalis}
                    ></ReviewDetalis>)
                }
            </div>
           <div className='text-center py-12'>
                <button className=' mt-4 bg-slate-900 border-none text-white px-6 py-2 rounded-lg'> <a  className="no-underline font-semibold text-xl" href='/reviews' >See All Review</a></button>
           </div>
          </div>
      </section>
    );
};

export default Header;