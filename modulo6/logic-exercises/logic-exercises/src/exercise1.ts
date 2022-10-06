export const missingNumber = (array: number[]): number => {
    const sum = (array[0] + array[array.length - 1]) * (array[array.length - 1] / 2)
    let totalSum = 0
    for (const num of array) {
        totalSum += num
    }
    console.log(sum, totalSum)
    return sum - totalSum
}

console.log(missingNumber([1, 2, 4, 5, 6]))

