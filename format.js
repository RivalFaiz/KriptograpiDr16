const textArea=document.querySelectorAll("textarea");
const mode=document.querySelector("#modeSwitch");
// let span=mode.parentElement.nextElementSibling.firstElementChild;
const span=document.querySelector(".MODE");
function formatTextArea(){

     textArea.forEach(e=>{
          e.style.cssText=`height: ${e.scrollHeight}px`;
          e.style.resize="none";
          e.addEventListener("input",element=>{
               e.style.height="9px";
               let sc=element.target.scrollHeight;
               e.style.height=`${sc}px`;
          });
     });
};




function mode1(){
     
     mode.addEventListener("change",()=>{
          
          if(mode.checked){
               span.textContent="Real Time";
          }else{
               span.textContent="Submit";
          }
     });
}

const formatPyraminx={
     0:"j",
     1:"i",
     2:"h",
     3:"g",
     4:"f",
     5:"e",
     6:"d",
     7:"c",
     8:"b",
     9:"a"
};

export function formatCodePyraminx(angka){
     return formatPyraminx[angka]
}


export {formatTextArea, mode1}
