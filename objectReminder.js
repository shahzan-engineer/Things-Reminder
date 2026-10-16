const objectName = document.querySelector("#reminderItem")
const form = document.querySelector("#reminderForm")
const interval = document.querySelector(".interval-options")
const statuss = document.querySelector(".status-options")
const buttons = document.querySelectorAll("button")
const intervalSummary  = document.querySelector(".summary-value")
const sound = document.querySelector("#reminderSound")
const pauseButtton = document.querySelector("#pauseMusic")
const stopButton = document.querySelector("#stopReminder")
let t;
let clickedInterval
let reminder = []



form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Input field se
    const itemName = objectName.value.trim();

    // 2. Pehle selected interval se
    const intervalMinutes = clickedInterval;

    // 3. Selected radio button se
    const selectedStatus = document.querySelector(
        'input[name="homeStatus"]:checked'
    );

    const homeStatus = selectedStatus
        ? selectedStatus.value
        : null;

    // Ab teeno values ek hi jagah available hain
   
    
    
    const reminderDetails  = {
        item : itemName , 
        interval : intervalMinutes , 
        status:homeStatus
    }
    
 
    reminder.push(reminderDetails)
 
    settingTheInterval(
          reminderDetails.interval * 60 * 1000,
          reminderDetails.item
      );

    console.log(reminder)

    form.reset()
});


interval.addEventListener("click", function (e) {

 const clicked = e.target.closest(".interval-option");

    // Step 1: Check whether an interval button was clicked
    if (!clicked) return;

    // Step 2: Remove selection from all interval buttons
    interval.querySelectorAll(".interval-option").forEach(function (button) {
        button.classList.remove("interval-option-selected");
        button.setAttribute("aria-pressed", "false");
    });

    // Step 3: Select the clicked button

    clicked.classList.add("interval-option-selected");
    clicked.setAttribute("aria-pressed", "true");

    // Step 4: Remember the selected interval
    clickedInterval = Number(clicked.dataset.interval);

    // Step 5: Update the summary
    intervalSummary.textContent = `${clickedInterval} minutes`;




})


async function setReminder(){


    try {

        await sound.play()

        
    } catch (error) {

        console.log("Error while playing the music")
        
    }


    


}

pauseButtton.addEventListener("click" , function(){
    sound.pause()
})


stopButton.addEventListener("click" , function(){
    clearInterval(t)
    sound.pause()
    sound.currentTime = 0
})

function settingTheInterval(value  , itemName) {

    clearInterval(t)

    console.log("Timer delay:", value);

    console.log("Item name:", itemName);

    t = setInterval(() => {


        console.log("song is being played untill you stop")
        setReminder()

    console.log(`Apne saman ${itemName} ko  hifazat se rkhe`)

    }, value);
}

// vlue ne lagi hai sbki interval bhi a rha hai ab 

// item name likha value di aur bataya ghrt se nikal chuka hu turnt hi cheezen shuru ho jaye bs 
