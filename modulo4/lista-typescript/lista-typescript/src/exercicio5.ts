
type usuarios = {
    name: string,
    email: string,
    role: string
}

const listaDeUsuarios:usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]
function buscarUsuario(listaDeUsuarios: usuarios[]):string[] {
    const usuario: string[] = []
    listaDeUsuarios.map((item) =>{
        if(item.role === "admin"){
            usuario.push(item.email)
        }
    })
return usuario
}
console.log(buscarUsuario(listaDeUsuarios))