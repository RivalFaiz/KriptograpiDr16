
// import { isIndex } from "mathjs";
import { keyPlayFair, unikChar } from "./modul1.js";
import * as modul from "./modul1.js" 


export function createEmptyMatrix() {
     const table = document.getElementById("matrixTable");

          for (let i = 0; i < 10; i++) {
               const row = document.createElement("tr");

               for (let j = 0; j < 10; j++) {
                    const cell = document.createElement("td");
                    cell.textContent = ""; 
                    row.appendChild(cell);
               }

               table.appendChild(row);
     }
};



export function fillMatrix() {
     const matrixData = keyPlayFair(kunci.value); 
     const arrayTable=unikChar(kunci.value);

     // console.log(matrixData)
     const table = document.getElementById("matrixTable");
     const cells = table.getElementsByTagName("td");
     const cellsTable = table.querySelectorAll("td");

     for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = matrixData[Math.floor(i / 10)][i % 10];
     }
     cellsTable.forEach(td=>{
          const content = td.textContent;
          td.style.color = ''; // Terapkan warna merah
          if (arrayTable.includes(content)) {
               td.style.color = 'red'; // Terapkan warna merah
          }

     })

}

export function membuatSegitiga(){

     const container = document.createElement( 'div' );
     container.classList.add( 'container-fluid','col-md', 'atas' );
     const numElements = 20; 

     for ( let i = 0; i < numElements; i=i+2 ) {
          const bungkus = document.createElement( 'div' );
          bungkus.classList.add( 'bungkus' );

          const indexa = document.createElement( 'div' );
          indexa.classList.add( 'indexa','box' );
          indexa.textContent = String.fromCharCode( 106 - i/2 ); // Menambahkan karakter a-z
          bungkus.appendChild( indexa );

          for ( let j = 0; j < i + 1; j++ ) {
               const box = document.createElement( 'div' );
               box.classList.add( 'box' );
               // Anda dapat menambahkan teks ke dalam elemen kotak ini jika Anda butuhkan
               bungkus.appendChild( box );
          }

          const index = document.createElement( 'div' );
          index.classList.add( 'index','box' );
          index.textContent = i/2;
          bungkus.appendChild( index );

          container.appendChild( bungkus );
     }

     // Menambahkan elemen container ke dalam dokumen
     document.body.appendChild( container );
}

export function fillPscEnkripsi(himpunan){
     const unik=Array.from(unikChar(kunci.value));
     const boxes1 = document.querySelectorAll('.svg .box:not([class*=" "])');
     boxes1.forEach((box,index)=>{
          box.textContent=himpunan[index];
          if(unik.includes(box.textContent)){
               box.style.color="lightgreen";
          }else{
               box.style.color="white";
          }
     });
};

export function fillPscEnkripsiPsc(){


     // const unik=Array.from(unikChar(kunci.value));
     const boxes1 = document.querySelectorAll('.svgBawah .box:not([class*=" "])');
     const index = document.querySelectorAll('.svgBawah .index');
     const indexa = document.querySelectorAll('.svgBawah .indexa');
     // index.style.color="red";
     // console.log(inde)
     for (let i = 0; i < index.length; i++) {
          const temp = index[i].textContent;
          // temp.style.color="red";
          index[i].textContent = indexa[i].textContent;
          indexa[i].textContent = temp;
     }
     // const indexa=docu
     // console.log(index)
     boxes1.forEach((box,index)=>{
          box.textContent=modul.himpunanObjek[index];

          // console.log(modul.himpunanObjek[index])
     });
     
};

export function fillPscEnkripsiBytext(){

     const himpunan=modul.reverseMiring(modul.keyPyraminx(kunci.value));

     const unik=Array.from(modul.unikChar(kunci.value));
     const n=document.querySelector("textarea").value.length;
     
     
     
     // Langkah 1: Tentukan array
     // var myArray = [1, 2, 3, 4, 5];

     // Langkah 2: Hapus dua elemen terakhir
     let lastnElements = himpunan.splice(himpunan.length - n, n);
     const boxes = document.querySelectorAll('.svg .box:not([class*=" "])');

     // Langkah 3: Tambahkan elemen-elemen tersebut ke bagian depan array
     himpunan.unshift(...lastnElements);


     boxes.forEach((box,index)=>{
          box.textContent=himpunan[index];
          if(unik.includes(box.textContent)){
               box.style.color="lightgreen";
          }else{
               box.style.color="white";
          }
     });

}


export function himpunanSegitiga() {
     const textareaenk=document.querySelector("textarea");
     
     let himpunanDenganKunci = modul.reverseMiring(modul.keyPyraminx(kunci.value));
     let hasil = [[...himpunanDenganKunci]];
     // let hasil = [];
     // console.log(hasil)
     const listPscText = Array.from(textareaenk.value).map(elemen => modul.findPscFromChar(modul.himpunanObjek, elemen).index);
     
     for (let x = 0; x < listPscText.length; x++) {
          const removedElements = himpunanDenganKunci.splice(-1);
          himpunanDenganKunci.unshift(...removedElements);
          hasil.push([...himpunanDenganKunci]);
     }
     
     return hasil;
}

export function keyHimpunanSegitiga(himpunanHasil){
          
     let himpunanDenganKunci = modul.reverseMiring(modul.keyPyraminx(kunci.value));
     // let hasil = [[...himpunanDenganKunci]];

     for (let x = 0; x < himpunanHasil.length; x++) {
          const removedElements = himpunanDenganKunci.splice(-1);
          himpunanDenganKunci.unshift(...removedElements);
          hasil.push([...himpunanDenganKunci]);
     }
     return 



}

export function pyraminxSegitiga(){
     const textareaenk=document.querySelector("textarea");
     const berapa=document.querySelector(".berapa span");
     berapa.textContent=textareaenk.value.length;
     // console.log("berapa",berapa)
}

// fungsi PSC
export function fillHasilPsc1(x){
     // const x=document.querySelectorAll(".pscInput");
     let pscText=x.parentElement.nextElementSibling.firstElementChild
          if(x.value.length==1){
     
               // hasilPsc.textContent=inputPsc;
               pscText.textContent="PSC  :";
               if(modul.himpunanObjek.includes(x.value)){
     
     
                    pscText.nextElementSibling.textContent=modul.findPscFromChar(modul.himpunanObjek,x.value).index
               }else{
                    pscText.nextElementSibling.textContent="Input salah!";
                    
               }
          }else{
               if(x.value.length!=0){

                    pscText.textContent="Char :";
                    
                    if(modul.himpunanIndexPsc.includes(x.value)){
                         if((modul.findCharFromPsc(modul.himpunanObjek,x.value))==" "){
                              pscText.nextElementSibling.textContent="(Space)"
                         }else{
          
                              pscText.nextElementSibling.textContent=modul.findCharFromPsc(modul.himpunanObjek,x.value)
                         }
                         
                         
                         
                    }else{
                         pscText.nextElementSibling.textContent="Input salah!";
                         
                    }
               }
               else{
                    pscText.nextElementSibling.textContent="";

               }
     
     
          
     }
     
}

export function fillHasilPscEnkripsi(x,himpunan){
     // const x=document.querySelectorAll(".pscInput");
     let pscText=x.parentElement.nextElementSibling.firstElementChild
          if(x.value.length==1){
     
               // hasilPsc.textContent=inputPsc;
               pscText.textContent="Index  :";
               if(himpunan.includes(x.value)){
     
     
                    pscText.nextElementSibling.textContent=modul.findPscFromCharWithKey(himpunan,x.value).index;
               }else{
                    pscText.nextElementSibling.textContent="Input salah!";
                    
               }
          }else{
               if (x.value.length!=0){

                    pscText.textContent="Char :";
                    
                    if(modul.himpunanIndexPsc.includes(x.value)){
                         if((modul.findCharFromPsc(himpunan,x.value))==" "){
                              pscText.nextElementSibling.textContent="(Space)";
                         }else{
                              pscText.nextElementSibling.textContent=modul.findCharFromPsc(himpunan,modul.himpunanIndexPscEnkripsi[modul.himpunanIndexPsc.indexOf(x.value)])
                         }
                         
                         
                         
                    }else{
                         pscText.nextElementSibling.textContent="Input salah!";
          
                    }
               }
               else{
                    pscText.nextElementSibling.textContent="";

               }
     
     
          
     }
     
}


// warna pada input PSC
export function warnaPsc(input,hasil){
     // const listKarakter=Array.from(karakter);
     if (hasil!="Input salah!"){     
               const boxes = document.querySelectorAll('.svgBawah .box:not([class*=" "])');
               const indexsPsc1=document.querySelectorAll(".svgBawah .index");
               const indexsPsc2=document.querySelectorAll(".svgBawah .indexa");
               const combinedArray = [...indexsPsc1, ...indexsPsc2];
               if(input.length==1){
                    boxes.forEach((e,index)=>{
                    e.style.backgroundColor="";
                    e.style.color="black";
                    if(e.textContent==input){
                         boxes[index].style.backgroundColor="red";
                         boxes[index].style.color="white";
          
                    }
               });
               combinedArray.forEach((e,index)=>{
                    e.style.color="#7480d8";
                    e.style.fontWeight="";
                    if(e.textContent==hasil[0]){
                         combinedArray[index].style.color="green";
                         combinedArray[index].style.fontWeight="bold";
                    }else if(e.textContent==hasil[1]){
                         combinedArray[index].style.color="red";
                         combinedArray[index].style.fontWeight="bold";
          
                    }
               });
          
               }else{
                    boxes.forEach((e,index)=>{
                    e.style.backgroundColor="";
                    e.style.color="black";
                    if(e.textContent==hasil){
                         boxes[index].style.backgroundColor="red";
                         boxes[index].style.color="white";
          
                    }
               });
               combinedArray.forEach((e,index)=>{
                    e.style.color="#7480d8";
                    e.style.fontWeight="";
                    if(e.textContent==input[0]){
                         combinedArray[index].style.color="green";
                         combinedArray[index].style.fontWeight="bold";
                    }else if(e.textContent==input[1]){
                         combinedArray[index].style.color="red";
                         combinedArray[index].style.fontWeight="bold";
          
                    }
               });
          
               }
     }

}

export function warnaPscEnkripsi(input,hasil){
     // const listKarakter=Array.from(karakter);
     // console.log(hasil)


     if(hasil!="Input salah!"){

          const boxes = document.querySelectorAll('.svgAtas .box:not([class*=" "])');

          const indexsPsc1=document.querySelectorAll(".svgAtas .index");
          const indexsPsc2=document.querySelectorAll(".svgAtas .indexa");
          const combinedArray = [...indexsPsc1, ...indexsPsc2];
          const kunci=document.querySelector("#kunci");
          const arrKunci=Array.from(modul.unikChar(kunci.value));


          const filteredBoxes = Array.from(boxes).map(box => {
               const boxText = box.textContent.trim();
               if (arrKunci.some(valueToKeep => boxText.includes(valueToKeep))) {
                    return undefined;
               }
               return box;
          });


          // console.log(filteredBoxes)







;
          // const arrWithoutKunci=modul.hapusListDariList()
          
          if(input.length==1){
               filteredBoxes.forEach((e,index)=>{
                    if(e!=undefined){

                         
                         // console.log(e.textContent)          
                         e.style.color="white";
                    }else{
                         boxes[index].style.color="lightgreen";
                    }
                    
                    // e.style.color="white";
                    
               });
               boxes.forEach((e,index)=>{
                    e.style.backgroundColor="";


                    if(e.textContent==input){
                         boxes[index].style.backgroundColor="red";
                         boxes[index].style.color="white";
          
                    }
               })
          combinedArray.forEach((e,index)=>{
               e.style.color="#d3f07e";
               e.style.fontWeight="";
               if(e.textContent==hasil[0]){
                    combinedArray[index].style.color="green";
                    combinedArray[index].style.fontWeight="bold";
               }else if(e.textContent==hasil[1]){
                    combinedArray[index].style.color="red";
                    combinedArray[index].style.fontWeight="bold";
     
               }
          });
     
          }else{

               filteredBoxes.forEach((e,index)=>{
                    if(e!=undefined){

                         
                         // console.log(e.textContent)          
                         e.style.color="white";
                    }else{
                         boxes[index].style.color="lightgreen";
                    }
                    
                    // e.style.color="white";
                    
               });
               boxes.forEach((e,index)=>{
                    e.style.backgroundColor="";


                    if(e.textContent==hasil){
                         boxes[index].style.backgroundColor="red";
                         boxes[index].style.color="white";
          
                    }
               });
               // filteredBoxes.forEach((e,index)=>{
               // e.style.backgroundColor="";
               // e.style.color="white";
               // if(e.textContent==hasil){
               //      filteredBoxes[index].style.backgroundColor="red";
               //      filteredBoxes[index].style.color="white";
     
               // }
          // });
          combinedArray.forEach((e,index)=>{
               e.style.color="#d3f07e";
               e.style.fontWeight="";
               if(e.textContent==input[0]){
                    combinedArray[index].style.color="green";
                    combinedArray[index].style.fontWeight="bold";
               }else if(e.textContent==input[1]){
                    combinedArray[index].style.color="red";
                    combinedArray[index].style.fontWeight="bold";
     
               }
          });
     
          }
     
     
          
     }

}

// export function clearWarnaEnkripsi(){
//      const boxes = document.querySelectorAll('.svgAtas .box:not([class*=" "])');
//      const kunci=document.querySelector("#kunci");
//      const arrKunci=Array.from(kunci);
     
//      const indexsPsc1=document.querySelectorAll(".svgAtas .index");
//      const indexsPsc2=document.querySelectorAll(".svgAtas .indexa");
//      const combinedArray = [...indexsPsc1, ...indexsPsc2];
//      boxes.forEach((e)=>{
//           e.style.backgroundColor="";
//           e.style.color="white";
          

// });
//      combinedArray.forEach((e)=>{
//           e.style.color="#d3f07e";
//           e.style.fontWeight="";

//      });

// }




// modul.reverseMiring(modul.keyPyraminx(kunci.value));
// console.log(fillHasilPsc1("a"))

// console.log(['a','b'].includes(['a','b']))