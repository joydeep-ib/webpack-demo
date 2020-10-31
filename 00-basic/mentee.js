const mentor = require('./mentor')

function notify() {
  console.log('Mentee notified')
}

function mentorTimeslots() {
  return mentor.timeslots();
}

// Mock UI code

(function() {
  const root = document.querySelector('#root');
  root.innerHTML = `<h1>Scaler Dashboard</h1>`;

  root.innerHTML += `<p>Mentor Session Timeslots</p>`;

  mentorTimeslots().forEach((t) => root.innerHTML += `${t} <br>`);
})();
