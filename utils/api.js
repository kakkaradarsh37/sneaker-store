import { API_URL, STRAPI_API_TOKEN } from "./urls";

 export const fetchDataFromApi= async(endpoint)=>{//async because we have to return a promise
     const options = {
                method: 'GET',
                headers: {
                  //'User-Agent': 'Insomnia/2023.5.5',
                  Authorization: 'Bearer  ' +  STRAPI_API_TOKEN,//c3e1ccbcb6b2e7990d653b334a7d53223e2dbfd2c88e74689c8a3fa8d4c22c7a159d8baedeff8f607bb3db9197c99a9a88c52326b98d362bb7cfc1ee2d2455709928dc45d85b6d0300df1fae63b4ecd45b64d2284f28021a26737d5f9ef82217d790cdb4bde1418564e99765a08426cc7a8cb0db3187bafd5daebaeef363bee9
                },//not ; because we are inside the object
              };
             const res = await fetch(`${API_URL}${endpoint}`, options);
             const data = await res.json();

              return data;//now we will fetch the products in the home page from this

        };


        export const makePaymentRequest= async(endpoint , payload)=>{
          const res= await fetch(`${API_URL}${endpoint}`,{
            method:'POST',//post request
            headers: {
              Authorization: "Bearer" + STRAPI_API_TOKEN,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)//payload is passed in body
          })
          const data = await res.json();
          return data;
        }
    

