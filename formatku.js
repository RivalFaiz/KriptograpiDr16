
export function autoResizeTextarea() {
     this.style.height = 'auto';
     this.style.height = (this.scrollHeight) + 'px';
}

export function changeMode(){
     const span=document.querySelector("#idMode>span");
     if(this.checked){
          span.textContent="Real Time";
     }else{
          span.textContent="Submit";
     }

}
// console.log()


