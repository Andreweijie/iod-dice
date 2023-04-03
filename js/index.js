function rollDie(sides) {
    return Math.floor(Math.random() * (sides - 1 + 1) + 1)
}

console.log(rollDie(6))
console.log(rollDie(10))