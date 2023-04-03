function generateResult(sides) {
    return Math.floor(Math.random() * (sides - 1 + 1) + 1)
}

function rollDie(sides) {
    let result = generateResult(sides)

    document.getElementById('result').innerText = result
}