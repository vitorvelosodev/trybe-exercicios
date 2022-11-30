function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  const objArray = [];
  try {
    if (tech.length > 0) {
      tech.sort();
    } else {
      throw new Error('Dados no input inconsistentes');
    }
  } catch(e) {
    return e.message;
  }
  for (let i = 0; i < tech.length; i += 1) {
    if (typeof tech[i] !== 'string' || typeof name !== 'string') {
      return new Error('Dados no input inconsistentes');
    }
    const element = tech[i];
    objArray.push({ tech: element, name: name });
  }
  return objArray;
}

module.exports = techList;