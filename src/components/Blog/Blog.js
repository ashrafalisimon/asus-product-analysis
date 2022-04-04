import React from 'react';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='py-8'>
                <h4 className='text-xl py-4'><span className='font-bold'>1.</span> What is Context API</h4>
                <p className='text-sm'><span className='font-bold'>Ans: </span> Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases.</p>
            </div>
            <div className='py-8'>
                <h4 className='text-xl py-4'><span className='font-bold'>2.</span> What is Semantic</h4>
                <p className='text-sm'><span className='font-bold'>Ans: </span> Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.</p>
                <p>Ex: article,aside,details,,figure,footer,header,main, mark, nav and etc.</p>
            </div>
            <div className='py-8'>
                <h4 className='text-xl py-4'><span className='font-bold'>3.</span> Inline block and Inline block elements</h4>
                <p className='text-sm'><span className='font-bold'>Ans: </span>Block level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.</p>
                <p>
                Inline elements display in a line. They do not force the text after them to a new line.
                </p>
            </div>
        </div>
    );
};

export default Blog;