let heldDisc = null;
let isDiscPickedUp = false;

function Test(event) {
    if (event.target.id === "wrapper" || event.target.className === "disc") {
        return;
        // prevents wrapper and disc from being selected
    }
    // console.log(event.target);
    // logs the id/class in console
    const tower = event.target;

    if (isDiscPickedUp === false) {
        heldDisc = tower.lastElementChild;
        tower.removeChild(tower.lastElementChild);
        isDiscPickedUp = true;
    } else if (isDiscPickedUp === true) {
        tower.appendChild(heldDisc);
        // console.log("is it working?")
        // console.log(isDiscPickedUp)
        isDiscPickedUp = false;
    }
}

document.getElementById("wrapper").onclick = Test;