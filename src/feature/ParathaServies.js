import axios from "axios"

 export const fetchFood=async()=>{
     const response= await axios.get("/api/paratha")
    console.log(response)
 }
