import React from 'react'

function Grettings() {

    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/iIN9FhrbOLQekZYw9l/source.gif')";
        // greeting.textContent = 'Selamat pagi, ';
        return (<h2>Bangun waktunya mulung</h2>)
    } else if (hour < 17) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/pHWPC9Hrr3mhGhyRAl/source.gif')";
        // greeting.textContent = 'Met Siang cuk, ';
        return (<h2>Met, Siang</h2>)
    } else {
        // Evening
        document.body.style.backgroundImage = "url('https://media.giphy.com/media/BHNfhgU63qrks/source.gif')";
        // greeting.textContent = 'Malem tidur bego, ';
        document.body.style.color = 'white';
        return (<h2>Malem tidur bego</h2>)
    }
}

export default Grettings
