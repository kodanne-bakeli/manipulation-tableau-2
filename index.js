//--------------partie1------------/
function Afficher() {
    let num0 = document.getElementById("num1").value
    let num1 = document.getElementById("num2").value
    let num2 = document.getElementById("num3").value
    let num3 = document.getElementById("num4").value
    let num4 = document.getElementById("num5").value
    let num5 = document.getElementById("num6").value
    let num6 = document.getElementById("num7").value
    let num7 = document.getElementById("num8").value
    let num8 = document.getElementById("num9").value
    let num9 = document.getElementById("num10").value
    
    let tab1 = [num0, num1, num2, num3, num4];
   
    let tab2=  [num5, num6, num7, num8, num9];

    
if(tab1.length >= 5 && tab2.length >= 5 ){
    for(let i of tab2){
     let tab3 = [tab1.find(x => x !== i)]
     
     document.getElementById("resultat1").value = tab3
    }
   for(let j of tab1){
       let tab4 = [tab2.find(x => x!== j)]
       document.getElementById("resultat2").value = tab4
       } 
}
}
//------------partie 2-------------/
 let array1 = [5,3,87,1,-4,-99,0]

document.write(`<p class="text-center">le tableau array1 contient les valeurs suivante : [${array1}]</p>`)
document.write(`<p class="text-center">en triant le tableau on obtient [${array1.sort()}]`)
document.write(`<p class="text-center">le chiffre le plus grand dans le tableau est: [${Math.max(...array1)}]</p>`)
document.write(`<p class="text-center">le chiffre le plus petit dans le tableau est : [${Math.min(...array1)}]</p>`)

