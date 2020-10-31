

function notify() {
  console.log('Mentor notified')
}

function timeslots() {
  return ['9PM Today', '3PM Tomorrow']
}

module.exports.timeslots = timeslots;
module.exports.notify = notify;
