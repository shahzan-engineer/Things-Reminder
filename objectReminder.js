const objectName = document.querySelector("#reminderItem")
const form = document.querySelector("#reminderForm")
const interval = document.querySelector(".interval-options")
const statuss = document.querySelector(".status-options")
const buttons = document.querySelectorAll("button")
const intervalSummary  = document.querySelector(".summary-value")
let t;
let clickedInterval


interval.addEventListener("click", function (e) {



    clickedInterval = e.target.closest(".interval-option")


    clickedInterval.classList.add("interval-optionn")


    if (clickedInterval) {


        clearInterval(t)

        
        clickedInterval.classList.toggle("interval-option-selected")
        
        settingTheInterval(parseInt(clickedInterval.textContent) * 60 * 1000)
        
        
        
        
        
        intervalSummary.textContent = `${parseInt(clickedInterval.textContent)} minutes`

      
    }





})


statuss.addEventListener("click", function (e) {


    let clickedStatus = e.target.closest(".status-option")


    if (clickedStatus) {


        console.log(clickedStatus.textContent)
    }

})






function settingTheInterval(value) {


    t = setInterval(() => {

        console.log(`The Reminder value is ${value}`)

    }, value);
}

// vlue ne lagi hai sbki interval bhi a rha hai ab 

// item name likha value di aur bataya ghrt se nikal chuka hu turnt hi cheezen shuru ho jaye bs 
form.addEventListener("submit", function (e) {

    e.preventDefault()



    console.log(objectName.value)

    clearInterval(t)

    clickedInterval.classList.add("interval-option")

    clickedInterval.classList.remove("interval-option-selected")

    form.reset()

})