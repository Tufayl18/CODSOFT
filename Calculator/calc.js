function appendValue(value) {
    document.getElementById("eqn").value += value
}
function clearScreen(){
    document.getElementById("eqn").value = ""
    
}
function calculate() {
        const eqn = document.getElementById("eqn")
        const expr = eqn.value

        const result = eval(expr)
       
        if (!isFinite(result) || isNaN(result)) {
          alert("Invalid expression");
          return eqn.value = ""
        }
        eqn.value = result

}