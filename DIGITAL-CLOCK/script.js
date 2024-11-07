// Get the audio element for the ticking sound
const tickSound = document.getElementById("tick-sound");

// Update the clock every second
setInterval(() => {
    // Get time elements
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ap_pm = document.getElementById("ap-pm");

    // Get SVG circle elements for animation
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    // Get dot elements for rotation
    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");

    // Get the current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am_pm = h >= 12 ? "PM" : "AM"; // Determine AM/PM

    // Convert 24-hour format to 12-hour format
    if (h > 12) h -= 12;
    if (h == 0) h = 12; // Handle 12 AM

    // Add leading zeroes if needed
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update the HTML content for the clock
    hours.innerHTML = h + "<br><span>hour</span>";
    minutes.innerHTML = m + "<br><span>minute</span>";
    seconds.innerHTML = s + "<br><span>second</span>";
    ap_pm.innerHTML = am_pm;

    // Animate the SVG circles based on current time
    hh.style.strokeDashoffset = 440 - (440 * h) / 12; // Hours
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; // Minutes
    ss.style.strokeDashoffset = 440 - (440 * s) / 60; // Seconds

    // Rotate the dot indicators
    hr_dot.style.transform = `rotate(${h * 30}deg)`; // 360/12 = 30 degrees per hour
    min_dot.style.transform = `rotate(${m * 6}deg)`; // 360/60 = 6 degrees per minute
    sec_dot.style.transform = `rotate(${s * 6}deg)`; // 360/60 = 6 degrees per second

    // Play the ticking sound every second
    tickSound.currentTime = 0; // Reset the audio to the start
    tickSound.play(); // Play the sound
}, 1000);
