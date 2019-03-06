import React from 'react';

const Home = () => {
return (
    <div> 
        <div>
            I am new home component
        </div>
        <button onClick={() => console.log('Hey there')}>
            Press Me!
        </button>
    </div> 
    );
}

export default Home;