
const num = document.getElementById("num")
const td = document.querySelectorAll("td")
function zmianakoloru(){
    td[0].setAttribute("style","background-color: hsl("+num.value+", 100%, 50%);");
    td[1].setAttribute("style","background-color: hsl("+num.value+", 80%, 50%);");
    td[2].setAttribute("style","background-color: hsl("+num.value+", 60%, 50%);");
    td[3].setAttribute("style","background-color: hsl("+num.value+", 40%, 50%);");
    td[4].setAttribute("style","background-color: hsl("+num.value+", 20%, 50%);");
}
// zmianakoloru()