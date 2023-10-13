const headerTextElements = document.querySelectorAll(
  "header .header-text, header .header-text2, header .header-text3, header .text4, header h1"
);
const chevron = document.querySelector(".fa-chevron-down");
const content = document.querySelector(".content");

window.addEventListener("scroll", function () {
  // Calculate the transform for the content based on scroll position
  const translateYValueContent = window.scrollY / 1.5;

  // Calculate the transform for the text based on scroll position
  const translateYValueText = window.scrollY / 2.5;

  // Apply the transform to each text element inside the header
  headerTextElements.forEach((textElement) => {
    textElement.style.transform = `translateY(-${translateYValueText}px)`;
  });

  // Apply the transform to the chevron to move at the same speed as the content
  chevron.style.transform = `translateY(${translateYValueContent}px)`;

  // Apply the transform to the content container
  content.style.transform = `translateY(${translateYValueContent}px)`;

  // Adjust the z-index based on scroll position
  if (window.scrollY > 50) {
    content.style.zIndex = "3";
  } else {
    content.style.zIndex = "1";
  }
});

const iframeDivs = document.querySelectorAll(".soundcloud > div");
const iframes = document.querySelectorAll(".soundcloud iframe");

function addHoverListeners(element, relatedElement) {
  element.addEventListener("mouseover", () => {
    element.style.opacity = "1";
    relatedElement.style.opacity = "1";
  });

  element.addEventListener("mouseout", () => {
    element.style.opacity = "0.5";
    relatedElement.style.opacity = "0.5";
  });
}

iframeDivs.forEach((div, index) => {
  addHoverListeners(div, iframes[index]);
  addHoverListeners(iframes[index], div);
});
const spotifyDiv = document.querySelector(".spotify");
const spotifyIframe = document.querySelector(".iframe-spotify");

function addHoverListenersForSpotify(element, relatedElement) {
  element.addEventListener("mouseover", () => {
    element.style.opacity = "1";
    relatedElement.style.opacity = "1";
  });

  element.addEventListener("mouseout", () => {
    element.style.opacity = "0.5";
    relatedElement.style.opacity = "0.5";
  });
}

addHoverListenersForSpotify(spotifyDiv, spotifyIframe);
addHoverListenersForSpotify(spotifyIframe, spotifyDiv);
