// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var result=[];
  var getClass = function(node){
    //check to see if node is undefined 

      if(node!==undefined){
       //get list of classes for the node you are on

       var list = node.classList

       //if node is  a non zero array or not undefined, implement the following

       if(node.length){

        //go through each element of the node

          for(var i=0; i<node.length; i++){

            //check to see if any of the classes in each node is undefined. If not, use recusion loop through the process again. 
            if(node[i].classList!==undefined){

                   getClass(node[i])

             }

          }
       }

       else{

           if(list){

                //check to see if your target className is in your node class list. If it is, push your node to result.We have found what we are looking for. 

                if(list.contains(className)){

                     result.push(node)

                }
                // if target className is not in node class list. Than use recursion but break it down further by inputing the child node of the current node. 
      

                getClass(node.childNodes)             

           }
        }
      }
   }

       //initiate the process with document.body.We want to start off with body and let the recursion run until we find our target className. If we can't find it, we just return an empty array. 
       getClass(document.body)
        return result;

    
      
};