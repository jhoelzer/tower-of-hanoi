const heldDisc = {
    element: null,
    size: undefined
}

function checkWinCondition() {
    if (document.getElementById("towerThree").childElementCount === 4) {
        const winMessage = document.createElement("h2")
        winMessage.textContent = "YOU WON, FEARLESS LEADER! <(-.-)>"
        document.body.appendChild(winMessage)
    }
}

function holdDisc(tower) {
    heldDisc.element = tower.lastElementChild;
    heldDisc.size = heldDisc.element.offsetWidth;
    tower.removeChild(tower.lastElementChild);
}

function dropDisc(tower) {
        tower.appendChild(heldDisc.element);
        heldDisc.size = heldDisc.element.offsetWidth;
        heldDisc.element = null;
}

function eventClickHandler(event) {
    if (!event.target.classList.contains("tower")) return;

    const tower = event.target;
    const topDisc = tower.lastElementChild;
    const topDiscSize = topDisc && topDisc.offsetWidth;
    const hasDisc = tower.lastElementChild;
    const canStack = hasDisc && topDiscSize > heldDisc.size;

    if (!heldDisc.element) {
        holdDisc(tower);
    } else if (!hasDisc || canStack) {
        dropDisc(tower);
    }
    checkWinCondition();
}

document.getElementById("wrapper").onclick = eventClickHandler;