export const makeId =(Length:any) =>{
    let result =''
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLenght = characters.length

    for (let i = 0; i < Length; i++) {
         result +=characters.charAt(Math.floor(Math.random()*charactersLenght))
    }
    return result
}