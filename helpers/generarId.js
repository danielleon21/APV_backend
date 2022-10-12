const generarId = () => {
    return Date.now() + Math.random().toString(32).substring(2)
}

export default generarId