import React from "react";
import { parseISO, formatDistance } from "date-fns";

const DatePosted = ({ date }) => {
  const convertedTimeFromIso = parseISO(date, {
    additionalDigits: 1,
  });
  const diff = formatDistance(new Date(convertedTimeFromIso), new Date(), {
    addSuffix: true,
  });
  return diff;
};
export default DatePosted;
//   return (
//     <div>

//     </div>
//   )
