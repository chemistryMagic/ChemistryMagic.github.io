bodyOnLoad = () => {
    // $(".FristPage .fp-title span").html("Created By: ")
    FP_writing_setup();
    FP_creators_info();
    FP_move_next_web();
    // ToggleHelpfulText();
}

FP_writing_setup = () => {
    setTimeout(() => {
        $(".FristPage .fp-title .console-container").fadeIn(300)
        .css({display: "flex"});
        setTimeout(() => {
            consoleText(["Created By: "], 'fp-t-span', ['#eee'], false);
        }, 400);
    }, 2500);
}

FP_creators_info = () => {
    setTimeout(() => {
        var objects = document.querySelectorAll(".FristPage .creators-info .creator-box");
        $.each(objects, function(i, obj) {
            i++
            $(obj).fadeIn(300)
            .css({display: "flex"})
            .animate({ opacity: 1 }, ( (i + 1) * 500 ))
        })
    }, 4700);
}

FP_move_next_web = () => {
    setTimeout(() => {
        $(".FristPage .show-main-website")
        .animate({ opacity: 1 }, 1000)
    }, 6000);
}

function consoleText(words, id, colors, loop) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if ( (loop) && letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


var Creators = {
    ["Creator_1"]: {
        url: "https://www.snapchat.com/add/z3l_tk",
    },
    ["Creator_2"]: {
        url: "https://www.snapchat.com/add/c6llg",
    },
    ["Creator_3"]: {
        url: "https://www.snapchat.com/add/ki.iib",
    },
    ["Creator_4"]: {
        url: "https://www.snapchat.com/add/c.cz44",
    },
}

$(document).on("click", '.FristPage .creators-info .creator-box button', function(e) {
    e.preventDefault();
    var url = Creators[this.id].url;
    if (url) {
        window.open(url, "_blank");
    }
});