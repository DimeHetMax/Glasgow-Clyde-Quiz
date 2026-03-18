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

export default function startCurrentTime(target) {
  if (!target) {
    return () => {};
  }

  const updateTime = () => {
    target.textContent = getCurrentTime();
  };

  updateTime();
  const intervalId = window.setInterval(updateTime, 1000);

  return () => window.clearInterval(intervalId);
}
