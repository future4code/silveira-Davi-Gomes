export const changePage = (Navigate, path, id) => {
    if (id !== undefined) {
        Navigate.push(`${path}/${id}`)
    } else {
        Navigate.push(`${path}`)
    }
} 