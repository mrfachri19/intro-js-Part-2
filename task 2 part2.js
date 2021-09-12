const name = [
    "Abigail","Alexandra", "Alison", "Amanda",
    "Angela", "Bella", "Carol", "Caroline",
    "Carolyn", "Deirdre", "Diana", "Elizabeth", 
    "Ella","Faith","Olivia","Penelope",
  ];
  
  const cariNama = (key, limit, callback) => {
    const cariArr = name.filter((nama) => {
      return nama.toLowerCase().includes(key);
    });
  
    const limitNama = cariArr.slice(0, limit);
    callback(limitNama);
  };
  
  const result = (nama) => {
    console.log(nama);
  };
  
  cariNama("an", 3, result);