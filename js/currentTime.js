const DATE_FORMAT_OPTIONS = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

const TIME_FORMAT_OPTIONS = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};
// function crate current data and time
export function getCurrentTime(date = new Date()) {
  const formattedDate = new Intl.DateTimeFormat(
    "en-GB",
    DATE_FORMAT_OPTIONS,
  ).format(date);
  const formattedTime = new Intl.DateTimeFormat(
    "en-GB",
    TIME_FORMAT_OPTIONS,
  ).format(date);

  return `${formattedDate} Time: ${formattedTime}`;
}
//  function update time each second
export default function startCurrentTime(target) {
  // if there is no element than return
  if (!target) {
    return () => {};
  }
  // Adding textual content of time
  const updateTime = () => {
    target.textContent = getCurrentTime();
  };

  updateTime();
  // updating time each second, setting the interval
  const intervalId = window.setInterval(updateTime, 1000);
  //  clearing interval
  return () => window.clearInterval(intervalId);
}
