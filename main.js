

   var input1 = document.getElementById("input1")
   var input2 = document.getElementById("input2")



   var media =[]
   if(localStorage.getItem("social") !=null){
      media = JSON.parse(localStorage.getItem("social"))
      displaymedia();
   }else{
   media=[]
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
           <button onclick="UpdateProduct(${i})" class="btn btn-outline-warning">Update</button>
       </td>
       <td>
          <button onclick="visitWebsite(${i})" class="btn btn-outline-danger">Visit  <i class="fa-solid fa-eye"></i></button>
          
      </td>
       <td>
          <button onclick= "deleteProduct(${i})" class="btn btn-outline-danger">Delete <i class="fa-solid fa-trash"></i>  </button>
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
localStorage.setItem("media" , JSON.stringify(media))
displaymedia()


console.log(media);
}



function UpdateProduct(index){
   console.log(media[index]);

   input1.value = media[index].name
   input2.value = media[index].site
}


function visitWebsite(index){

   window.open(media[index].url, '_blank');
  

}



// var x= document.getElementsByClassName('test')
// console.log(Array.from(x))