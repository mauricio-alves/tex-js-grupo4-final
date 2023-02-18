// slice date yyyy-mm-dd
const sliceDate = (date) => {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return { year, month, day };
};

const getFromDate = (date, input) => {
  const monthUTC = date.getUTCMonth();
  const dayUTC = date.getUTCDate();

  const year = date.getUTCFullYear();
  const month = (monthUTC+1).toString().length === 1 ? '0' + (monthUTC+1).toString() : (monthUTC)+1;
  const day = (dayUTC).toString().length === 1 ? '0' + (dayUTC).toString() : dayUTC;
  
  if (input)
    return `${year}-${month}-${day}`
  else
    return { year, month, day };
};

const addDays = (date, days, input) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  
  return getFromDate(result, input);
};

export { getFromDate, sliceDate, addDays };
