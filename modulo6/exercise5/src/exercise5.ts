// const number = [2, 2, 1]

// const lonelyNumber = [... new Set(number)]
// console.log(lonelyNumber)

function findUnique(array: any) {
    const map = new Map()

    for (const element of array) {
        map.set(element, (map.get(element) || 0) + 1)
    }
    for (const [entry, count] of map.entries()) {
        if (count === 1) return entry
    }
    return undefined
}

// console.log(findUnique([2, 2, 1, 5, 5]))
console.log(findUnique([4, 1 , 2, 1, 2])) 