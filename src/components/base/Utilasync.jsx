
  import axios from "axios";  

  // Global Async utility for all Request
  const UtilAsync = async (url, method, data) => {
    const resHeaders = {
      method: method,
      url: url,
      data: data,
      headers:{
        'Content-type':'application/json'
      },
    } 
    try{
      const res =  await axios(resHeaders);
      const data = await res.data
      console.log(data)
      return data
    }catch(error){
      console.log('Show error notification!')
      return Promise.reject(error)
    }  
  }

  export default UtilAsync