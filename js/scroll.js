const headerTextElements = document.querySelectorAll(
  "header .header-text, header .header-text2, header .header-text3, header .text4"
);
const chevron = document.querySelector(".fa-chevron-down");
const content = document.querySelector(".content");
const bioFutureParagraph = document.querySelector(".bio-future p");
const bioSection = document.querySelector(".bio-section");

window.addEventListener("scroll", function () {
  // Calculate the transform for the content based on scroll position
  const translateYValueContent = window.scrollY / 1.5;

  // Calculate the transform for the text based on scroll position
  const translateYValueText = window.scrollY / 2.5;

  // Apply the transform to each text element inside the header using translate3d
  headerTextElements.forEach((textElement) => {
    textElement.style.transform = `translate3d(0, -${translateYValueText}px, 0)`;
  });

  // Apply the transform to the chevron using translate3d
  chevron.style.transform = `translate3d(0, ${translateYValueContent}px, 0)`;

  // Apply the transform to the content container using translate3d
  content.style.transform = `translate3d(0, ${translateYValueContent}px, 0)`;

  // Adjust the z-index based on scroll position
  if (window.scrollY > 50) {
    content.style.zIndex = "3";
  } else {
    content.style.zIndex = "1";
  }

  // Adjust the line-height of .bio-future p based on scroll position
  const bioSectionTop = bioSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (bioSectionTop < windowHeight && bioSectionTop > 0) {
    const percentageVisible = (windowHeight - bioSectionTop) / windowHeight;
    const newLineHeight = 5 + percentageVisible * (25 - 5);
    bioFutureParagraph.style.lineHeight = `${newLineHeight}px`;
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
