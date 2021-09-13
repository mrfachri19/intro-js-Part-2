// charAt menampilkan karakter ke sekian | dimulai dari indekx ke 0
let name = 'fachri';
let arr =['sandi','andi'];

console.log(name.charAt(5));

// push
//menambah elemen di akhir array
arr.push('dody');
console.log(arr);

//pop
//elemen terakirnya dihapus
arr.pop();
console.log(arr);

//toLowerCase() 
// mengubah menjadi huruf kecil
console.log('ALPHABET'.toLowerCase()); // 'alphabet'

// .toUpperCase()
// mengubah menjadi huruf besar
console.log('alphabet'.toUpperCase()); // 'ALPHABET'

//unshift
// menambah elemen awal
arr.unshift('dody');
console.log(arr);

//shift
// menghilangkan awal elemen
arr.shift();
console.log(arr);


//splice 
//menyisipkan array ditengah
//splice(index awal,mau dihapus berapa, elemen baru1, elemen baru2, ... )
arr.splice(0,0, 'dodi','doni');
console.log(arr);

//slice
// slice(awal terbawa, akhir tidak)
let arr2 = arr.slice(1,3);
console.log(arr2);

//filter 
// mencari banyak nilai
let angka = [1,2,3,4,5,6,7];
let angka2 = angka.filter(function(x){
    return x >2;
});
console.log(angka2);
