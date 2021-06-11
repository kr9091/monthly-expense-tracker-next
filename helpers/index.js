import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function convertDate(date) {
  // const options = { year: 'numeric', month: 'short', day: 'numeric' };
  // const newDate = new Date(date);
  // const convertedDate = newDate.toLocaleDateString('en-US', options);

  const convertedDate = dayjs(date).format('YYYY-MM-DD');

  return convertedDate;
}
function convertCurrency(value) {
  const formattedCurrency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return formattedCurrency;
}

function RelativeTime(date) {
  const count = dayjs().month();

  return count;
}

export { convertDate, convertCurrency, RelativeTime };
