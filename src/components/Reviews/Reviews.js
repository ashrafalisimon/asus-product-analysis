import React from 'react';
import useReview from '../../hook/useReview';
import ReviewDetalis from '../ReviewDetalis/ReviewDetalis';

const Reviews = () => {
    const [review, setReview] = useReview();
    return (
        <div className='bg-green-100'>
            <div className='w-10/12 mx-auto pt-12'>
              <h2 className='text-4xl font-bold text-center py-12'>All Review Section</h2>
            <div className="review-item w-full mx-auto md:grid grid-cols-3 gap-x-5">
                {
                    review.map(reviewdetalis => <ReviewDetalis key={reviewdetalis.id}
                    reviewdetalis={reviewdetalis}
                    ></ReviewDetalis>)
                }
            </div>
          </div>
        </div>
    );
};

export default Reviews;