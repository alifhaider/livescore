export function stringifiedDay(num: Number) {
  switch (num) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
  }
}

export const getDateList = (date) => {
  const days = [date];

  // get previous two days
  for (let i = 1; i <= 2; i++) {
    const prevDate = new Date(date);
    prevDate.setDate(date.getDate() - i);
    days.unshift(prevDate);
  }

  // get next two days
  for (let i = 1; i <= 2; i++) {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + i);
    days.push(nextDate);
  }

  return days;
};

export function stringifiedMonth(num: number) {
  switch (num) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default: {
      return "Where are you?";
      break;
    }
  }
}
