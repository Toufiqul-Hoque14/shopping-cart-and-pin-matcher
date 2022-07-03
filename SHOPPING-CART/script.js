function updateCaseNumber(isIncrease) {
    const caseInput = document.getElementById('case-count')
    let caseNumber = caseInput.value
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber

    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59
}

// phone increase decrease button
function phonePlusButton() {

}

function phoneMinusButton() {

}
// case increase decrease button
function casePlusButton() {
    updateCaseNumber(true)
}

function caseMinusButton() {
    updateCaseNumber(false)
}