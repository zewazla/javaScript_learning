function wypisz() {
    var liczba1 = document.getElementById("input1").value;
    var liczba2 = document.getElementById("input2").value;
    var napis = "";

    for (i=liczba1; i<=liczba2; i++) {
        napis = napis + i + " ";
    }
    document.getElementById("result-box").innerHTML = napis;
}
