function calcTip() {
    document.getElementById("total").innerHTML = "$" + Math.round((document.getElementById("tip").value / document.getElementById("subtotal").value) * 100).toFixed(2);
}