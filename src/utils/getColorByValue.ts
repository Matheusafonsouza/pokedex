const getColorByValue = (value: number): string => {
  if (value <= 75) {
    return '#DF4E49';
  }
  if (value <= 150) {
    return '#F59D1F';
  }
  if (value <= 225) {
    return '#F5C419';
  }
  if (value <= 300) {
    return '#60A041';
  }
  return '#DF4E49';
};

export default getColorByValue;
