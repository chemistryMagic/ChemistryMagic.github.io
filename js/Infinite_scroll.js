const scrollers = document.querySelectorAll(".scroller");


function NewSpeed(speed) {
    if (speed == "fast3") {
        return "fast2";
    } else if (speed == "fast2") {
        return "fast1";
    } else if (speed == "fast1") {
        return "fast";
    } else if (speed == "fast") {
        return "slow";
    } else if (speed == "slow") {
        return "stop";
    } else if (speed == "stop") {
        return "fast4";
    } else if (speed == "fast4") {
        return "fast3";
    };
}

var IsChecked = false;
ToggleReader = () => {
    var checkBox = document.getElementById("status-checked");
    IsChecked = checkBox.checked;
};

onBodyLoad = () => {
    scrollers.forEach((scroller) => {
        scroller.addEventListener("click", function(e) {
            e.preventDefault();
            let id = scroller.getAttribute("data-speed");
            let newSpeed = NewSpeed(id);
            if (typeof newSpeed == "string") scroller.setAttribute("data-speed", newSpeed);
        });

        let childrenElement = scroller.childNodes[1].children;
        
        $.each(childrenElement, function(i, child) {
            child.addEventListener("click", function(e) {
                e.preventDefault();
                if (!IsChecked) return;
                let ReadText = child.innerText;
                spoken.say(ReadText);
            })
        });
    });
}


// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
    console.log("Add");
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    for (let i = 0; i < 1; i++) {
        // const element = array[i];
        console.log(i);
    }
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}