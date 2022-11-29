function num() {

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var sum = document.getElementById("opt").value;

    if (sum == "add") {
        document.getElementById("ans").value = (n1 + n2);
    }
    if (sum == "sub") {
        document.getElementById("ans").value = (n1 - n2);
    }
    if (sum == "mult") {
        document.getElementById("ans").value = (n1 * n2);
    }
    if (sum == "div") {
        document.getElementById("ans").value = (n1 / n2);
    }
    if (sum == "mod") {
        document.getElementById("ans").value = (n1 % n2);
    }

}


