 const request=require("request")
 const forecast=(latitude,longtitude,callback)=>{
    const url="https://api.weatherapi.com/v1/current.json?key=97051ef658754c64a8524614241907&q="+latitude +','+longtitude
    request({url,json:true},(error,response)=>{
        if(error){
            callback("unable find website",undefined)
        }
        else if(response.body.error){
            callback(response.body.error.message,undefined)
        }
        else{
            callback(undefined,response.body.location.name + " it is "
                 + response.body.current.condition.text
                 + " and temp " + response.body.current.temp_c)
        }
    })

}
module.exports=forecast