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

document.addEventListener("DOMContentLoaded", function(){}); {
  // Define the itinerary data
  const itinerary = {
    "9/22": [
      { event: "Arrive at Airbnb after work", icon: "fas fa-home" },
      { event: "Pick up Phil/Gio from airport", icon: "fas fa-plane-arrival" },
      { event: "Note: Frontier most likely flight that lands at 3:28 PM", icon: "fas fa-clock" },
      { event: "Pick up Gio", icon: "fas fa-user-plus" },
      { event: "Disney Springs (Jaleo and M&M World)", icon: "fas fa-glass-cheers" },
      { event: "Board Games or Trivia", icon: "fas fa-dice" }
    ],
    "9/23": [
      { event: "Breakfast - TBD", icon: "fas fa-utensils" },
      { event: "Wade Coffee demonstration", icon: "fas fa-coffee" },
      { event: "Jiu Jitsu Session - before lunch", icon: "fas fa-fist-raised" },
      { event: "Lunch (Keldon’s Nashville Hot)", icon: "fas fa-drumstick-bite" },
      { event: "Universal Escape Room (5:30 PM - $373 total)", icon: "fas fa-lock" },
      { event: "Halloween horror nights at night", icon: "fas fa-ghost" },
      { event: "Dinner (Topolino or Jaleo/M&M World)", icon: "fas fa-pizza-slice" },
      { event: "6:30 PM - 2:00 AM", icon: "fas fa-moon" }
    ],
    "9/24": [
      { event: "Brunch/Coffee - TBD", icon: "fas fa-mug-hot" },
      { event: "Taking Gio/Phil to the airport", icon: "fas fa-plane-departure" }
    ]
  };

  // Get the timeline container element
  const timelineContainer = document.querySelector(".timeline");

  // Generate the timeline HTML
  for (const [date, events] of Object.entries(itinerary)) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("text-light", "mb-5");

    const dateHeading = document.createElement("h4");
    dateHeading.innerHTML = date;
    dateDiv.appendChild(dateHeading);

    events.forEach((eventData) => {
      const eventDiv = document.createElement("div");
      eventDiv.classList.add("d-flex");

      const iconDiv = document.createElement("div");
      iconDiv.innerHTML = `<i class="${eventData.icon}"></i>`;
      iconDiv.classList.add("mr-3");

      const eventText = document.createElement("div");
      eventText.innerHTML = eventData.event;

      eventDiv.appendChild(iconDiv);
      eventDiv.appendChild(eventText);
      dateDiv.appendChild(eventDiv);
    });

    timelineContainer.appendChild(dateDiv);
  }
}
