function pairElement(str) {
  const a = ["A", "T"];
  const t = ["T", "A"];
  const g = ["G", "C"];
  const c = ["C", "G"];
  
  let dna = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "A")
      dna.push(a);
    else if (str[i] == "T")
      dna.push(t);
    else if (str[i] == "G")
      dna.push(g)
    else
      dna.push(c);
  }

  return dna;
}

// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("ATCGA");

// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("TTGAG");

// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
pairElement("CTCTA");