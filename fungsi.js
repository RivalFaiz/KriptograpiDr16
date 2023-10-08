const kunci=document.querySelector(".k.enkripsi>input");
kunci.value=0;
const selectElement = document.getElementById("selectOption");
const mode=document.querySelector("#modeSwitch");

import * as enkdek from "./modul1.js";



function caraCopy(textToCopy){
     if(textToCopy!==""){

          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = textToCopy;
          document.body.appendChild(tempTextArea);
          
          // Memilih teks dalam textarea
          tempTextArea.select();
          tempTextArea.setSelectionRange(0, 9999999); // Untuk seleksi di berbagai browser
          
          // Menyalin teks ke clipboard
          document.execCommand("copy");
          
          // Menghapus elemen textarea sementara
          document.body.removeChild(tempTextArea);
          const popup = document.getElementById("popup");
          popup.innerHTML = "Teks telah disalin ke clipboard ";
          popup.style.display = "block";
          popup.style.backgroundColor="";
          setTimeout(function() {
               popup.style.display = "none";
          }, 1000);
     }else{
          const popup = document.getElementById("popup");
          popup.innerHTML = "Teks Kosong";
          popup.style.display = "block";
          popup.style.backgroundColor="red";
          setTimeout(function() {
               popup.style.display = "none";
          }, 1000);
     };     
};

const copyButtons = document.querySelectorAll("#copyButton");
function copyText() {
     copyButtons.forEach((copyButton,index)=>{
          copyButton.addEventListener("click",()=>{
               if (index===0){
                    const textToCopy = document.getElementById("tt").textContent;
                    caraCopy(textToCopy)
               }
               else{
                    const textToCopy1 = document.getElementById("ttd").textContent;
                    caraCopy(textToCopy1)
               };
          });
     });     
};





function saveSelectedOption() {
     const selectedOption = selectElement.value;
     localStorage.setItem('selectedOption', selectedOption);
}

// Fungsi untuk mendapatkan selected option dari local storage (jika ada)
function loadSelectedOption() {
     const selectedOption = localStorage.getItem('selectedOption');
     if (selectedOption) {
          selectElement.value = selectedOption;
          
     }
}


function switchKunci(){     
     const selectedOption=localStorage.getItem("selectedOption")

     
     switch (selectedOption) {
          case "1":
               kunci.type = "number";
               break;
          case "2":
               kunci.type = "text";
               break;
          case "3":
               kunci.type = "text";
               break;
          case "4":
               kunci.type = "text";
               break;
          default:
               break;
     };

     
};






import { keyPlayFair } from "./modul1.js";


const form=document.querySelectorAll("form");

function createEmptyMatrix() {
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
}

function fillMatrix() {
     const matrixData = keyPlayFair(kunci.value); 
     // console.log(matrixData)
     const table = document.getElementById("matrixTable");
     const cells = table.getElementsByTagName("td");

     for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = matrixData[Math.floor(i / 10)][i % 10];
     }
}

let cekSelectElement=function(){
     // console.log(localStorage.getItem("selectedOption"))
     createEmptyMatrix()
     fillMatrix()
     console.log("aku")

}

// console.log(localStorage.getItem("selectedOption"))
// selectElement.addEventListener("change",()=>{console.log(localStorage.getItem("selectedOption"))})

// // fillMatrix()
cekSelectElement()

selectElement.addEventListener("change",()=>{
     if(selectElement.value==3){
          // createEmptyMatrix()
          // fillMatrix()
          // cekSelectElement()
          console.log("akuhj")


     }
})



kunci.addEventListener("input", fillMatrix);





// fillMatrix()










form.forEach(e=>{
     e.firstElementChild.firstElementChild.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
               event.preventDefault(); // Mencegah "Enter" mengirimkan formulir (jika ada)
          }
     });
})



function firstRealTime(){

     form.forEach((e,index)=>{
          const textArea=e.firstElementChild.firstElementChild;
          const outputInput=e.parentElement.nextElementSibling.lastElementChild;
          const outputHasil=outputInput.parentElement.nextElementSibling.lastElementChild; 
          
          
     
          function updateHasilOutput() {

               
               function enkripsi(){
                    e.addEventListener("submit", (ele)=>{
                         ele.preventDefault();
                         updateHasilOutput();
                         }     
                    );  
                    const selectedOption=localStorage.getItem("selectedOption")

                    if (selectedOption==1){
                         outputHasil.textContent =enkdek.caesar(textArea.value);
                  
                    }else if(selectedOption==2){
                         outputHasil.textContent=enkdek.vigenere(textArea.value)
                    }
                    else if(selectedOption==3){
                         const myArray = textArea.value;
                         if(myArray!==null){
                              outputHasil.textContent=enkdek.playFair(textArea.value).hasilJoin
                              
                         }



                    }
                    else if(selectedOption==4){
                         const myArray = textArea.value;
                         if(myArray!==null){
                              outputHasil.textContent=enkdek.pyraminx(textArea.value)
                              
                         }



                    }
               }
               function dekripsi(){
                    const selectedOption=localStorage.getItem("selectedOption");
                    e.addEventListener("submit", (ele)=>{
                         ele.preventDefault();
                         updateHasilOutput();
                         }     
                    ); 
                    

                    if (selectedOption==1){
                         outputHasil.textContent =enkdek.caesarDek(textArea.value);
                   
                    }
                    else if(selectedOption==2){
                         outputHasil.textContent=enkdek.vigenereDek(textArea.value)
                    }
                    else if(selectedOption==3){
                         if (textArea.value!=null){

                              outputHasil.textContent=enkdek.playFairDek(textArea.value)
                         }
                         

                    }
                    else if(selectedOption==4){
                         if (textArea.value!=null){

                              outputHasil.textContent=enkdek.pyraminxDek(textArea.value)
                         }
                         

                    }
               }


               if(index===0){
                    enkripsi()
                    kunci.addEventListener("input",enkripsi)
                    selectElement.addEventListener("change",enkripsi)
                    updateOutput1(); 
                    
               }else{
                    dekripsi()
                    kunci.addEventListener("input",dekripsi)
                    selectElement.addEventListener("change",dekripsi)
                    updateOutput1();     

               }
          };

          function updateOutput1() {
               outputInput.textContent =textArea.value ;
               kunci.addEventListener("change",()=>{
                    outputInput.textContent =textArea.value ;
               })          
          }

          
          
          mode.addEventListener("change", function() {
               if (mode.checked) {                    
                    textArea.addEventListener("input", updateHasilOutput);                  
               } else {          
                    textArea.removeEventListener("input", updateHasilOutput);                    
                    textArea.textContent = textArea.value;
                    e.addEventListener("submit", (ely)=>{
                         ely.preventDefault();
                         updateHasilOutput();
                         }     
                    );
               }
          });
          if (mode.checked) {
               textArea.addEventListener("input", updateHasilOutput);
     
          }


     })

};




import { formatTextArea } from "./format.js";
// import { forEach } from "mathjs";

function hapus(){
     form.forEach(fo=>{

          const textArea=fo.firstElementChild.firstElementChild;
          const outputInput=fo.parentElement.nextElementSibling.lastElementChild;
          const outputHasil=outputInput.parentElement.nextElementSibling.lastElementChild;          
          function formatHapus(){
               textArea.nextElementSibling.firstElementChild.style.display="flex";               
          }
          textArea.addEventListener("input",()=>{

               if (textArea.value!=""){
                    formatHapus()
               }else{
                    textArea.nextElementSibling.firstElementChild.style.display="none";               
                    
               };
          });
          // textArea.nextElementSibling.addEventListener("click",()=>{
               // const outputInput=fo.parentElement.nextElementSibling.lastElementChild;
          textArea.value="";
          outputInput.textContent="";
          textArea.nextElementSibling.firstElementChild.style.display="none";               
          outputHasil.textContent="";
          berapa.textContent=0;


          fillPscEnkripsiBytext()
          // berapa.textContent=0;



          // })
          
     });
};
const hapusDelete=document.querySelectorAll(".hapus");
hapusDelete.forEach(e=>{
     e.addEventListener("click",hapus);
     formatTextArea()
});


const textareaenk=document.querySelector("textarea");
const berapa=document.querySelector(".berapa");
let hasil=[];
const left=document.querySelector('.left');
const right=document.querySelector('.right');

// console.log()
let segitigaKe=0;
textareaenk.addEventListener("input", function () {
     segitigaKe=berapa.textContent;
     
     hasil = himpunanSegitiga();
     // Lakukan sesuatu dengan hasil (misalnya, cetak atau manipulasi data)
     
});
console.log(hasil)

hapusDelete[0].addEventListener("click",function(){hasil=[]
segitigaKe=0})


// textareaenk.addEventListener("input",()=>{console.log(textareaenk.value.length)})

const boxes=document.querySelectorAll(".atas .box");
const boxes1=document.querySelectorAll(".bawah .box");



// function himpunanByKey(){

// let himpunan=enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value));
kunci.addEventListener("input",()=>{
     himpunan=enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value));
     // console.log("himpunan",himpunan);
});


// }


export function fillPscEnkripsi(himpunan){
     // const himpunan=enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value));

     const unik=Array.from(enkdek.unikChar(kunci.value));
     // const n=document.querySelector("textarea").value.length;


     boxes.forEach((box,index)=>{
          box.textContent=himpunan[index];
          if(unik.includes(box.textContent)){
               box.style.color="red";
          }else{
               box.style.color="white";
          }
     });

}


function fillPscEnkripsi1(himpunan){
     // const himpunan=enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value));

     const unik=Array.from(enkdek.unikChar(kunci.value));
     // const n=document.querySelector("textarea").value.length;


     boxes1.forEach((box,index)=>{
          box.textContent=himpunan[index];

     });

}

fillPscEnkripsi1(enkdek.himpunanObjek)



fillPscEnkripsi(enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value)))
// console.log(enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value)))




kunci.addEventListener("input",()=>{
     fillPscEnkripsi(enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value)));
});


// textareaenk.addEventListener("input",fillPscEnkripsi)
// console.log(textareaenk.value)

function pyraminxSegitiga(){
     berapa.textContent=textareaenk.value.length;
     // console.log(berapa)
}
pyraminxSegitiga()
textareaenk.addEventListener("input",pyraminxSegitiga)

// textareaenk.addEventListener("input",()=>{console.log(textareaenk.value.length)})

function himpunanSegitiga() {
     let himpunanDenganKunci = enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value));
     let hasil = [[...himpunanDenganKunci]];
     // console.log(hasil)
     const listPscText = Array.from(textareaenk.value).map(elemen => enkdek.findPscFromChar(enkdek.himpunanObjek, elemen).index);

     for (let x = 0; x < listPscText.length; x++) {
     const removedElements = himpunanDenganKunci.splice(-1);
     himpunanDenganKunci.unshift(...removedElements);
     hasil.push([...himpunanDenganKunci]);
     }

     return hasil;
}



left.addEventListener("click",()=>{
     // console.log(segitigaKe)
     // console.log(segitigaKe)
     
     if(segitigaKe!==0){
          segitigaKe=Number(segitigaKe)-1
          berapa.textContent=segitigaKe
     }
     // console.log(hasil)
     if(hasil.length!==0){

          fillPscEnkripsi(hasil[segitigaKe])
     }

     // console.log(hasil[])

});

right.addEventListener("click",()=>{
     // console.log(segitigaKe)
     // console.log(segitigaKe)
     
     if(segitigaKe!=textareaenk.value.length){
          segitigaKe=Number(segitigaKe)+1
          berapa.textContent=segitigaKe
     }
     // console.log(hasil)
     if(hasil.length!=textareaenk.value.length){

          fillPscEnkripsi(hasil[segitigaKe])
     }

     // console.log(hasil[])

})





export function fillPscEnkripsiBytext(){

     const himpunan=enkdek.reverseMiring(enkdek.keyPyraminx(kunci.value));

     const unik=Array.from(enkdek.unikChar(kunci.value));
     const n=document.querySelector("textarea").value.length;
     
     
     
     // Langkah 1: Tentukan array
     // var myArray = [1, 2, 3, 4, 5];

     // Langkah 2: Hapus dua elemen terakhir
     let lastnElements = himpunan.splice(himpunan.length - n, n);

     // Langkah 3: Tambahkan elemen-elemen tersebut ke bagian depan array
     himpunan.unshift(...lastnElements);


     boxes.forEach((box,index)=>{
          box.textContent=himpunan[index];
          if(unik.includes(box.textContent)){
               box.style.color="red";
          }else{
               box.style.color="white";
          }
     });

}

// const hasilPscText=document.querySelector(".pscText");
// const hasilSpan=document.querySelector(".hasilSpan");
const hasilPscButton=document.querySelectorAll(".pscButton");
// console.log(hasilPscButton)
const inputPscG=document.querySelectorAll(".pscInput");
// const pscHasil=document.querySelectorAll(".psc");
// console.log(inputPscG)
// console.log(pscHasil)
// pscHasil.forEach(e=>{


// })




function fillHasilPsc1(x){
     // const x=document.querySelectorAll(".pscInput");
     

     let pscText=x.parentElement.nextElementSibling.firstElementChild
          if(x.value.length==1){
     
               // hasilPsc.textContent=inputPsc;
               pscText.textContent="PSC  :";
               if(enkdek.himpunanObjek.includes(x.value)){
     
     
                    pscText.nextElementSibling.textContent=enkdek.findPscFromChar(enkdek.himpunanObjek,x.value).index
               }else{
                    pscText.nextElementSibling.textContent="🙅";
                    
               }
          }else{
               pscText.textContent="Char :";
               
               if(enkdek.himpunanIndexPsc.includes(x.value)){
                    if((enkdek.findCharFromPsc(enkdek.himpunanObjek,x.value))==" "){
                         pscText.nextElementSibling.textContent="(Space)"
                    }else{
     
                         pscText.nextElementSibling.textContent=enkdek.findCharFromPsc(enkdek.himpunanObjek,x.value)
                    }
                    
                    
                    
               }else{
                    pscText.nextElementSibling.textContent="🙅";
     
               }
     
     
          
     }
     
}


inputPscG.forEach(e=>{
     
     e.addEventListener('keyup', function (event) {
          if (event.key === 'Enter') {
               // Memicu klik pada tombol
               e.nextElementSibling.click();
          }
     });
})


hasilPscButton.forEach(e=>{
     e.addEventListener("click",()=>{
          fillHasilPsc1(e.previousElementSibling)

     })
})

inputPscG[1].addEventListener("change",()=>{

     if(inputPscG[1].value.length==1){
          
     }
})


fillPscEnkripsiBytext()
textareaenk.addEventListener("input",fillPscEnkripsiBytext)


function pscPenjelasan(){

}
// const boxes = document.querySelectorAll(".box");
const inp=document.querySelector(".bawahHasilPscInp");

boxes1.forEach((box) => {
     box.addEventListener("click", () => {
          // Setel semua kotak kembali menjadi warna default (misalnya, hitam)
          inp.firstElementChild.value=box.textContent;
          inp.lastElementChild.click();
          // console.log(inp)
          
          boxes1.forEach((otherBox) => {
               otherBox.style.color = "white";
          });

          // Atur kotak yang diklik menjadi merah
          box.style.color = "red";
     });
});

selectElement.addEventListener("change",fillPscEnkripsiBytext)

export {copyText, firstRealTime, hapus, switchKunci,loadSelectedOption, saveSelectedOption}




