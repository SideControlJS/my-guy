// Countdown Logic

console.log(`Script has begun, bitch!`)

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
      { event: "Pick up Phil from airport <b>(Note: Frontier most likely has a flight that lands at 3:28 PM)</b>",  icon: "fas fa-plane-arrival" },
      { event: "Arrive at Airbnb - Evening", icon: "fas fa-home" },
      { event: "Disney Springs (Jaleo and M&M World)", icon: "fas fa-glass-cheers" },
      { event: "Board Games or Trivia", icon: "fas fa-dice" }
    ],
    "9/23": [
      { event: "Breakfast - TBD", icon: "fas fa-utensils" },
      { event: "Wade's Coffee Demonstration", icon: "fas fa-coffee" },
      { event: "Jiu Jitsu Session with Jesse - Before Lunch", icon: "fas fa-fist-raised" },
      { event: "Lunch (Keldon’s Nashville Hot)", icon: "fas fa-drumstick-bite" },
      { event: "Dinner at City Walk", icon: "fas fa-pizza-slice" },
      { event: "Universal Escape Room (5:30 PM - $373 total)", icon: "fas fa-lock" },
      { event: "Halloween Horror Nights w/ VIP Passes! - 6:30pm - 2:00am", icon: "fas fa-ghost" },
      
    ],
    "9/24": [
      { event: "Brunch/Coffee - TBD", icon: "fas fa-mug-hot" },
      { event: "Taking Phil to The Airport - TBD", icon: "fas fa-plane-departure" }
    ]

    
  };

  console.log(`DOMcontent loaded successfully`);

  const timelineContainer = document.querySelector(".timeline");

  for (const [date, events] of Object.entries(itinerary)) {
    const dateCard = document.createElement("div");
    dateCard.className = 'custom-card';
    const sanitizedDate = date.replace(/\//g, '-');

    dateCard.innerHTML = `
      <div class="card">
        <div class="card-header" id="heading${sanitizedDate}">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${sanitizedDate}" aria-expanded="true" aria-controls="collapse${sanitizedDate}">
              ${date}
            </button>
          </h5>
        </div>
        <div id="collapse${sanitizedDate}" class="collapse" aria-labelledby="heading${sanitizedDate}" data-bs-parent="#itineraryAccordion">
          <div class="card-body">
            <!-- Events will go here -->
          </div>
        </div>
      </div>
    `;

    const eventsContainer = dateCard.querySelector('.card-body');

    events.forEach(eventData => {
      const eventItem = document.createElement("div");
      eventItem.className = "event-item";
      eventItem.innerHTML = `<i class="${eventData.icon}"></i> ${eventData.event}`;
      eventsContainer.appendChild(eventItem);
    });

    timelineContainer.appendChild(dateCard);
  }
});