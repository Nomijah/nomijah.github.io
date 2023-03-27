fetch("../JSON/WorkStudy.json")
  .then((response) => response.json())
  .then((data) => {
    // To run correct function, check which page is active
    let page = document.body.id;
    console.log(page);
    switch (page) {
      case "study":
        studyDisplay(data.plugg);
        break;
      case "work":
        workDisplay(data.jobb);
        break;
      case "home":
        homeFuncs();
        break;
    }
  });

// Loading content for study page
const studyDisplay = (array) => {
  array.forEach((e) => {
    let newDiv = document.createElement("div");
    newDiv.className = "studybox";
    let h2Element = document.createElement("h2");
    h2Element.innerHTML = e.description;
    newDiv.appendChild(h2Element);
    let h3Element = document.createElement("h3");
    h3Element.innerHTML = e.school;
    newDiv.appendChild(h3Element);
    let pElement = document.createElement("p");
    pElement.innerHTML = e.time;
    newDiv.appendChild(pElement);
    document.getElementById("studycontainer").appendChild(newDiv);
  });
  removeLoading();
};

// Loading content for work page
const workDisplay = (array) => {
  array.forEach((e) => {
    let newDiv = document.createElement("div");
    newDiv.className = "workbox";
    let h2Element = document.createElement("h2");
    h2Element.innerHTML = e.workplace;
    newDiv.appendChild(h2Element);
    let h3Element = document.createElement("h3");
    h3Element.innerHTML = e.description;
    newDiv.appendChild(h3Element);
    let pElement = document.createElement("p");
    pElement.innerHTML = e.time;
    newDiv.appendChild(pElement);
    document.getElementById("workcontainer").appendChild(newDiv);
  });
  removeLoading();
};

// Function to remove the loading indicator
const removeLoading = () => {
  document
    .querySelector("main")
    .removeChild(document.querySelector(".loading"));
};

// Secret click easter egg
const homeFuncs = () => {
  let buttonState = false;
  document.getElementById("thebutton").onclick = (evt) => {
    if (!buttonState) {
      document.getElementById("surprise").style.visibility = "visible";
      buttonState = true;
    } else {
      document.getElementById("surprise").style.visibility = "hidden";
      buttonState = false;
    }
  };

  // 1337 Easter egg
  let modal = document.getElementById("myModal");
  let counter = 0;
  let keyPressOrder = [1, 3, 3, 7];

  const removeModal = () => {
    modal.style.display = "none";
    counter = 0;
    document.removeEventListener("keydown", removeModal);
  };

  // Event listener for 1337 easter egg
  document.addEventListener("keydown", ({ key }) => {
    if (key == keyPressOrder[counter]) {
      console.log("hej från knapptryck");
      counter++;
      console.log(counter);
    } else {
      counter = 0;
    }
    if (counter === 4) {
      console.log("lyckas");
      modal.style.display = "block";
      document.addEventListener("keydown", removeModal);
    }
  });
  console.log(counter);
};
