import React from 'react';
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));


  
function tick() {
    const element = (
        <div>
        <h1>Home, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    root.render(element);

}

setInterval(tick, 1000);
