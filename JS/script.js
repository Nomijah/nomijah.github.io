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

const removeLoading = () => {
  document
    .querySelector("main")
    .removeChild(document.querySelector(".loading"));
};

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
};
