import * as format from './formatku.js';
import * as fungsi from './fungsiku.js';
import * as modul from './modul1.js';
import * as animate from './fungsiAnimateKripto.js';


// const textareaHTMLCollection=document.getElementsByTagName("textarea");
const textarea=document.querySelectorAll("textarea");
const mode=document.getElementById("modeSwitch");

textarea.forEach(element => {
     element.addEventListener('input', format.autoResizeTextarea);
});

mode.addEventListener("change",format.changeMode)


// copy text

const copyButtons = document.querySelectorAll(".copyButton");
copyButtons.forEach((copyButton,index)=>{


     copyButton.addEventListener("click",()=>{
          if (selectElement.value!=5){

               const textToCopy = copyButton.parentElement.nextElementSibling.textContent;     
               fungsi.caraCopy(textToCopy)          
          }else{
               
               if(index==0){
                    
                    fungsi.copyRGBValues()        
               }else{
                    const textToCopy = copyButton.parentElement.nextElementSibling.textContent;     
                    fungsi.caraCopy(textToCopy)          

               }

          }
     });
     
});       


// save selecele,ent

const selectElement=document.getElementById("selectOption")
selectElement.addEventListener("change",fungsi.saveSelectedOption)
fungsi.loadSelectedOption()

// swicth kunci
fungsi.switchKunci()
selectElement.addEventListener("change",fungsi.switchKunci)

// mencegah enter
const form=document.querySelectorAll("textarea");
form.forEach(e=>{
     e.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
               event.preventDefault(); // Mencegah "Enter" mengirimkan formulir (jika ada)
          }
     });
});




// realtime
fungsi.firstRealTime();
mode.addEventListener("change",fungsi.firstRealTime)


// matriks
let cekSelectElement=function(){
     animate.createEmptyMatrix()
     animate.fillMatrix()
     // console.log("aku")
};
cekSelectElement()
// console.log(document.querySelectorAll("td").textContent)

kunci.addEventListener("input", animate.fillMatrix);


// psc
// animate.membuatSegitiga();
animate.membuatSegitiga();
// animate.membuatSegitigaPsc();
// animate.membuatSegitiga();

// Panggil fungsi membuatSegitiga untuk membuat segitiga
// Panggil fungsi membuatSegitiga untuk membuat segitiga
// animate.membuatSegitiga();

// Dapatkan referensi ke elemen dengan class "svg"
const targetElement = document.querySelector('.svg');
const targetElement2 = document.querySelector('.svgBawah');

// Dapatkan container yang dibuat oleh fungsi
const container = document.querySelector('.atas');
// const container1 = document.querySelector('.atas');

// Sisipkan container ke dalam elemen target
targetElement.appendChild(container);
// console.log(targetElement2)
targetElement2.appendChild(container.cloneNode(true));


animate.fillPscEnkripsi(modul.reverseMiring(modul.keyPyraminx(kunci.value)));

animate.fillPscEnkripsiPsc();
// console.log(modul.himpunanObjek)





// animate.membuatSegitiga();






kunci.addEventListener("input",()=>{
     // animate.clearWarnaEnkripsi();
     animate.fillPscEnkripsi(modul.reverseMiring(modul.keyPyraminx(kunci.value)));
     if (pscAtasButton.parentElement.nextElementSibling.lastElementChild.textContent!=""){
          pscAtasButton.click();
     }
});
const textareaenk =document.querySelector("textarea");
animate.fillPscEnkripsiBytext();
textareaenk.addEventListener("input",animate.fillPscEnkripsiBytext)

let himpunanDenganKunci = modul.reverseMiring(modul.keyPyraminx(kunci.value));
let hasil = [[...himpunanDenganKunci]];
const berapa=document.querySelector(".berapa span");

kunci.addEventListener("input",()=>{
     himpunanDenganKunci=modul.reverseMiring(modul.keyPyraminx(kunci.value));
     hasil=animate.himpunanSegitiga();

     // console.log(hasil)
     berapa.textContent=0;
})

let segitigaKe=0;
textareaenk.addEventListener("input", function () {
     segitigaKe=textareaenk.value.length;
     hasil = animate.himpunanSegitiga();
     pscAtasButton.previousElementSibling.value="";
     pscAtasButton.click();
     


});
// let hasil=[];
// berapa
const pscBawahButton=document.querySelector(".pscBawah button")
const pscAtasButton=document.querySelector(".pscButton");



textareaenk.addEventListener("input",animate.pyraminxSegitiga)

// console.log(hasil)

const left=document.querySelector('.left');
const right=document.querySelector('.right');

animate.pyraminxSegitiga(),




left.addEventListener("click",()=>{

     
     // console.log("sebelum dikurani",segitigaKe)
     if(berapa.textContent!=0){
          if(segitigaKe!=0){

               berapa.textContent=Number(berapa.textContent)- Number(1) ;
               // console.log("setelah dikurani",segitigaKe)
     
               // berapa.textContent=Number(segitigaKe) 
          }
          // animate.fillHasilPsc1(pscBawahButton.previousElementSibling)
          // animate.warnaPsc(pscBawahButton.previousElementSibling.value,pscBawahButton.parentElement.nextElementSibling.lastElementChild.textContent)
     }
     // console.log(hasil)
     animate.fillPscEnkripsi(hasil[berapa.textContent])
     pscAtasButton.click()
     // if(hasil.length!==0){
     //      animate.fillHasilPscEnkripsi(pscAtasButton.previousElementSibling,hasil[berapa.textContent])          
     // }

     // console.log(hasil[])

});

right.addEventListener("click",()=>{
     

     if(berapa.textContent!=segitigaKe){

          berapa.textContent=Number(berapa.textContent)+Number(1);
     }

     animate.fillPscEnkripsi(hasil[berapa.textContent])
     // animate.fillHasilPscEnkripsi(pscAtasButton.previousElementSibling,hasil[berapa.textContent])
     // animate.warnaPscEnkripsi()
     pscAtasButton.click()

})

// hasilpsc

// console.log(pscAtasButton)

pscBawahButton.addEventListener("click",()=>{
     animate.fillHasilPsc1(pscBawahButton.previousElementSibling)
     animate.warnaPsc(pscBawahButton.previousElementSibling.value,pscBawahButton.parentElement.nextElementSibling.lastElementChild.textContent)
});

const inputPscG=document.querySelectorAll(".pscInput");
inputPscG.forEach(e=>{
     
     e.addEventListener('keyup', function (event) {
          if (event.key === 'Enter') {
               // Memicu klik pada tombol
               e.nextElementSibling.click();
          }
     });
});

pscAtasButton.addEventListener("click",()=>{

     animate.fillHasilPscEnkripsi(pscAtasButton.previousElementSibling,hasil[berapa.textContent])
     animate.warnaPscEnkripsi(pscAtasButton.previousElementSibling.value,pscAtasButton.parentElement.nextElementSibling.lastElementChild.textContent)
     // console.log(pscAtasButton.previousElementSibling.value)
     // animate.warnaPscEnkripsi(pscAtasButton.previousElementSibling.value ,pscAtasButton.parentElement.nextElementSibling.lastElementChild.textContent)
})


fungsi.tampil()
selectElement.addEventListener("change",fungsi.tampil);

textarea.forEach(e=>{
     
     e.addEventListener('keyup', function (event) {
          if (event.key === 'Enter') {
               // Memicu klik pada tombol
               e.parentElement.nextElementSibling.firstElementChild.click();
          }
     });
});

// clera

// textareaenk.addEventListener("input",animate.clearWarnaEnkripsi);


// 
// animate.warnaPsc("a","0a");
const hapusDelete=document.querySelectorAll(".hapus")
hapusDelete.forEach((hapus,index)=>{
     const textarea=hapus.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
     const kotak1=hapus.parentElement.parentElement.nextElementSibling.nextElementSibling.lastElementChild;
     const kotak2=kotak1.parentElement.nextElementSibling.lastElementChild;
     
     hapus.addEventListener("click",()=>{
          textarea.value="";
          kotak1.textContent="";
          kotak2.textContent="";
          berapa.textContent=0;
          // console.log(index)
          if(index==0){
               animate.fillPscEnkripsi(hasil[berapa.textContent])

          }


     })
     
})
