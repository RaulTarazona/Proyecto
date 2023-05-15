const url = " http://localhost:4000/admins"
const url2 = " http://localhost:4000/users"

//Obtetener Api
 export const getAdmins = async ()=>{
    const result = await fetch(url);
    const admins = await result.json();
    return admins
}

export const getUsers = async ()=>{
    const result = await fetch(url2);
    const users = await result.json();
    return users
}

//Añadir usuarios

export const newUSer = async(users) =>{
    console.log(users);
    try {
        await fetch(url2,{
            method: 'POST',
            body: JSON.stringify(users),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }

}






