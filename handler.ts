"use strict";
module.exports.hello = async (event) => {
   return {
     statusCode: 200,
      body: JSON.stringify(
           {	
              message: "Go Serverless V3.0! Your function executed sucessfully!",
             input: event,
           },
          null,
          2
       ),
    };
};
