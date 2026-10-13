const objectName = document.querySelector("#reminderItem")
const selectOption = document.querySelector(".interval-options")
const selectedOption = document.querySelector(".interval-option selected")
const reminderInterval = document.querySelector("#intervalValue")
const statusOptionSelected = document.querySelector("#status-option selected")
const statusOption = document.querySelector(".status-options")
const saveButton = document.querySelector(".save-button")



saveButton.addEventListener("click", function (e) {

    e.preventDefault()

    console.log(objectName.value)


})


 selectOption.addEventListener("click", function (e) {

    if (e.target.closest(".interval-option")) {

        console.log(e.target.closest(".interval-option").textContent.trim())



    }


})


statusOption.addEventListener("click", function (e) {

    const status = e.target.closest(".status-option")

    if (status) {

        console.log(status.textContent)
    }

})




function validateUserInput() {





}


function takeValueFromUser() {

}


function main() {



}


