// 1* Suprise Button
// array ar faktiem
const fakti = document.querySelectorAll(".fakts");
const fakti2 = document.querySelectorAll(".fakts2");

// paslepj faktus sakuma
fakti.forEach(li => { li.style.display = "none"});
fakti2.forEach(li => { li.style.display = "none"});


function suprise(grupa) {

    // paslepj ieprieks paraditos, ja ir
    fakti.forEach(li => { li.style.display = "none"});
    fakti2.forEach(li => { li.style.display = "none"});

    let aktiva;
    if (grupa === "fakti") {
        aktiva = fakti;
    }
    else {
        aktiva = fakti2;
    }

    //random skaitlis no array, izvelk vienu faktu un parada to lapa
    let rand = Math.floor(Math.random() * aktiva.length);
    let fakts = aktiva[rand];
    fakts.style.display = "list-item";
}

//*2 Dark/Light Mode

