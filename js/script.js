
//  ### Scroll To Top

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 1200
    || document.documentElement.scrollTop > 1200) {
    document.getElementById("back-to-top").style.display = "block";
    } else {
      document.getElementById("back-to-top").style.display = "none";
    }
}

document.getElementById('back-to-top').addEventListener("click", function () {
    var i = document.body.scrollHeight - 10;
    var int = setInterval(function () {
      if (i <= 0) clearInterval(int);
      window.scrollTo(0, i);
      i -= 30;
      },  0);
      });

// ### End of Scroll to Top

// ### Story Tabs

var storytabs = document.getElementsByClassName("story-tabs");
var storyinfos = document.getElementsByClassName("story-infos")
function opentab(tabname){
  for(storytab of storytabs) {
    storytab.classList.remove("active-link");
  }
  for(storyinfo of storyinfos) {
    storyinfo.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ### End of Story Tabs