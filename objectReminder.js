const objectName = document.querySelector("#reminderItem")
const form = document.querySelector("#reminderForm")




form.addEventListener("submit"  , function(e){

   e.preventDefault()



  let theObject  = objectName.value

 

 validateInputs(theObject)


 form.reset()

})


function validateInputs(x){



    console.log(x)




}