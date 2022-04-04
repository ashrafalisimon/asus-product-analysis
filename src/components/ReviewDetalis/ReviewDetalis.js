import React from 'react';

const ReviewDetalis = ({reviewdetalis}) => {
    const {name, picture, rating, reviews} = reviewdetalis;
    return (
        <div className='py-12 px-8 bg-white rounded-xl '>
            <div>
                <div>
                    <img className='w-32 h-32 mx-auto rounded-full' src={picture} alt="" />
                </div> 
                <p className='text-center text-sm font-semibold py-4'>{name}</p>
            </div>
            <div className=''>   
                <p className='text-lg text-gray-400 text-center'><small>"{reviews}"</small></p>
                <p className='text-2xl text-center pt-4'>Rating:<span className='text-orange-600'> {rating}</span></p>
            </div>
        
        </div>
    );
};

export default ReviewDetalis;