const urlBase='https://jsonplaceholder.typicode.com'
export const getUserByEmail=async email=>{
    const res=await fetch(`${urlBase}/users?email=${email}`);
    const user=await res.json();
    return user;
}