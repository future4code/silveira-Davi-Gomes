export const goToHomePage = (navigate) => {
    navigate('/home')
}

export const goToDescription = (navigate, id) => {
    navigate(`/description/${id}`)
}

export const goToBack = (navigate) => {
    navigate(-1)
}