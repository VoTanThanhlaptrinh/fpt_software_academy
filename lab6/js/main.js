
    document.getElementById("Ex1").style.display = "none";
    document.getElementById("Ex2").style.display = "none";
    var a = 0;
    var E1 = document.getElementById("E1");
    E1.addEventListener("click", () => {
        E1.style.background = "#F85C70";
        E1.style.color = "black";
        E2.style.background = "#2b3035";
        E2.style.color = "white";
        if (a == 0) {
            document.getElementById("Ex1").style.display = "block";
            document.getElementById("design1").style.background = "#F85C70";
            document.getElementById("Ex2").style.display = "none";
            a = 1;
        } else {
            document.getElementById("Ex1").style.display = "none";
            a = 0;
        }
    });
    var b = 0;
    var E2 = document.getElementById("E2");
    E2.addEventListener("click", () => {
        E2.style.background = "#F85C70";
        E2.style.color = "black";
        E1.style.background = "#2b3035";
        E1.style.color = "white";
        if (b == 0) {
            document.getElementById("Ex2").style.display = "block";
            document.getElementById("design2").style.background = "#F85C70";
            document.getElementById("Ex1").style.display = "none";
            b = 1;
        } else {
            document.getElementById("Ex2").style.display = "none";
            b = 0;
        }
    });
