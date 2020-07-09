document.querySelector(".output").style.visibility = "hidden";

document.querySelector("#kg").addEventListener("input",
    function (e) {
        document.querySelector(".output").style.visibility = "visible";
        let kg = e.target.value;

        let grams = document.querySelector("#gm");
        grams.innerHTML = kg * 1000;


        let pounds = document.querySelector("#pounds");
        pounds.innerHTML = kg * 2.205;
    

        let ounces = document.querySelector("#oz");
        ounces.innerHTML = kg * 35.274;

    })