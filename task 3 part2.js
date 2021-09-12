//soal 2
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    console.log (nilaiAwal);
    console.log (nilaiAkhir);
    // fungsi untuk menentukan data array berada diantara nilai awal dan nilai akhir
        let dataArray2 = dataArray.filter(function(x){
        return  x > nilaiAwal && x < nilaiAkhir; 
        });

    // validasi nilaiawal < nilai akhir tampilkan data array diantara 5->20
    if(nilaiAwal < nilaiAkhir  && dataArray.length > 4 && dataArray2.length !== 0) {
       
        // menimpalkan array hasil filter menjadi ber-urut
        console.log(dataArray2.sort(function(a,b) {
            return a-b;
        }));

    // validasi jika nilai awal !< nilai akhir
    } else if (nilaiAwal > nilaiAkhir ) {
        console.log('nilai akhir harus lebih besar dari nilai awal');
    } else if ( dataArray.length < 5 ) {
        console.log('jumlah data dalam array kurang dari 5')
    } else {
      console.log('data tidak ditemukan')
    }
};
// panggil seleksi nilai
// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30,8]);
// seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30,8]);
// seleksiNilai(5, 17, [2, 25]);
// seleksiNilai(5, 17, [2, 25, 1, 30, 18]);