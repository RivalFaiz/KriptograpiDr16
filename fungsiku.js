import * as modul from "./modul1.js";


export function caraCopy(textToCopy){
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
          const tempTextArea = document.createElement("textarea");
          tempTextArea.value = "";
          document.body.appendChild(tempTextArea);
          
          // Memilih teks dalam textarea
          tempTextArea.select();
          tempTextArea.setSelectionRange(0, 9999999); // Untuk seleksi di berbagai browser
          
          // Menyalin teks ke clipboard
          document.execCommand("copy");
          
          // Menghapus elemen textarea sementara
          document.body.removeChild(tempTextArea);

          const popup = document.getElementById("popup");
          popup.innerHTML = "Teks Kosong";
          popup.style.display = "block";
          popup.style.backgroundColor="red";
          setTimeout(function() {
               popup.style.display = "none";
          }, 1000);
     };     
};

export function copyRGBValues() {
  // Mencari semua elemen <div> dengan kelas "hasilRGB" dalam dokumen
     
     const divs = document.querySelectorAll('#chipperTextEnkripsi .hasilRGB');
     

     if(divs[0]){
          let copiedText = '';
          divs.forEach((div) => {
               console.log("divv",div)
               const style = window.getComputedStyle(div).backgroundColor;
               console.log(style)
               const rgbValues = style.match(/\(([^)]+)\)/)[1];
               if (rgbValues) {                    
                    copiedText += `(${rgbValues})`;
               }

          });
     
          // Menyalin hasil ke papan klip
          const textarea = document.createElement('textarea');
          textarea.value = copiedText;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          const popup = document.getElementById("popup");
          popup.innerHTML = "Teks telah disalin ke clipboard ";
          popup.style.display = "block";
          popup.style.backgroundColor="";
          setTimeout(function() {
               popup.style.display = "none";
          }, 1000);
     }else{
          const textarea = document.createElement('textarea');
          textarea.value = "";
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          
          const popup = document.getElementById("popup");
          popup.innerHTML = "Teks Kosong";
          popup.style.display = "block";
          popup.style.backgroundColor="red";
          setTimeout(function() {
               popup.style.display = "none";
          }, 1000);

     }
}


// Panggil fungsi untuk menyalin nilai-nilai RGB
// copyRGBValues();


export function selectElement(){

     const selectElement = document.getElementById("selectOption");
     return selectElement
}
// fungsi menyimpan selectedoption
export function saveSelectedOption() {
     // const selectElement() = document.getElementById("selectOption");
     const selectedOption = selectElement().value;
     localStorage.setItem('selectedOption', selectedOption);
     // console.log(localStorage.getItem("selectedOption"))
}


export function loadSelectedOption() {
     // const selectElement() = document.getElementById("selectOption");
     const selectedOption = localStorage.getItem('selectedOption');
     if (selectedOption) {
          selectElement().value = selectedOption;
          
     }
}


// swicth kucni
export function switchKunci(){     
     const selectedOption=localStorage.getItem("selectedOption");
     const textarea2=document.querySelectorAll("textarea")[1];
     textarea2.placeholder="Chippertext"
     
     
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
          case "5":
               kunci.type = "text";
               textarea2.placeholder="Chippertext input RGB dengan : (1,2,3) (3,55,43)..."

               break;
               default:
                    break;
               };
               
               
};
          
          // fungsi tampil
          // console.log(selectedOption)
export function tampil(){
     const selectedOption=localStorage.getItem("selectedOption");
     const caesar=document.querySelectorAll(".caesar");
     const vigenere=document.querySelectorAll(".vigenere");
     const playfair=document.querySelectorAll(".playfair");
     const pyraminx=document.querySelectorAll(".pyraminx");
     const RGB=document.querySelectorAll(".RGB");
     const listTampil=[caesar,vigenere,playfair,pyraminx,RGB];

     listTampil.map(e=>{
          e.forEach(element=>{
               element.classList.add("d-none");
          })
     });

     if(selectedOption){
          // console.log("akuhsdshdgshd",listTampil[selectedOption-1])

          listTampil[selectedOption-1].forEach(e=>{
               e.classList.remove("d-none");
          });
     }
     else{
          selectedOption=1
          listTampil[selectedOption-1].forEach(e=>{
               e.classList.remove("d-none");
          });
     }
}

export function parseRGBString(input) {
  const rgbRegex = /\((\d+),\s*(\d+),\s*(\d+)\)/g;
  const rgbArray = [];

  let match;
  while ((match = rgbRegex.exec(input)) !== null) {
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    const rgbString = `rgb(${r},${g},${b})`;
    rgbArray.push(rgbString);
  }

  return rgbArray;
}

// const input = "(0, 66, 3) (6,85,20) (65,66, 3) (65, 66,119)";
// const result = parseRGBString(input);
// console.log(result);



// const input = "(0, 66, 3) (6,85,20) (65,66, 3) (65, 66,119)";
// const result = parseRGBString(input);
// console.log(result);

// fungsi realtime

// harus di revisi
export function firstRealTime(){
     const textarea=document.querySelectorAll("textarea");
     const mode=document.getElementById("modeSwitch");

     textarea.forEach((e,index)=>{
          // const e=e.firstElementChild.firstElementChild;
          const outputInput=e.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild;
          // console.log(outputInput)
          const outputHasil=outputInput.parentElement.nextElementSibling.lastElementChild; 
          // console.log(outputHasil)
          // console.log(outputInput)
          function updateHasilOutput() {

               
               function enkripsi(){
 
                    const selectedOption=localStorage.getItem("selectedOption")

                    if (selectedOption==1){
                         outputHasil.textContent =modul.caesar(e.value);
                  
                    }else if(selectedOption==2){
                         outputHasil.textContent=modul.vigenere(e.value)
                    }
                    else if(selectedOption==3){
                         const myArray = e.value;
                         if(myArray!==null){
                              outputHasil.textContent=modul.playFair(e.value).hasilJoin
                              
                         }
                    }
                    else if(selectedOption==4){
                         const myArray = e.value;
                         if(myArray!==null){
                              outputHasil.textContent=modul.pyraminx(e.value)
                              
                         }
                         
                         
                         
                    }else if(selectedOption==5){
                         // console.log(modul.RGBr(e.value,"aku"))
                         const myArray = e.value;

                         if(myArray!==null){
                              modul.createColoredDiv(modul.RGBr(e.value,kunci.value),outputHasil);
                              // outputHasil.textContent=
                              
                         }
                         

                         // outputHasil.textContent=modul.pyraminx(e.value)

                    }
               }

               function dekripsi(){
                    const selectedOption=localStorage.getItem("selectedOption");
                    e.parentElement.nextElementSibling.firstElementChild.addEventListener("click", (ele)=>{
                         ele.preventDefault();
                         updateHasilOutput();
                         }     
                    ); 
                    

                    if (selectedOption==1){
                         outputHasil.textContent =modul.caesarDek(e.value);
                   
                    }
                    else if(selectedOption==2){
                         outputHasil.textContent=modul.vigenereDek(e.value)
                    }
                    else if(selectedOption==3){
                         if (e.value!=null){

                              outputHasil.textContent=modul.playFairDek(e.value)
                         }
                         

                    }
                    else if(selectedOption==4){
                         if (e.value!=null){

                              outputHasil.textContent=modul.pyraminxDek(e.value)
                         }
                         
                         
                    }else if(selectedOption==5){
                         if(e.value!=null){
                              outputHasil.textContent=modul.RGBrDek(e.value,kunci.value)

                         }
                    }
               }


               if(index===0){
                    enkripsi()
                    if(mode.checked){

                         kunci.addEventListener("input",enkripsi)
                    }
                    // selectElement().addEventListener("change",enkripsi)
                    selectElement().addEventListener("change",()=>{
                         e.value="";
                         outputHasil.innerHTML="";
                         outputInput.innerHTML="";
                    })
                    updateOutput1(); 
                    
               }else{
                    dekripsi()
                    if(mode.checked){

                         kunci.addEventListener("input",dekripsi)
                    }
                    selectElement().addEventListener("change",()=>{
                         e.value="";
                         outputHasil.innerHTML="";
                         outputInput.innerHTML="";
                    })
                    const selectedOption=localStorage.getItem("selectedOption");
                    if(selectedOption!=5){

                         updateOutput1();     
                    }
                    // console.log(parseRGBString(e.value))
                    modul.createColoredDiv(parseRGBString(e.value),outputInput)
                    // console.log(outputInput)
                    

               }
          };

          function updateOutput1() {
               outputInput.textContent =e.value ;
               // mode.addEventListener("change",()=>{
               //      outputInput.textContent = e.value ;
               // })          
          }


          
          
          mode.addEventListener("change", function() {
               if (mode.checked) {                    
                    e.addEventListener("input", updateHasilOutput);                  
               } else {          
                    e.removeEventListener("input", updateHasilOutput);                    
                    e.textContent = e.value;
                    e.parentElement.nextElementSibling.firstElementChild.addEventListener("click", (ely)=>{
                         ely.preventDefault();
                         updateHasilOutput();
                         }     
                    );
               }
          });
          if (mode.checked) {
               e.addEventListener("input", updateHasilOutput);
     
          }


     })

};

// console.log("aku",kunci)

// menampil dan sembunyi






