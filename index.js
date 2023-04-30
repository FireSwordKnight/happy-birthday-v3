// Set the date of your friend's birthday
const birthday = new Date("May 3, 2023 00:00:00").getTime();

// Update the countdown clock every second
const countdown = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the difference between now and the birthday
  const difference = birthday - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML of the countdown clock
  document.getElementById("countdown-clock").innerHTML = `${days} <br> ${hours} <br> ${minutes} <br> ${seconds}`;

  // If the countdown is over, clear the interval
  if (difference < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-clock").innerHTML = "HAPPY BIRTHDAY!";
  }
}, 1000);

