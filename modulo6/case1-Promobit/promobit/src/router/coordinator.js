
export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToDetails = (navigate, id) => {
    navigate(`/details/${id}`)
}
