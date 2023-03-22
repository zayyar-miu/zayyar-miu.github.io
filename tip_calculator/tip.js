function calcTip() {
    document.getElementById("total").innerHTML = "$" + Math.round(parseFloat(document.getElementById("subtotal").value) + ((parseFloat(document.getElementById("tip").value) / parseFloat(document.getElementById("subtotal").value)) * 100)).toFixed(2);
}