export const stringCompression = (input: any) => {
    const substrings = []
    let lastChar = input[0]
    let charCount = 0
    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount++
    }
    substrings.push(lastChar + charCount)
    let result = ''
    for (const key of substrings) {
        result += key
    }
    return result.length > input.length ? input : result
} 