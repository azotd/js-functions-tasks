const run = (text) => {
    // BEGIN
  const takeLast = (txt, n) => {
    if (txt.length === 0 || txt.length < n){
      return null;
    }
    return txt.slice(txt.length - n).split('').reverse().join('');
  }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;