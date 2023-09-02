// Countdown Logic
const countDownDate = new Date("Sep 22, 2023 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's Party Time!";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const itinerary = {
    "9/22": [
      { event: "Pick up Phil/Gio from airport <b>(Note: Frontier most likely has a flight that lands at 3:28 PM)</b>",  icon: "fas fa-plane-arrival" },
      { event: "Arrive at Airbnb - Evening", icon: "fas fa-home" },
      { event: "Disney Springs (Jaleo and M&M World)", icon: "fas fa-glass-cheers" },
      { event: "Board Games or Trivia", icon: "fas fa-dice" }
    ],
    "9/23": [
      { event: "Breakfast - TBD", icon: "fas fa-utensils" },
      { event: "Wade's Coffee Demonstration", icon: "fas fa-coffee" },
      { event: "Jiu Jitsu Session with Jesse - Before Lunch", icon: "fas fa-fist-raised" },
      { event: "Lunch (Keldon’s Nashville Hot)", icon: "fas fa-drumstick-bite" },
      { event: "Dinner (Topolino or Jaleo/M&M World)", icon: "fas fa-pizza-slice" },
      { event: "Universal Escape Room (5:30 PM - $373 total)", icon: "fas fa-lock" },
      { event: "Halloween Horror Nights w/ VIP Passes! - 6:30pm - 2:00am", icon: "fas fa-ghost" },
      
    ],
    "9/24": [
      { event: "Brunch/Coffee - TBD", icon: "fas fa-mug-hot" },
      { event: "Taking Gio/Phil to The Airport - TBD", icon: "fas fa-plane-departure" }
    ]
  };

  const timelineContainer = document.querySelector(".timeline");
  
  for (const [date, events] of Object.entries(itinerary)) {
    const dateDiv = document.createElement("div");
    dateDiv.innerHTML = `<div class="event-date">${date}</div>`;
    
    events.forEach((eventData) => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");
      
      const icon = `<i class="${eventData.icon}"></i>`;
      eventCard.innerHTML = `${icon} ${eventData.event}`;
      
      dateDiv.appendChild(eventCard);
    });
    
    timelineContainer.appendChild(dateDiv);
  }
});