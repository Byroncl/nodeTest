// async function fetchAsync() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.codm/posts')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// fetchAsync()

try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
} catch (error) {
    console.error(error)
}