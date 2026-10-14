const objectName = document.querySelector("#reminderItem")
const form = document.querySelector("#reminderForm")
const interval = document.querySelector(".interval-options")
const statuss = document.querySelector(".status-options")

interval.addEventListener("click", function (e) {



    let clickedInterval = e.target.closest(".interval-option")


    if (clickedInterval) {



        settingTheInterval(parseInt(clickedInterval.textContent ) * 1000)

    }


})


statuss.addEventListener("click", function (e) {


    let clickedStatus = e.target.closest(".status-option")


    if (clickedStatus) {


        console.log(clickedStatus.textContent)
    }

})



form.addEventListener("submit", function (e) {

    e.preventDefault()

    console.log(objectName.value)


    form.reset()

})


function settingTheInterval(value) {


   let  t  = setInterval(() => {

        console.log(`The Reminder value is ${value}`)

    }, value);
}


// vlue ne lagi hai sbki interval bhi a rha hai ab 

// item name likha value di aur bataya ghrt se nikal chuka hu turnt hi cheezen shuru ho jaye bs 
