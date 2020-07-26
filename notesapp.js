
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  let remind = document.getElementById('remind')
  let time = new Date()
  reminder = new Date(remind.value)

  // setting reminder
  alarm = reminder - time
  if (alarm >= 0) {
    setTimeout(() => {
      audio = new Audio('alarm.mp3')
      audio.play()
    }, alarm);
  }
  // format for notes set date
  tYear = time.getFullYear()
  tMonth = time.getMonth()
  tDate = time.getDate()
  tHour = time.getHours()
  tMinutes = time.getMinutes()
  tSeconds = time.getSeconds()
  let timeOfDay = (tHour < 12) ? "AM" : "PM";
  tHour = (tHour > 12) ? tHour - 12 : tHour;
  tHour = (tHour == 0) ? 12 : tHour;
  tHour = (tHour < 10 ? "0" : "") + tHour;
  tMinutes = (tMinutes < 10 ? "0" : "") + tMinutes;
  tSeconds = (tSeconds < 10 ? "0" : "") + tSeconds;
  tMonth = (tMonth < 10 ? "0" : "") + tMonth;
  tDate = (tDate < 10 ? "0" : "") + tDate;

  // format for remind date
  rYear = reminder.getFullYear()
  rMonth = reminder.getMonth()
  rDate = reminder.getDate()
  rHour = reminder.getHours()
  rMinutes = reminder.getMinutes()
  rSeconds = reminder.getSeconds()
  let timeOfReminder = (rHour < 12) ? "AM" : "PM";
  rHour = (rHour > 12) ? rHour - 12 : rHour;
  rHour = (rHour == 0) ? 12 : rHour;
  rHour = (rHour < 10 ? "0" : "") + rHour;
  rMinutes = (rMinutes < 10 ? "0" : "") + rMinutes;
  rSeconds = (rSeconds < 10 ? "0" : "") + rSeconds;
  rDate = (rDate < 10 ? "0" : "") + rDate;
  rMonth = (rMonth < 10 ? "0" : "") + rMonth;

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myNotesObj = {
    title: addTitle.value,
    notes: addTxt.value,
    remind: ` ${rHour}:${rMinutes}:${rSeconds} ${timeOfReminder} ${rDate}/${rMonth}/${rYear}`,
    time: ` ${tHour}:${tMinutes}:${tSeconds} ${timeOfDay} ${tDate}/${tMonth}/${tYear}`
  }
  notesObj.push(myNotesObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";

  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1} </h5>
                        <i><p>was set at ${element.time}</p></i>
                        <h5 class="card-title"> ${element.title}</h5>
                        <p class="card-text"> ${element.notes}</p>
                        <i><p>Reminder at ${element.remind}</p></i>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/

