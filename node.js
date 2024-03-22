var valor = 0
function a(){
        var a = document.getElementById("a");
        a.style.backgroundColor = "#A5402D"
        var b = document.getElementById("b");
        b.style.backgroundColor = "#585573"
        var c = document.getElementById("c");
        c.style.backgroundColor = "#3B394D"
        var d = document.getElementById("d");
        d.style.backgroundColor = "#3B394D"
        var e = document.getElementById("e");
        e.style.backgroundColor = "#3B394D"
        valor = 1
}
function b(){
        var a = document.getElementById("a");
        a.style.backgroundColor = "#585573"
        var b = document.getElementById("b");
        b.style.backgroundColor = "#A5402D"
        var c = document.getElementById("c");
        c.style.backgroundColor = "#585573"
        var d = document.getElementById("d");
        d.style.backgroundColor = "#3B394D"
        var e = document.getElementById("e");
        e.style.backgroundColor = "#3B394D"
        valor = 2
}
function c(){
        var a = document.getElementById("a");
        a.style.backgroundColor = "#3B394D"
        var b = document.getElementById("b");
        b.style.backgroundColor = "#585573"
        var c = document.getElementById("c");
        c.style.backgroundColor = "#A5402D"
        var d = document.getElementById("d");
        d.style.backgroundColor = "#585573"
        var e = document.getElementById("e");
        e.style.backgroundColor = "#3B394D"
        valor = 3
}
function d(){
        var a = document.getElementById("a");
        a.style.backgroundColor = "#3B394D"
        var b = document.getElementById("b");
        b.style.backgroundColor = "#3B394D"
        var c = document.getElementById("c");
        c.style.backgroundColor = "#585573"
        var d = document.getElementById("d");
        d.style.backgroundColor = "#A5402D"
        var e = document.getElementById("e");
        e.style.backgroundColor = "#585573"
        valor = 4
}
function e(){
        var a = document.getElementById("a");
        a.style.backgroundColor = "#3B394D"
        var b = document.getElementById("b");
        b.style.backgroundColor = "#3B394D"
        var c = document.getElementById("c");
        c.style.backgroundColor = "#3B394D"
        var d = document.getElementById("d");
        d.style.backgroundColor = "#585573"
        var e = document.getElementById("e");
        e.style.backgroundColor = "#A5402D"
        valor = 5
}
function submit(){
       if (valor === 0) {
       var alerta = document.getElementById("alerta")
       alerta.innerHTML = "Please select a number"
       }else{
        var div1 = document.getElementById("corpo1")
        var div2 = document.getElementById("corpo2")
        var text = document.getElementById("texto")
        var numero = String(valor);
        text.innerHTML = "You selected " + numero + " out of 5"
        div2.style.display = "block"
        div1.style.display = "none"
       }
}