

const himpunanObjek=[];
for (let index = 32; index < 127; index++) {
     himpunanObjek.push(String.fromCharCode(index))

     
}

himpunanObjek.push("α","β","Δ","θ","ε")


export {himpunanObjek}


export function findIndex(elementToFind) {
     for (let i = 0; i < himpunanObjek.length; i++) {
          if (himpunanObjek[i] === elementToFind) {
               return i; // Mengembalikan indeks pertama di mana elemen ditemukan
          }
     }
     return -1; 
}

const kunci=document.querySelector(".k.enkripsi>input");
function textToListHimpunan(text){
     let arrText=Array.from(String(text));
     let arrAscii=arrText.map((e)=>(findIndex(e)));
     return arrAscii
}


function listToTextHimpunan(list){
     let listMod=list.map((e)=>himpunanObjek[(100+e%100)%100]);
     let chip = listMod.join("")
     return chip
}

export function caesar(text){
     const listText=textToListHimpunan(text);
     const keyList=listText.map(el=>(el+Number(kunci.value)));
     return listToTextHimpunan(keyList);
};


export function caesarDek(text){
     const listText=textToListHimpunan(text);
     const keyList=listText.map(el=>(el-Number(kunci.value)));
     return listToTextHimpunan(keyList);
};


export function vigenere(text){
     const listText=textToListHimpunan(text);
     const listkey=textToListHimpunan(kunci.value);


     let listKeySebanyakText=[];
     for (let i=0;i<=text.length-1;i++){
          listKeySebanyakText.push(listkey[i%listkey.length])
     };
     let hasilPlus = listText.map((value, index) => (value + listKeySebanyakText[index])%100);
     // console.log(hasilPlus)
     return listToTextHimpunan(hasilPlus)
     
};

export function vigenereDek(text){
     const listText=textToListHimpunan(text);
     const listkey=textToListHimpunan(kunci.value);


     let listKeySebanyakText=[];
     for (let i=0;i<=text.length-1;i++){
          listKeySebanyakText.push(listkey[i%listkey.length])
     };
     let hasilPlus = listText.map((value, index) => (100+(value - listKeySebanyakText[index])%100)%100);
     // console.log(hasilPlus)
     return listToTextHimpunan(hasilPlus)

};

// membuat kunci matrix
export function keyPlayFair(text){
     let keyListA=Array.from(text);
     let kunciUniq = [];
     for ( let i = 0; i < keyListA.length; i++ ) {
          if ( !kunciUniq.includes( keyListA[ i ] ) ) {
               kunciUniq.push( keyListA[ i ] );
          }
     }

     for ( let i = 0; i < 95; i++ ) {
          if ( !kunciUniq.includes( String.fromCharCode(32+i) ) ) {
               kunciUniq.push( String.fromCharCode(32+i) );
          }
     }
     kunciUniq.push("α","β","Δ","δ","ε");


     const numRows = 10;
     const numCols = 10;
     const matrixKunci = [];

     for ( let i = 0; i < numRows; i++ ) {
     const row = [];
     for ( let j = 0; j < numCols; j++ ) {
          const value = kunciUniq[ i * numCols + j ];
          row.push( value );
     }
          matrixKunci.push( row );
     }
     return matrixKunci
}
       
function cekUniqText(teks){
     let resultArray1 = teks.match(/.{1,2}/g);
     if(resultArray1===null){
          resultArray1=[];
     }
     let resultArrayList1 = resultArray1.map(e=>Array.from(e));          
     for (let innerArray of resultArrayList1) {
          if (innerArray.length === 2 && innerArray[0] === innerArray[1]) {
               innerArray[0] += "Δ";
          }    
     }          
     let result = '';
     for (let innerList of resultArrayList1) {
          result += innerList.join('');
     }
     let listFor1=result.match(/.{1,2}/g);
     if(listFor1===null){
          listFor1=[];
     }
     let listFor=listFor1.map(e=>Array.from(e));
     return {result,listFor}     
}

export function playFair(text){
     const matrixKunci=keyPlayFair(kunci.value);     
     let hasiljadiTextEnk=cekUniqText(text).listFor;
     let hasiljadiTextEnkRe=cekUniqText(text).result;
     for (let innerArray of hasiljadiTextEnk) {
          if (innerArray.length === 2 && innerArray[0] === innerArray[1]) {
               hasiljadiTextEnk=cekUniqText(hasiljadiTextEnkRe).listFor
               hasiljadiTextEnkRe=cekUniqText(hasiljadiTextEnkRe).result;
               }
               
     }
     
     if (hasiljadiTextEnk === null) {
          hasiljadiTextEnk = []; 
     }


     for (let i = 0; i < hasiljadiTextEnk.length; i++) {
          if (hasiljadiTextEnk[i].length === 1) {
               hasiljadiTextEnk[i].push("Δ") ;
          }
     }


     let x = hasiljadiTextEnk.map( e =>
          e.map( el => {
               const positions = findElementPosition( matrixKunci, el );
               return [ positions.row, positions.col ];
          } )
     );
     

     for ( let i = 0; i < x.length; i++ ) {
          if ( x[ i ][ 0 ][ 0 ] == x[ i ][ 1 ][ 0 ] ) {
               // Mengganti karakter kedua dengan karakter baru (contoh: menambah 1)
               const newCharacter1 =  (parseInt( x[ i ][ 0 ][ 1 ] ) + 1)%10 ;
               const newCharacter2 =  (parseInt( x[ i ][ 1 ][ 1 ] ) + 1)%10 ;
               x[ i ][ 0 ][ 1 ] = newCharacter1;
               x[ i ][ 1 ][ 1 ] = newCharacter2;

          }else if( x[ i ][ 0 ][ 1 ] == x[ i ][ 1 ][ 1 ] ){
               const newCharacter1 =  (parseInt( x[ i ][ 0 ][ 0 ] ) + 1)%10 ;
               const newCharacter2 =  (parseInt( x[ i ][ 1 ][ 0 ] ) + 1)%10 ;
               x[ i ][ 0 ][ 0 ] = newCharacter1;
               x[ i ][ 1 ][ 0 ] = newCharacter2;
               
          }else{
               const newCharacter1 =  (parseInt( x[ i ][ 1 ][ 1 ] )) ;
               const newCharacter2 =  (parseInt( x[ i ][ 0 ][ 1 ] )) ;
               x[ i ][ 0 ][ 1 ] = newCharacter1;
               x[ i ][ 1 ][ 1 ] = newCharacter2;

          }
     }
     const flatList = x.reduce( ( acc, curr ) => {
               return acc.concat( curr );
          }, [] );

          let hasil=[];
          for ( let i = 0; i < flatList.length; i++ ){

               hasil.push(matrixKunci[flatList[i][0]][flatList[i][1]])
          }
          const hasilJoin=hasil.join("");
          return {hasil, hasilJoin};
};

export function playFairDek(text){

     let textArray = text.match(/.{1,2}/g);
     if (textArray === null) {
     textArray = [];
     }

     let resultArrayList1 = textArray.map(e => Array.from(e));

     if (text.length % 2 == 0 && resultArrayList1.every(e => e[0] != e[1])) {
     return playFairD(text).hasilJoin; // Lakukan sesuatu dengan hasil pemanggilan ini
     }else{
          if (text.length%2!=0){
               return "Tidak bisa didekripsi, alasan: Jumlah input Ganjil"
               
          } else{
               return "Tidak bisa didekripsi, alasan: Terdapat pair yang sama"

          }
     }



}
       
function playFairD(text){
     const matrixKunci=keyPlayFair(kunci.value)
     let textArray = text.match(/.{1,2}/g);
     if(textArray===null){
          textArray=[];
     }     
     let textArray1 = textArray.map(e=>Array.from(e));
     let x = textArray1.map( e =>
          e.map( el => {
               const positions = findElementPosition( matrixKunci, el );
               return [ positions.row, positions.col ];
          } )
     );
     

     for ( let i = 0; i < x.length; i++ ) {
          if ( x[ i ][ 0 ][ 0 ] == x[ i ][ 1 ][ 0 ] ) {
               // Mengganti karakter kedua dengan karakter baru (contoh: menambah 1)
               const newCharacter1 =  parseInt((10+(( x[ i ][ 0 ][ 1 ] ) - 1)%10)%10) ;
               const newCharacter2 =  parseInt((10+(( x[ i ][ 1 ][ 1 ] ) - 1)%10)%10) ;
               x[ i ][ 0 ][ 1 ] = newCharacter1;
               x[ i ][ 1 ][ 1 ] = newCharacter2;
               
          }else if( x[ i ][ 0 ][ 1 ] == x[ i ][ 1 ][ 1 ] ){
               const newCharacter1 =  parseInt((10+(( x[ i ][ 0 ][ 0 ] ) - 1)%10)%10) ;
               const newCharacter2 =  parseInt((10+(( x[ i ][ 1 ][ 0 ] ) - 1)%10)%10) ;
               
               x[ i ][ 0 ][ 0 ] = newCharacter1;
               x[ i ][ 1 ][ 0 ] = newCharacter2;
               

          }else{
               const newCharacter1 =  (parseInt( x[ i ][ 1 ][ 1 ] )) ;
               const newCharacter2 =  (parseInt( x[ i ][ 0 ][ 1 ] )) ;
               x[ i ][ 0 ][ 1 ] = newCharacter1;
               x[ i ][ 1 ][ 1 ] = newCharacter2;

          }
     }
     const flatList = x.reduce( ( acc, curr ) => {
               return acc.concat( curr );
          }, [] );

          let hasil=[];
          for ( let i = 0; i < flatList.length; i++ ){

               hasil.push(matrixKunci[flatList[i][0]][flatList[i][1]])
          }
          const hasilJoin=hasil.filter(e=>e!="Δ").join("");
          
          return {hasil, hasilJoin};
};





// mencari fungsi
function findElementPosition( matrixKunci, targetValue ) {
          for ( let row = 0; row < matrixKunci.length; row++ ) {
               for ( let col = 0; col < matrixKunci[ row ].length; col++ ) {
                    if ( matrixKunci[ row ][ col ] === targetValue ) {
                         return { row, col };
                    }
               }
          }
          return null;
     }



// fungsi range




//------------------------------------------------- Membuat fungsi untuk mendapatkan index segitiga terjemahan (PSC)
const himpunanObjekSalin=[...himpunanObjek];
function range(start, end, step = 1) {
     const result = [];
     for (let i = start; i < end; i += step) {
          result.push(i);
     }
     return result;
}

const himpunanIndexPsc=himpunanObjek.map(e=>(findPscFromChar(himpunanObjekSalin,e).index));
export {himpunanIndexPsc}
const himpunanIndexPscEnkripsi=himpunanObjek.map(e=>(findPscFromCharWithKey(himpunanObjekSalin,e).index));
export {himpunanIndexPscEnkripsi}
const himpunanCharTerjemahan=himpunanObjek.map(e=>(findPscFromChar(himpunanObjekSalin,e).karakter));
// console.log(himpunanIndexPsc)
// console.log(himpunanIndexPscEnkripsi)

// console.log(himpunanCharTerjemahan)

// fugsi membuat array dengnan template segitiga
export function pyraminxFunction(himpunanObjekPyraminx){
     let pyraminx={
          atas:[],
          bawah:[]
     };

     let himpunanAtas=[];

     for (let k = 0; k < 10; k++) {
          let mula0=[];
          
          for (let index = 1; index <= 10; index++) {
               if(himpunanObjekPyraminx[k**2 + (index-1) * (index+2*k + 1)]!==undefined){
          
                    mula0.push(k**2 + (index-1) * (index+2*k + 1) )
               }
          }
          himpunanAtas.push(mula0)
     
     }
     let himpunanBawah=[];
     for (let k = 1; k < 10; k++) {
          let mula1=[];
          
          for (let index = 1; index <= 10; index++) {
               if(himpunanObjekPyraminx[k**2 +1 + (index-1) * (index+2*k + 1)]!==undefined){
          
                    mula1.push(k**2 + 1 + (index-1) * (index+2*k + 1) )
               }
          }
          himpunanBawah.push(mula1)          
     }

     const himpunanFullIndexObjekAtas = himpunanAtas.map(e => e.map(elemen => himpunanObjekPyraminx[elemen]));
     const himpunanFullIndexObjekBawah = himpunanBawah.map(e => e.map(elemen => himpunanObjekPyraminx[elemen]));

     pyraminx.atas=himpunanFullIndexObjekAtas;
     pyraminx.bawah=himpunanFullIndexObjekBawah;

     return pyraminx
}


export function findIndexPyraminx(himpunanObjek,indeksCari) {
     const objek=pyraminxFunction(himpunanObjek);
     for (const kunci in objek) {
          if (objek.hasOwnProperty(kunci)) {
               const daftarLuar = objek[kunci];
               for (let i = 0; i < daftarLuar.length; i++) {
                    const daftarDalam = daftarLuar[i];
                    for (let j = 0; j < daftarDalam.length; j++) {
                         if (daftarDalam[j] === indeksCari) {
                              return [kunci, i, j,indeksCari];
                         }
                    }
               }
          }
     }
    return null;
}

// import { concat } from "mathjs";
// console.log("aksjdjashdfkjhwoiehjsd",findIndexPyraminx(himpunanObjekSalin,"j"))
// console.log(himpunanObjekSalin.indexOf("s"))




// import { range } from "mathjs";
import { formatCodePyraminx } from "./format.js";

export function findPscFromChar(himpunan,karakter){
     const objekFind=findIndexPyraminx(himpunan,karakter);
     if (objekFind[0]=="atas"){
          return {index:objekFind[1].toString() + formatCodePyraminx(objekFind[2]) , karakter:karakter}      
     }else{
          return {index:formatCodePyraminx(objekFind[2])  + objekFind[1].toString(), karakter:karakter}      
     };
};

export function findPscFromCharWithKey(himpunan,karakter){
     const objekFind=findIndexPyraminx(himpunan,karakter);
     if (objekFind[0]=="atas"){
          return {index:objekFind[2].toString()+formatCodePyraminx(objekFind[1])  , karakter:karakter}      
     }else{
          return {index:formatCodePyraminx(objekFind[1]) + objekFind[2].toString(), karakter:karakter}      
     };
};

// console.log("ajshdjashdjhjassdjasdna",findPscFromChar(himpunanObjekSalin,"E").index)
// console.log(findPscFromCharWithKey(himpunanObjekSalin,"E").index)


export function findCharFromPsc(himpunan,psc){
     const x=himpunanIndexPsc.indexOf(psc);
     return himpunan[x]
}





// console.log(findPscFromChar(himpunanObjekSalin,"@").index);
// console.log(findCharFromPsc(himpunanCharTerjemahan,"0j"));

function findIndexArrayFromPsc(Psc){
     return himpunanObjekSalin.indexOf(findCharFromPsc(himpunanCharTerjemahan,Psc))

}

// console.log(findCharFromPsc("0a"))
// console.log(findIndexArrayFromPsc("0a"))





// function cariKunciDariNilai(objek, nilaiCari) {
//     return Object.keys(objek).find(kunci => objek[kunci] === nilaiCari) || null;
// }


// ------------------------------------------------fungsi terjemahan selesai-----------------------------------------------------


// -----------------------------------------------fungsi untuk segitiga terjemahan---------------------------------
function findMiring(keapa){
return himpunanIndexPsc.filter(e=>(e.includes(keapa)));

};
// console.log(findMiring("0"))


// -----------------------------------------------Fungsi untuk segitiga enkirpsi dan dekripsi---------------- 
function hapusListDariList(arrayUtama, arrayHapus) {
    return arrayUtama.filter(item => !arrayHapus.includes(item));
}


export function unikChar(char){
     const objek=Array.from(char);

     let mula=[];
     for (let x of objek) {
          if (!mula.includes(x)){
               mula.push(x);
          }          
     }
     return mula.join("");
}

const himpMiring=range(0,10).map(e=>findMiring(e))
// console.log("miring",himpMiring)
const allHimpMiring=[];




for (let i = 0; i < himpMiring.length; i++) {
     allHimpMiring.push(...himpMiring[i]);
}

const xallHimpMiring = allHimpMiring.map(e => findIndexArrayFromPsc(e));
// console.log("xall",xallHimpMiring)
const himpunanSecaraMiring=xallHimpMiring.map(e=>himpunanObjekSalin[e]);
// console.log("allmiring,",allHimpMiring)
// console.log("himpunansecara miring",himpunanSecaraMiring);

// console.log("himpunansecara miring",himpunanSecaraMiring)

export function keyPyraminx(key){
     const keyListPyraminx=Array.from(unikChar(key));

     // console.log("himpunanListKeyPyraminx",keyListPyraminx)
     let himpunanKeyPyraminx=hapusListDariList(himpunanObjekSalin,keyListPyraminx);
     // console.log("himpunanKeyPyraminx",himpunanKeyPyraminx)
     const hasil=[...keyListPyraminx,...himpunanKeyPyraminx]

     // let index=0;
     // for (let i of keyListPyraminx) {
          
     //      himpunanKeyPyraminx.splice(0,0,i) 
     //      index++;         
     // }
     return hasil

}

// console.log("keypyraminxksdnskd",keyPyraminx("rival"))
// console.log(concat([1,2],[1,3]))

export function reverseMiring(himpunan){




     const rev=himpunan.map(e=>xallHimpMiring[himpunan.indexOf(e)])
     let revo=[...rev]
     // console.log("revo",rev)
     for(let x of himpunan){

          revo[rev[himpunan.indexOf(x)]]=x
     }

     return revo

}
// console.log("reveser",reverseMiring(keyPyraminx("")))
// console.log("hehei",keyPyraminx(kunci.value));
// kunci.value="ajjssad"
// console.log(kunci.value)

export function pyraminx(text){

     let himpunanDenganKunci=reverseMiring(keyPyraminx(kunci.value));
     
     let hasil=[];// console.log(text)
     const listPscText=Array.from(text).map(elemen=>findPscFromChar(himpunanObjekSalin,elemen).index);
     // let ins=0;
     
     for(let x of listPscText){
          // console.log("aku",himpunanDenganKunci)
          hasil.push(findCharFromPsc(himpunanDenganKunci,himpunanIndexPscEnkripsi[himpunanIndexPsc.indexOf(x)]))
          const removedElements = himpunanDenganKunci.splice(-1);
          himpunanDenganKunci.unshift(...removedElements); // -3 berarti mengambil 3 elemen terakhir


     }
     // console.log(himpunanDenganKunci)
     // console.log("enk",listPscText)
     // const listPscEnkripsi=listPscText.map(elemen=>findCharFromPsc(himpunanDenganKunci,himpunanIndexPscEnkripsi[himpunanIndexPsc.indexOf(elemen)]))
     // console.log(listPscEnkripsi)
     
     return hasil.join("");
}

// function himpunanHorizontal(himpunan){
//      let x=[...himpunan];
//      let hasil=[];
//      for (let i = 0; i < 10; i+=1) {
//           // Daftar asli
// // const myList = [1, 2, 3, 4, 5, 6];

// // Mengambil dan menghapus 3 elemen pertama
// // const n = 3;
//           let removedElements = x.splice(0, (i+1)*2-1); 
//           hasil.push([...removedElements])




//      // console.log(removedElements); // Output: [1, 2, 3]
//      // console.log(myList); // Output: [4, 5, 6]

          
          
          
//      }
// return hasil
// }
// function pindahGeserHimpHorizontal(himpunan) {
//   // Mendapatkan himpunan horizontal
//   let himpunanDenganKunci = himpunanHorizontal(himpunan);
//   let Kosong=[];

//   // Memindahkan elemen terakhir menjadi elemen pertama pada setiap array dalam himpunan
//   let himpunanDenganKunci1 = himpunanDenganKunci.map(e => {
//     // Mengambil elemen terakhir
//     const lastElement = e.pop();

//     // Memasukkan elemen terakhir menjadi elemen pertama
//     e.unshift(lastElement);

//     return e; // Mengembalikan array yang telah dimodifikasi
//   });
//      // const nestedList = [[1], [1, 2]];

//      const flatList = [].concat(...himpunanDenganKunci1);

//       // Output: [1, 1, 2]


// //   console.log(himpunanDenganKunci1);
// return flatList;
// }

// pindahGeserHimpHorizontal();
// console.log(pindahGeserHimpHorizontal(himpunanObjekSalin))
// export function pyraminx(text){

//      let himpunanDenganKunci=reverseMiring(keyPyraminx(kunci.value));
     
//      let hasil=[];// console.log(text)
//      const listPscText=Array.from(text).map(elemen=>findPscFromChar(himpunanObjekSalin,elemen).index);
//      // let ins=0;
     
//      for(let x of listPscText){
//           // console.log("aku",himpunanDenganKunci)
//           hasil.push(findCharFromPsc(himpunanDenganKunci,himpunanIndexPscEnkripsi[himpunanIndexPsc.indexOf(x)]))
//           himpunanDenganKunci = pindahGeserHimpHorizontal(himpunanDenganKunci);

//           // const removedElements = himpunanDenganKunci.splice(-1);
//           // himpunanDenganKunci.unshift(...removedElements); // -3 berarti mengambil 3 elemen terakhir
          
          
//      }
//      // console.log(himpunanDenganKunci)
//      // console.log("enk",listPscText)
//      // const listPscEnkripsi=listPscText.map(elemen=>findCharFromPsc(himpunanDenganKunci,himpunanIndexPscEnkripsi[himpunanIndexPsc.indexOf(elemen)]))
//      // console.log(listPscEnkripsi)
     
//      return hasil.join("");
// }

// export function pyraminxDek(text){

//      let himpunanDenganKunci=reverseMiring(keyPyraminx(kunci.value));
//      // console.log(himpunanDenganKunci)
//      let hasil=[];
     
//      const listPscText=Array.from(text)
//      // console.log(listPscText).map(elemen=>findPscFromCharWithKey(himpunanDenganKunci,elemen).index);
//      for(let x of listPscText){
//           let y=findPscFromCharWithKey(himpunanDenganKunci,x).index
//           // console.log(y)
//           hasil.push(findCharFromPsc(himpunanObjekSalin,y))
//           himpunanDenganKunci = pindahGeserHimpHorizontal(himpunanDenganKunci);
//           // console.log(himpunanDenganKunci)
//           // const removedElements = himpunanDenganKunci.splice(-1);
//           // himpunanDenganKunci.unshift(...removedElements)

//      }

//      return hasil.join("");

// }
export function pyraminxDek(text){

     let himpunanDenganKunci=reverseMiring(keyPyraminx(kunci.value));
     // console.log(himpunanDenganKunci)
     let hasil=[];

     const listPscText=Array.from(text)
     // console.log(listPscText).map(elemen=>findPscFromCharWithKey(himpunanDenganKunci,elemen).index);
     for(let x of listPscText){
          let y=findPscFromCharWithKey(himpunanDenganKunci,x).index
          // console.log(y)
          hasil.push(findCharFromPsc(himpunanObjekSalin,y))
          // console.log(himpunanDenganKunci)
          const removedElements = himpunanDenganKunci.splice(-1);
          himpunanDenganKunci.unshift(...removedElements)

     }

     return hasil.join("");

}


// console.log(pyraminx("Rival fazi aku hilwa"))
// console.log(pyraminxDek("jj"))
// console.log(pyraminx("l"))
// let m=[]
// for (let aku of himpunanObjekSalin){

//      m.push(pyraminx(pyraminx(aku)))
// }

// console.log(hapusListDariList(himpunanObjekSalin,m))
// console.log("keypry",keyPyraminx(""))

// console.log(",log",(keyPyraminx("a")))


