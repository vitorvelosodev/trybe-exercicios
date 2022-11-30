const sum = (value1, value2) => {
  try {
      if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw -1;
      }
      return value1 + value2;
  } catch(e) {
    console.log(`Erro na função ${e}`);
    return 'erro';
  }
};
  
console.log(sum(2, '3'));