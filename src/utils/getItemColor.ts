const getItemColor = (color: string): string => {
  switch (color) {
    case 'black':
      return '#e4e4e4';
    case 'blue':
      return '#7d9cf0';
    case 'brown':
      return '#e3bf7c';
    case 'gray':
      return '#809da8';
    case 'green':
      return '#7ccb65';
    case 'pink':
      return '#eb5e74';
    case 'purple':
      return '#8774a8';
    case 'red':
      return '#c13f27';
    case 'white':
      return '#fff';
    case 'yellow':
      return '#f6c729';
    default:
      return '#fff';
  }
};

export default getItemColor;
