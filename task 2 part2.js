//calback : function yang dikirimkan sebagai parameter function lain
const name = [
    "Abigail","Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth", 
    "Ella","Faith","Olivia","Penelope",
  ];
  // fungsi carinama
  const cariNama = (keyword, limit, callback) => {
    // mencari array
    const cariArr = name.filter((nama) => {
      return nama.toLowerCase().includes(keyword);
    });
  // menentukan limit
  //['alexandra', 'amanda', 'angela', 'diana']
    const limitNama = cariArr.slice(0, limit);
    callback(limitNama);
  };

  // result
  const result = (nama) => {
    console.log(nama);
  };
  
  cariNama("an", 3, result);
