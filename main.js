

   var input1 = document.getElementById("input1")
   var input2 = document.getElementById("input2")



var media 
if(localStorage.getItem("media") !=null){
   media = json.parse(localStorage.getItem("media"))
   displaymedia();
}else{
   media = []
}


function AddProduct()
{

   

   var social= {
      name: input1.value,
      site : input2.value
   }
   // console.log(social);

  if(AddButton.innerHTML == "subbmit"){
   media.push(social)
   localStorage.setItem("social", JSON.stringify(media))
   displaymedia()
   clearForm()
  
  }else{
   media.splice(index, 1, social )
  }



   
  

   console.log(media);
}


function displaymedia(){
   var trs = ""
   for(var i=0 ; i<media.length; i++){
       trs += `<tr>
       <td>${i}</td>
      <td>${media[i].name}</td>
       <td>
           <button onclick="Update(${i})" class="btn btn-outline-warning">Update</button>
       </td>
       <td>
          <button onclick="visit(${i})" class="btn btn-outline-danger">Visit</button>
      </td>
       <td>
          <button onclick= "deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
      </td>
       </tr>`
      
      
   }
   document.getElementById("tBody").innerHTML = trs
}

function clearForm(){
   input1.value = ""
   input2.value = ""
}


function deleteProduct(index) {
media.splice(index, 1 )
localStorage.setItem("media" , json.stringify(media))
displaymedia()


console.log(media);
}



function UpdateProduct(index){
   console.log(media[index]);

   input1.value = media[index].name
   input2.value = media[index].site
}



// function visit(index){
//    window.open(media[i].url)
// }