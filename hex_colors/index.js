let clickMeBtn=document.getElementById("click_me_btn")
let addingColorCode=document.getElementById("color") 

clickMeBtn.addEventListener("click", function(){
    let colors = ["A", "B", "C", "E", "D", "F", "0", "1", "2", "3", "4", "5", "6", "7","8","9"]
    let hex_code=""
   for (let i=0;i<6;i++){
    let random_index=Math.floor(Math.random()*colors.length)
    hex_code+=colors[random_index]
   }
   addingColorCode.innerHTML=hex_code
   document.getElementsByTagName("body")[0].style.background="#"+hex_code
})