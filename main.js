// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("sw.js");
//   }
  
  let menuToggle = document.getElementById("menu-toggle");
  let menu = document.getElementById("menu");
  let displayScreen = document.getElementById("displayScreen");
  let windowNumber = 3;
  let audio = new Audio("audio/alarm-audio.mp3");
  let xButton = document.getElementById("xButton");
  let settingsMessage = document.querySelector('#settings-message')
  let timerButtons = document.querySelector('#timerButtons')


  let workInput = document.querySelector("#workDuration");
  workInput.addEventListener("change", function () {
    userWorkDuration = document.querySelector("#workDuration").value * 1;
    workDuration = userWorkDuration * 1;
    updateDisplay();
    localStorage.setItem("timerDurationWork", timerDurationWork);
  });
  let breakInput = document.querySelector("#breakDuration");
  breakInput.addEventListener("change", function () {
    userBreakDuration = document.querySelector("#breakDuration").value * 1;
    breakDuration = userBreakDuration * 1;
    updateDisplay();
    localStorage.setItem("timerDurationBreak", timerDurationBreak);
  });
  let longBreakInput = document.querySelector("#longBreakDuration");
  longBreakInput.addEventListener("change", function () {
    userLongBreakDuration =
      document.querySelector("#longBreakDuration").value * 1;
    longBreakDuration = userLongBreakDuration * 1;
    longBreakInput.value = longBreakDuration;
    updateDisplay();
    localStorage.setItem("timerDurationLongBreak", timerDurationLongBreak);
  });
  
  menuToggle.addEventListener("click", () => {
    userWorkDuration = document.querySelector("#workDuration").value * 1;
    workDuration = userWorkDuration * 1;
    userBreakDuration = document.querySelector("#breakDuration").value * 1;
    breakDuration = userBreakDuration * 1;
    userLongBreakDuration = document.querySelector("#longBreakDuration").value * 1;
    longBreakDuration = userLongBreakDuration * 1;
    if (windowNumber == 0){
      timerElement.innerHTML = `${timerDurationWork/60}:00`
    }
    if (windowNumber == 1){
      timerElement.innerHTML = `${timerDurationBreak/60}:00`
    }
    if (windowNumber == 2){
      timerElement.innerHTML = `${timerDurationLongBreak/60}:00`
    }
    if (storedWork === 0|| storedWork == null || storedBreak === 0 || storedBreak === null || storedLongBreak === 0 || storedLongBreak ===null ) {
        settingsMessage.innerHTML = "Please input a value"
    }
    else  {
        menu.classList.toggle("active");
        displayScreen.classList.toggle("active")
        updateDisplay();
    }
  });
  
  let userWorkDuration = document.querySelector("#workDuration").value * 1;
  
  let userBreakDuration = document.querySelector("#breakDuration").value * 1;
  let userLongBreakDuration =
    document.querySelector("#longBreakDuration").value * 1;
  
  let workSessionButton = document.querySelector("#wsButton");
  let breakSessionButton = document.querySelector("#bsButton");
  let longBreakSessionButton = document.querySelector("#lbButton");
  
  let workDuration = userWorkDuration * 1;
  let breakDuration = userBreakDuration * 1;
  let longBreakDuration = userLongBreakDuration * 1;
  
  let timerElement = document.getElementById("timer");
  let startPauseButton = document.getElementById("startPauseButton");
  let timerDurationWork = workDuration * 60; // 5 minutes in seconds
  let timerDurationBreak = breakDuration * 60; // 5 minutes in seconds
  let timerDurationLongBreak = longBreakDuration * 60; // 5 minutes in seconds
  let timerId;
  let isTimerRunning = false;
  
  function updateDisplay() {
    updateWindow();
    timerDurationWork = workDuration * 60; // 5 minutes in seconds
    timerDurationBreak = breakDuration * 60; // 5 minutes in seconds
    timerDurationLongBreak = longBreakDuration * 60;
    workSessionButton.addEventListener("click", function () {
      document.querySelector("h2").innerHTML = "Work Session";
      windowNumber = 0;
      updateWindow();
      timerElement.innerHTML = `${timerDurationWork/60}:00`
    });
    breakSessionButton.addEventListener("click", function () {
      document.querySelector("h2").innerHTML = "Break Session";
      windowNumber = 1;
      updateWindow();
      timerElement.innerHTML = `${timerDurationBreak/60}:00`
    });
    longBreakSessionButton.addEventListener("click", function () {
      document.querySelector("h2").innerHTML = "Long Break Session";
      windowNumber = 2;
      timerElement.innerHTML = `${timerDurationLongBreak/60}:00`
      updateWindow();
    });
  }
  
  function updateWindow() {
    if (windowNumber == 0) {
      workSessionButton.style.backgroundColor = "white";
      workSessionButton.style.color = "black";
      breakSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      breakSessionButton.style.border = "2px white solid";
      breakSessionButton.style.color = "white";
      longBreakSessionButton.style.border = "2px white solid";
      longBreakSessionButton.style.color = "white";
      longBreakSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      timerButtons.style.display = "flex"

    } else if (windowNumber == 1) {
      breakSessionButton.style.backgroundColor = "white";
      breakSessionButton.style.color = "black";
      workSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      workSessionButton.style.border = "2px white solid";
      workSessionButton.style.color = "white";
      longBreakSessionButton.style.border = "2px white solid";
      longBreakSessionButton.style.color = "white";
      longBreakSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      timerButtons.style.display = "flex"

    } else if (windowNumber == 2){
      longBreakSessionButton.style.backgroundColor = "white";
      longBreakSessionButton.style.color = "black";
      breakSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      breakSessionButton.style.border = "2px white solid";
      breakSessionButton.style.color = "white";
      workSessionButton.style.border = "2px white solid";
      workSessionButton.style.color = "white";
      workSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      timerButtons.style.display = "flex"
    } else {
      workSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      workSessionButton.style.border = "2px white solid";
      workSessionButton.style.color = "white";
      breakSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
      breakSessionButton.style.border = "2px white solid";
      breakSessionButton.style.color = "white";
      longBreakSessionButton.style.border = "2px white solid";
      longBreakSessionButton.style.color = "white";
      longBreakSessionButton.style.backgroundColor = "rgba(0,0,0,.25)";
timerButtons.style.display = "none"
    }
  }
  
  function updateTimer() {
    updateValues();

    if (windowNumber == 0) {
      if (timerDurationWork <= 0) {
        timerElement.textContent = "Time's up!";
        clearInterval(timerId);
        isTimerRunning = false;
        startPauseButton.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
        audio.play();
      } else {
        let minutes = Math.floor(timerDurationWork / 60);
        let seconds = timerDurationWork % 60;
        timerElement.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        timerDurationWork--;
      }
    }
    if (windowNumber == 1) {
      if (timerDurationBreak <= 0) {
        timerElement.textContent = "Time's up!";
        clearInterval(timerId);
        isTimerRunning = false;
        startPauseButton.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
        audio.play();
      } else {
        let minutes = Math.floor(timerDurationBreak / 60);
        let seconds = timerDurationBreak % 60;
        timerElement.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        timerDurationBreak--;
      }
    }
    if (windowNumber == 2) {
      if (timerDurationLongBreak <= 0) {
        timerElement.textContent = "Time's up!";
        clearInterval(timerId);
        isTimerRunning = false;
        startPauseButton.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
        audio.play();
      } else {
        let minutes = Math.floor(timerDurationLongBreak / 60);
        let seconds = timerDurationLongBreak % 60;
        timerElement.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        timerDurationLongBreak--;
      }
    }
  }
  
  function toggleTimer() {
    if (isTimerRunning) {
      clearInterval(timerId);
      isTimerRunning = false;
      startPauseButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    } else {
      updateTimer();
      timerId = setInterval(updateTimer, 1000);
      isTimerRunning = true;
      startPauseButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>';
    }
  }
  
  function resetTimer() {
    if (windowNumber == 0) {
      clearInterval(timerId);
      timerDurationWork = workDuration * 60; // 5 minutes in seconds
      timerElement.textContent = "00:00"; // Clear the displayed time
      isTimerRunning = false;
      startPauseButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    }
    if (windowNumber == 1) {
      clearInterval(timerId);
      timerDurationBreak = breakDuration * 60; // 5 minutes in seconds
      timerElement.textContent = "00:00"; // Clear the displayed time
      isTimerRunning = false;
      startPauseButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    }
    if (windowNumber == 2) {
      clearInterval(timerId);
      timerDurationLongBreak = longBreakDuration * 60; // 5 minutes in seconds
      timerElement.textContent = "00:00"; // Clear the displayed time
      isTimerRunning = false;
      startPauseButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
    }
  }
  
  timerColorPicker = document.querySelector("#timerColorPicker");
  timerColorPicker.addEventListener("input", updateTimerColor);
  
  function updateTimerColor(event) {
    document.querySelectorAll(".container").forEach((body) => {
      body.style.backgroundColor = event.target.value;
      localStorage.setItem("timerColor", event.target.value);
    });
  }
  
  let timerColor = localStorage.getItem("timerColor" || "#fff");
  
  function updateColors() {
      fetch("https://api.unsplash.com/photos/random?client_id=y5IWKrdKrvAQWLrIFbVbb4l-1ebvbhY1VAUU0C-cUq8")
      .then(response => response.json())
      .then(results => {
     document.querySelector("body").style.backgroundImage = "url("+ results.urls.regular+ ")"
      })
    document.querySelector(".container").style.backgroundColor = timerColor;
  }
  
  let storedWork = localStorage.getItem("timerDurationWork") ||25 * 60;
  let storedBreak = localStorage.getItem("timerDurationBreak") ||5 *60;
  let storedLongBreak = localStorage.getItem("timerDurationLongBreak") ||15 *60;
  
  function updateValues() {
    document.querySelector("#workDuration").value = (storedWork * 1) / 60;
    document.querySelector("#breakDuration").value = (storedBreak * 1) / 60;
    document.querySelector("#longBreakDuration").value =(storedLongBreak * 1) / 60;
  }
  
  updateColors();
  updateDisplay();
  updateValues();
  