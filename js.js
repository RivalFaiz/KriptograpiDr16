import { formatTextArea } from "./format.js";
import { copyText } from "./fungsi.js";

formatTextArea();
copyText();

const selectElement = document.getElementById("selectOption");
const kunci=document.querySelector("div>input");

// kunci.value=0; 


import { mode1 } from "./format.js";
mode1();

import { firstRealTime ,hapus, switchKunci, saveSelectedOption,loadSelectedOption} from "./fungsi.js";
const mode=document.querySelector("#modeSwitch");


hapus()
switchKunci();

selectElement.addEventListener("change", function() {
     localStorage.setItem("selectedOption", this.value);
     switchKunci();
});

mode.addEventListener("change",firstRealTime)


loadSelectedOption();
selectElement.addEventListener('change', saveSelectedOption);

firstRealTime();
// import { keyPlayFair } from "./modul1.js";


// kunci.addEventListener("change",keyPlayFair1=keyPlayFair(kunci))
import { himpunanObjek } from "./modul1.js";

let kunciCaesar=document.querySelector("#caesarP span");
let kunciCaesarE=document.querySelector("#satu");
let kunciCaesarHasil=document.querySelector("#tiga");
let kunciCaesarHasilbgt=document.querySelector("#empat");
let kunciCaesarHasilbgtText=document.querySelector("#lima");
function fill(){
  kunciCaesar.textContent=kunci.value;
  kunciCaesarE.textContent=kunci.value;
  kunciCaesarHasil.textContent=Number(Number(kunci.value));
  kunciCaesarHasilbgt.textContent=Number(Number(kunci.value)+65);
  kunciCaesarHasilbgtText.textContent=himpunanObjek[Number(Number(kunci.value)+65)%100];

}

fill()

kunci.addEventListener("input",fill);

// const pyr=document.querySelector(".pyraminx") ;
// pyr.style.display="flex";

// function cekTable(){

//      const plf=document.querySelector(".playfair") ;
//      const cae=document.querySelector(".caesar") ;
//      const vig=document.querySelector(".vigenere") ;
//      const pyr=document.querySelector(".pyraminx") ;
     
//      const selectedOption1=localStorage.getItem("selectedOption");
//      //  const table=document.querySelector("table");
     
     
//      if(selectedOption1==3){
//        plf.style.display="flex";
       
//       }else if(selectedOption1==2){
//         vig.style.display="flex";
        
        
//       }else if(selectedOption1==1){
        
//         cae.style.display="flex";
//       }else{
//       //  console.log("selection",selectedOption1)
//         pyr.style.display="flex";
//         // fillPscEnkripsiBytext()
//         // console.log(pyr)
//       }
      
      
//       selectElement.addEventListener("change",()=>{
//         cae.style.display="none";          
//        vig.style.display="none";          
//        plf.style.display="none";   
//        pyr.style.display="none";   


//           if(selectElement.value==1){
//             cae.style.display="flex";          
//           }else if(selectElement.value==2){
//             vig.style.display="flex";          

//           }else if(selectElement.value==3){
//             plf.style.display="flex";  
                    

//           }else if(selectedOption1==4){
//             pyr.style.display='flex'
//             // fillPscEnkripsiBytext()
//             console.log(pyr)
//      }
     
     
     
//      })
// }
function cekTable() {
  const plf = document.querySelector(".playfair");
  const cae = document.querySelector(".caesar");
  const vig = document.querySelector(".vigenere");
  const pyr = document.querySelector(".pyraminx");

  // const selectElement = document.querySelector("select"); // Menambahkan inisialisasi selectElement

  const selectedOption1 = localStorage.getItem("selectedOption");

  // Mengatur tampilan awal berdasarkan selectedOption1 yang disimpan di localStorage
  if (selectedOption1 == 3) {
    plf.style.display = "flex";
  } else if (selectedOption1 == 2) {
    vig.style.display = "flex";
  } else if (selectedOption1 == 1) {
    cae.style.display = "flex";
  } else {
    pyr.style.display = "flex";
  }

  // Menambahkan event listener untuk perubahan pilihan dalam elemen select
  selectElement.addEventListener("change", () => {
    cae.style.display = "none";
    vig.style.display = "none";
    plf.style.display = "none";
    pyr.style.display = "none";

    if (selectElement.value == 1) {
      cae.style.display = "flex";
    } else if (selectElement.value == 2) {
      vig.style.display = "flex";
    } else if (selectElement.value == 3) {
      plf.style.display = "flex";
    } else if (selectElement.value == 4) { // Anda menggunakan selectedOption1, seharusnya selectElement.value
      pyr.style.display = "flex";
      // fillPscEnkripsiBytext()
      console.log(pyr);
    }
  });
}

// cekTable()
document.addEventListener("DOMContentLoaded",cekTable)



selectElement.addEventListener("change",cekTable)
import { fillPscEnkripsiBytext } from "./fungsi.js";



// export {fillPscEnkripsiBytext}




   