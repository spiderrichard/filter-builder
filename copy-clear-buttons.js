function copyFilter() {
  var filterText = document.getElementById('displayFilter'); // select the <p> element with the ID 'filter-text'
  var text = filterText.textContent; // get the text content of the element
  var tempInput = document.createElement('textarea'); // create a temporary <textarea> element
  tempInput.value = text; // set the value of the <textarea> element to the text content
  document.body.appendChild(tempInput); // append the <textarea> element to the <body> element
  tempInput.select(); // select the contents of the <textarea> element
  document.execCommand('copy'); // copy the selected contents to the clipboard
  document.body.removeChild(tempInput); // remove the <textarea> element from the <body> element
}

//Clears all selected checkboxes
function clearFilter() {
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }


//Changes button colours for 0.2 seconds on click
const copybutton = document.getElementById('copy-button');
const clearbutton = document.getElementById('clear-button');
const tutorialLink = document.getElementById('tutorial-link');
const searchTermLink = document.getElementById('search-term-link');

copybutton.addEventListener('click', function() {
  copybutton.classList.add('clicked');
  setTimeout(function() {
    copybutton.classList.remove('clicked');
  }, 200);
});

clearbutton.addEventListener('click', function() {
  clearbutton.classList.add('clicked');
  setTimeout(function() {
    clearbutton.classList.remove('clicked');
  }, 200);
});
 tutorialLink.addEventListener('click', function() {
 tutorialLink.classList.add('clicked');
  setTimeout(function() {
   tutorialLink.classList.remove('clicked');
  }, 200);
});
searchTermLink.addEventListener('click', function() {
  searchTermLink.classList.add('clicked');
   setTimeout(function() {
    searchTermLink.classList.remove('clicked');
   }, 200);
 });

/*Copied Notification display then hide after 1 second
function copiedNotification() {
  var section = document.getElementById("copied-notification");
  
  if (section.style.display !== "block") {
      section.style.display = "block";
    
  setTimeout(function() {
      section.style.display = "none";
    }, 2000);
  } else {
    section.style.display = "none";
  }
};
*/

function copiedNotification() {
  var section = document.getElementById("copied-notification");
  
  if (section.style.display !== "block") {
    section.style.display = "block";
    
    setTimeout(function() {
      section.style.transition = "opacity 2s";
      section.style.opacity = "0";
      
      setTimeout(function() {
        section.style.display = "none";
        section.style.opacity = "1";
      }, 2000);
    }, 1000);
  }
}

