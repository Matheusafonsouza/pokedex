const getCategoryColor = (type: string): string => {
  switch (type) {
    case 'normal':
      return '#e4e4e4';
    case 'fighting':
      return '#c13f27';
    case 'flying':
      return '#a4a7f8';
    case 'poison':
      return '#8774a8';
    case 'ground':
      return '#ddaf58';
    case 'rock':
      return '#b79f35';
    case 'bug':
      return '#acc24d';
    case 'ghost':
      return '#b4a8c9';
    case 'steel':
      return '#85a1ab';
    case 'fire':
      return '#f3b88e';
    case 'water':
      return '#8da7f1';
    case 'grass':
      return '#68c644';
    case 'electric':
      return '#c8a55f';
    case 'psychic':
      return '#eb5c7a';
    case 'ice':
      return '#93d7d3';
    case 'dragon':
      return '#7272f7';
    case 'dark':
      return '#686868';
    case 'fairy':
      return '#E251FF';
    case 'unknown':
      return '#5A4D11';
    case 'shadow':
      return '#313131';
    default:
      return '#313131';
  }
};

export default getCategoryColor;
