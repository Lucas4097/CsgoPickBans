var names1 = document.querySelector("#names1")
var names2 = document.querySelector("#names2")

document.querySelector('#btn').addEventListener("click", function () {
    var name1 = document.querySelector("#name1")
    var name2 = document.querySelector("#name2")

    if (name1.value == "" && name2.value == "") {

        window.alert("Please enter both names")

    } else {

        iniciar()
    }


    function iniciar() {
        window.document.body.style.height = "100%"

        var section_input = document.querySelector("#section-input")
        section_input.classList.add("d-none")
        var section_name = document.querySelector("#names")
        section_name.classList.remove("d-none")
        var section_image = document.querySelector("#images")
        section_image.classList.remove("d-none")

        names1.innerHTML = name1.value
        names2.innerHTML = name2.value
        
    }

    function getRandom() {
        return Math.round(Math.random());
    }

    var player = getRandom();

    var maps = document.querySelectorAll(".maps")

    function verifPlayer() {

        if (player == 0) {
            names2.style.color = "white"
            names1.style.color = "blue"
            player = 1
        } else if (player == 1) {
            names1.style.color = "white"
            names2.style.color = "blue"
            player = 0
        }

    }

    function ban() {
        this.style.filter = "grayscale(1)"
        this.style.textDecoration = "line-through"
        
        if (banned) {
            verifPlayer()    
        }

        var banned = false

        console.log(banned)
    }

    for (var el, i = 0; i < maps.length; i++) {
        el = maps[i];
        el.addEventListener("click", ban);
    }

})