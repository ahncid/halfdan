const headerTextElements = document.querySelectorAll(
  "header .header-text, header .header-text2, header .header-text3, header .text4"
);
const chevron = document.querySelector(".fa-chevron-down");
const content = document.querySelector(".content");
const bioFutureParagraphs = document.querySelectorAll(
  ".bio-future p, .bio-future2 p"
);
const bioSection = document.querySelector(".bio-section");

window.addEventListener("scroll", function () {
  const translateYValueContent = window.scrollY / 1.5;

  const translateYValueText = window.scrollY / 2.5;

  headerTextElements.forEach((textElement) => {
    textElement.style.transform = `translate3d(0, -${translateYValueText}px, 0)`;
  });

  chevron.style.transform = `translate3d(0, ${translateYValueContent}px, 0)`;

  content.style.transform = `translate3d(0, ${translateYValueContent}px, 0)`;

  if (window.scrollY > 50) {
    content.style.zIndex = "3";
  } else {
    content.style.zIndex = "1";
  }

  const bioSectionTop = bioSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (bioSectionTop < windowHeight && bioSectionTop > 0) {
    const percentageVisible = (windowHeight - bioSectionTop) / windowHeight;
    const newLineHeight = 1 + percentageVisible * (25 - 5);

    bioFutureParagraphs.forEach((paragraph) => {
      paragraph.style.lineHeight = `${newLineHeight}px`;
    });
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
