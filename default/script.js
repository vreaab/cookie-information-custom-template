/**
                Template name: Overlay v2 - Google Consent Mode v2
                URI: https://cookieinformation.com
                Version 1.0.0
                **/

var coiOverlay = document.getElementById("coiOverlay");
var wrapper = document.getElementById("coi-banner-wrapper");
var renewBtn = document.getElementById("Coi-Renew");
var purposesList = document.getElementsByClassName("coi-purpose-list");
var coiExpandBtn = document.getElementById("coi-expand");

coiExpandBtn.onclick = function () {
  wrapper.classList.add("coi_expanded");
};

//Check the users screen size, ,if it is under 576px, enable "expand" button
var w = document.documentElement.clientWidth || window.innerWidth;
if (w >= 576) {
  coiExpandBtn.disabled = true; //user is on desktop
  coiExpandBtn.setAttribute("tabindex", -1);
} else {
  coiExpandBtn.disabled = false; // user is on mobile
  coiExpandBtn.setAttribute("tabindex", 0);
}

/* LOGO FUNCTION START */
(function () {
  var imagePath = ""; // Change this to your own logo URL
  var container = document.getElementsByClassName("coi-banner__footer");

  if (imagePath) {
    for (var i = 0; i < container.length; i++) {
      var logo = document.createElement("img");
      logo.style.width = "180px"; // Change width for better fit
      logo.src = imagePath;
      logo.alt = "logo";
      container[i].insertBefore(logo, container[i].childNodes[0]);
    }
  } else {
    for (var i = 0; i < container.length; i++) {
      var logo = document.createElement("span");
      logo.setAttribute("aria-hidden", "true");
      container[i].insertBefore(logo, container[i].childNodes[0]);
    }
  }
})();
/* LOGO FUNCTION END */

/* ADD GOOGLE POLICY LINK */
(function () {
  var language = window.CookieInformation._getDataCulture();
  var policyLink = document.querySelector(
    ".coi-banner__summary a.coi-banner__google-privacy-policy"
  );
  policyLink.href = "https://policies.google.com/privacy" + "?hl=" + language;
  policyLink.target = "_blank";
  policyLink.setAttribute("rel", "noopener noreferrer");
})();

function insertPurposesInList() {
  if (purposesList) {
    for (var i = 0; i < purposesList.length; i++) {
      var purposesElements = document.getElementById(
        "coi-banner-categories"
      ).innerHTML;
      purposesList[i].innerHTML = purposesElements;
    }
  }
}

function trapFocusInModal(modal) {
  modal = document.getElementById(modal);
  var focusableEl = modal.querySelectorAll(
    'button:not([disabled]), a[href]:not([disabled]), input:not([disabled]), select, textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  var firstFocusableEl = focusableEl[0];
  var lastFocusableEl = focusableEl[focusableEl.length - 1];
  var KEYCODE_TAB = 9;
  wrapper.focus();

  function ctlFocus(e) {
    var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;
    if (!isTabPressed) {
      console.log("Tab not pressed");
      return;
    }
    if (e.shiftKey) {
      /* shift + tab */ if (document.activeElement === firstFocusableEl) {
        console.log("First element");
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } /* tab */ else {
      if (document.activeElement === lastFocusableEl) {
        console.log("last element");
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
    document.activeElement.scrollIntoView();
  }
  if (window.addEventListener) {
    console.log("Event listener added");
    modal.addEventListener("keydown", ctlFocus);
  } else if (document.attachEvent) {
    // IE
    modal.attachEvent("onkeydown", ctlFocus);
  } else {
    modal.addEventListener("keydown", ctlFocus);
  }
}

function checkState() {
  var checked = document.querySelectorAll(
    ".coi__checkbox:not(#cookie_cat_necessary):checked"
  );
  if (checked.length > 0) {
    setConsentOption(true);
  } else {
    setConsentOption(false);
  }
}
var checkboxes = document.querySelectorAll(
  ".coi__checkbox:not(#cookie_cat_necessary)"
);
for (var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function (el) {
    checkState();
  });
}

function setConsentOption(state) {
  var updateButton = document.getElementById("updateButton");
  var declineButton = document.getElementById("declineButton");

  if (state) {
    declineButton.style.display = "none";
    declineButton.setAttribute("tabindex", -1);
    updateButton.style.display = "flex";
    updateButton.setAttribute("tabindex", 0);
    updateButton.setAttribute("role", "alert");
    updateButton.setAttribute("aria-atomic", "true");
    declineButton.removeAttribute("role");
  } else {
    updateButton.style.display = "none";
    updateButton.setAttribute("tabindex", -1);
    declineButton.style.display = "flex";
    declineButton.setAttribute("tabindex", 0);
    declineButton.setAttribute("role", "alert");
    declineButton.setAttribute("aria-atomic", "true");
    updateButton.removeAttribute("role");
    updateButton.removeAttribute("aria-atomic");
  }
}

//Toggles the menu tabs in banner
function TogglePage(id, element) {
  var i, tabcontent, tablinks;
  wrapper.classList.add("coi_expanded");
  tabcontent = document.getElementsByClassName("coi-banner__page");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="coi-banner-tab" and remove the class "active"
  tablinks = document.getElementsByClassName("coi-banner__nextpage");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(element).style.display = "block";
  trapFocusInModal(element);
  id.className += " activeTab";
}

function toggleDetails(id) {
  var categorieWrapper = document.getElementById(
    "coiConsentBannerCategoriesWrapper"
  );
  var coiShowDetails = document.getElementById("show_details");
  var coiHideDetails = document.getElementById("hide_details");
  var CoiCategory = document.querySelectorAll(
    ".coi-consent-banner__category-name"
  );
  var CoiCategoryTab = document.querySelectorAll(
    ".coi-consent-banner__description-container"
  );
  var coiBannerWrapper = document.getElementsByClassName("coi-banner__wrapper");

  if (id === "show_details") {
    coiShowDetails.style.display = "none";
    coiShowDetails.setAttribute("tabindex", -1);
    coiHideDetails.style.display = "block";
    coiHideDetails.setAttribute("tabindex", 0);

    categorieWrapper.style.display = "block";
    categorieWrapper.setAttribute("aria-hidden", "false");
    for (var i = 0; i < CoiCategory.length; i++) {
      CoiCategory[i].setAttribute("tabindex", 0);
    }
    CoiCategory[0].focus();
  } else {
    coiShowDetails.style.display = "block";
    coiShowDetails.setAttribute("tabindex", 0);
    coiHideDetails.style.display = "none";
    coiHideDetails.setAttribute("tabindex", -1);

    categorieWrapper.style.display = "none";
    categorieWrapper.setAttribute("aria-hidden", "true");
    for (var i = 0; i < CoiCategory.length; i++) {
      CoiCategory[i].setAttribute("tabindex", -1);
      CoiCategory[i].classList.remove("ci-btn-tab-active");
    }
    for (var i = 0; i < CoiCategoryTab.length; i++) {
      if (CoiCategoryTab[i].classList.contains("tab-panel-active")) {
        CoiCategoryTab[i].classList.remove("tab-panel-active");
      }
    }
    coiShowDetails.focus();
  }
}

function toggleCookieDetails(btn, tab) {
  var tabContent = document.getElementById(tab);
  btn.classList.toggle("ci-btn-tab-active");
  if (btn.getAttribute("aria-expanded") === "false") {
    btn.setAttribute("aria-expanded", "true");
  } else {
    btn.setAttribute("aria-expanded", "false");
  }

  tabContent.classList.toggle("tab-panel-active");
  if (tabContent.getAttribute("aria-hidden") === "false") {
    tabContent.setAttribute("aria-hidden", "true");
  } else {
    tabContent.setAttribute("aria-hidden", "false");
  }

  if (!tabContent.classList.contains("tab-panel-active")) {
    var links = tabContent.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("tabindex", -1);
    }
  } else {
    var links = tabContent.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute("tabindex", 0);
    }
  }
}

coiOverlay.addEventListener(
  "click",
  function (e) {
    if (e.target == this) {
      e.preventDefault;
      wrapper.classList.remove("ci-bounce");
      wrapper.offsetWidth = coiOverlay.offsetWidth;
      wrapper.classList.add("ci-bounce");
    }
  },
  false
);

function togglePlaceholderElementsOnConsent() {
  var consentplaceholders = document.getElementsByClassName(
    "consent-placeholder"
  );
  if (consentplaceholders) {
    for (var i = 0; i < consentplaceholders.length; i++) {
      if (
        !CookieInformation.getConsentGivenFor(
          consentplaceholders[i].getAttribute("data-category")
        )
      ) {
        consentplaceholders[i].style.display = "block";
      } else {
        consentplaceholders[i].style.display = "none";
      }
    }
  }
}

function setNoScroll(state) {
  var htmlElement = document.getElementsByTagName("html")[0];
  if (state) {
    htmlElement.classList.add("noScroll");
  } else {
    htmlElement.classList.remove("noScroll");
  }
}

//Renew link modifier
try {
  var linkR = document.getElementsByClassName("coi-renew-link")[0];
  var buttonR = document.getElementsByClassName("coi-renew-button")[0];
  if (buttonR != undefined) {
    buttonR.href = "javascript:TogglePage(this, 'coiPage-1')";
  } else if (linkR != undefined) {
    linkR.href = "javascript:TogglePage(this, 'coiPage-1')";
  }
} catch (error) {
  console.log(error);
}
//Maintain anchor link URL(MAL feature)
/*var firstOpen = false;
                function fetchCookie(name){
                  var parts=("; "+document.cookie).split("; "+name+"=");
                  if(2==parts.length){
                    return parts.pop().split(";").shift()
                  }
                }
                */

// Show and Hides the banner
function showCookieBanner() {
  // firstOpen = fetchCookie('CookieInformationConsent') === undefined;  MAL feature

  insertPurposesInList();
  coiOverlay.style.display = "flex";
  setNoScroll(true);
  wrapper.setAttribute("aria-hidden", "false");
  coiOverlay.setAttribute("aria-hidden", "false");
  setTimeout(function () {
    trapFocusInModal("coiPage-1");
  }, 100);
  checkState();

  renewBtn.style.display = "none";
  togglePlaceholderElementsOnConsent();
}

function hideCookieBanner() {
  wrapper.setAttribute("aria-hidden", "true");
  coiOverlay.setAttribute("aria-hidden", "true");
  coiOverlay.style.display = "none";
  setNoScroll(false);

  renewBtn.style.display = "block";
  togglePlaceholderElementsOnConsent();
  // if (firstOpen) {window.location.href = window.location.href}; MAL feature
}
