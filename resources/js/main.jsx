import React from 'react';
import { createRoot } from 'react-dom/client'

//navbar clock
const clock = createRoot(document.getElementById('clock')); 
function tick() {
    const element = (
        new Date().toLocaleTimeString()
    );

    clock.render(element);

}
setInterval(tick, 1000);
