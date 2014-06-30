// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj) {

  var result1;
  var result2;

  //check to see if input is a string. If it is return it with double quotations
  if(typeof obj=== 'string'){
  	   return '\"' + obj + '\"'
  }
  // if input is a boolean
  if(typeof obj === 'boolean'){

  	 return '' + obj
  }
  //if input is a number 
  if(typeof obj === 'number'){

  	 return '' + obj
  }
  //if input is null
 if(obj=== null){

	  return '' + null
}
  //checking to see if obj is an non-empty object and not equal to null. 

  if(!Array.isArray(obj) && typeof obj === 'object' && obj !== null && Object.keys(obj).length!==0){
  	  var keys = Object.keys(obj)

      result1 = ["{"]
      //get only the keys of the object
      var keys = Object.keys(obj)
      for(var i=0; i<keys.length;i++){

      	//if the keys or key type is a 'function' or undefined, we are going to ignore it
          if(typeof obj[keys[i]]=== 'function' || typeof obj[keys[i]]=== undefined || obj[keys[i]]=== undefined || obj[keys[i]]=== 'function' ){

            continue
          }else{
          	  //using '\"'  to put double quotation marks around our keys  

              result1.push('\"')
              result1.push(keys[i])
              result1.push('\"')
          }
          //separting keys and values with ":"
          result1.push(":");

      //checking to see if the value to our key is an array. If it is, we use recursion to solve this case. 

      if(Array.isArray(obj[keys[i]])){

            result1.push(stringifyJSON(obj[keys[i]]))
      }

      //checking to see if the value to our key is an object. If it is, we use recursion to solve this case. 

      if(!Array.isArray(obj[keys[i]]) && typeof obj[keys[i]] === 'object' && obj[keys[i]]!== null){

      	    result1.push(stringifyJSON(obj[keys[i]]))
      }

      //if the type of our value is a number

      if(typeof obj[keys[i]]==='number'){

      	  result1.push(obj[keys[i]])

      }

      //if the type of our value is a string
      if(typeof obj[keys[i]]==='string'){
      	  result1.push('\"')
      	  result1.push(obj[keys[i]])
      	  result1.push('\"')

      }
      //if the type of our value is a boolean

      if(typeof obj[keys[i]] === 'boolean'){

      	  result1.push(obj[keys[i]])
      }
      //if our value is null
      if(obj[keys[i]]=== null){

      	  result1.push('null')
      }
      // places a comma between each key-value pair

      if (i < keys.length - 1) {
        result1.push(",");
      }
     
  }  //end of for loop

  result1.push("}")

  return result1.join("")

   
  }  //end of if statement for objects

  //This part deals with array inputs
    

  if(Array.isArray(obj) && obj.length!==0){

  	var result1 = [] 

  	  for(var j=0; j<obj.length; j++){

  	  	   //if your array element is undefined 

  	  	  if(obj[j]=== undefined){

  	  	  	  result1.push('null')


  	  	  }
  	  	  //if your array element is a number 

  	  	  else if(typeof obj[j]==='number'){

  	  	  	    result1.push(obj[j])
  	  	  }
           //if your array element has a type of function

  	  	  else if(typeof obj[j]=== 'function'){

  	  	  	   result1.push('null')
  	  	  }

  	  	   //if your array element is null

  	  	  else if(obj[j]=== null){

  	  	  	   result1.push('null')

  	  	 //for everything else we are going to use recursion 
  	  	  }else{

           result1.push(stringifyJSON(obj[j]))

  	  	  }
  	  	
  	  }//end of for loop for arrays

  	  //this puts the array into a string 
  	  result2 =["["]
  	  result2.push(result1)
      result2.push("]")
  	  return result2.join("")
   }//end of if statement for arrays

   // if you have an empty array 
  if(Array.isArray(obj) && obj.length===0){
  	      result1=["["]

  	      result1.push("]")
  	     return  result1.join("")
  }

   //if you have an empty object

  if(typeof obj === 'object' && Object.keys(obj).length===0){

  	     result1=["{"]

  	      result1.push("}")
  	     return  result1.join("")

  	    
  };

}