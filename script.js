///////////////////////////////////////
////////////FOR FEAUTURES SLIDER/////////
///////////////////////////////////////

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const slides = document.querySelectorAll(".features__slider--card");

let currentSlide = 0;
// const maxSlide = slides.length - 1; // Update maxSlide to the actual number of slides

let maxSlide = slides.length - 1; // Update maxSlide to the actual number of slides

let screenWidth = window.innerWidth;

// Verificar si la pantalla es pequeña y realizar acciones específicas
if (screenWidth <= 1000) {
  maxSlide++;
}
if (screenWidth <= 900) {
  maxSlide++;
}
if (screenWidth <= 700) {
  maxSlide++;
}

slides.forEach((s, i) => {
  s.style.transform = `translateX(${0 * i}%)`;
});

// Next Slide -> Moving from left to right
btnRight.addEventListener("click", function () {
  if (currentSlide < maxSlide) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  updateSlider();
});

// Previous Slide -> Moving from right to left
btnLeft.addEventListener("click", function () {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = maxSlide;
  }

  updateSlider();
});

function updateSlider() {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${-60 * currentSlide}%)`;
  });
}

///////////////////////////////////////
////////////FOR REVIEWS SLIDER/////////
///////////////////////////////////////

const reviewSlides = document.querySelectorAll(".reviews__slide");

const dotContainer = document.querySelector(".reviews__dots");

const goToSlide = function (slide) {
  reviewSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide) + 50}%)`)
  );
};

//EVENT DELEGATION WITH DOT CONTAINER//
const createDots = function () {
  reviewSlides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="reviews__dot" data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDot = function (slide) {
  document.querySelectorAll(".reviews__dot").forEach((dot) => {
    dot.classList.remove("reviews__dot--active");
  });

  //ACTIVATING THE CORRECT DOT
  document
    .querySelector(`.reviews__dot[data-slide="${slide}"]`)
    .classList.add("reviews__dot--active");
};
activateDot(1);

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("reviews__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

///////////////////////////////////////////////////
////////////FOR FIND MORE ARTICLE <BUTTON>/////////
///////////////////////////////////////////////////

const moreArticlesBtn = document.querySelector(".find__more-articles-btn");
const articles = document.querySelectorAll(".find__article");

let showMoreArticles = false;
moreArticlesBtn.addEventListener("click", function () {
  showMoreArticles = !showMoreArticles;
  console.log(showMoreArticles);

  showMoreArticles
    ? (moreArticlesBtn.textContent = "Hide Articles")
    : (moreArticlesBtn.textContent = "More Articles");

  articles.forEach((article, i) => {
    if (i > 2 && showMoreArticles) {
      article.classList.remove("find__article--hide");
    } else if (i > 2 && !showMoreArticles) {
      article.classList.add("find__article--hide");
    }
  });
});

////////////////////////////////////////////////////////////
////////////FOR FIND MORE ARTICLE CHANGING ARTICLES/////////
////////////////////////////////////////////////////////////

const articlesContainer = document.querySelector(".find__articles");
const displayCloneContainer = document.querySelector(".find__display-clone");

articlesContainer.addEventListener("click", function (e) {
  //using the closest method to find the closest ancestor of the clicked element
  const clickedArticle = e.target.closest(".find__article");

  if (clickedArticle) {
    //creating a deep clone of the article element
    const articleClone = clickedArticle.cloneNode(true);

    // Update class names for the cloned article
    articleClone.classList.remove("find__article");
    articleClone.classList.add("find__display-clone");

    // targeting indivual elements on the cloned article
    const imgClone = articleClone.querySelector(".find__article-img");
    imgClone.classList.remove("find__article-img");
    imgClone.classList.add("find__img-clone");

    const detailsClone = articleClone.querySelector(".find__article-details");
    detailsClone.classList.remove("find__article-details");
    detailsClone.classList.add("find__article-details-clone");

    const ownerClone = articleClone.querySelector(
      ".find__article-details--owner"
    );
    ownerClone.classList.remove("find__article-details--owner");
    ownerClone.classList.add("find__article-details--owner-clone");

    const ownerPhotoClone = articleClone.querySelector(
      ".find__article-details--owner-photo"
    );
    ownerPhotoClone.classList.remove("find__article-details--owner-photo");
    ownerPhotoClone.classList.add("find__article-details--owner-photo-clone");

    const ownerNameClone = articleClone.querySelector(
      ".find__article-details--owner-name"
    );
    ownerNameClone.classList.remove("find__article-details--owner-name");
    ownerNameClone.classList.add("find__article-details--owner-name-clone");

    const nameClone = articleClone.querySelector(
      ".find__article-details--name"
    );
    nameClone.classList.remove("find__article-details--name");
    nameClone.classList.add("find__article-details--name-clone");

    const contentClone = articleClone.querySelector(
      ".find__article-details--article-content"
    );
    contentClone.classList.remove("find__article-details--article-content");
    contentClone.classList.add("find__article-details--article-content-clone");

    const dateClone = articleClone.querySelector(
      ".find__article-details--date"
    );
    dateClone.classList.remove("find__article-details--date");
    dateClone.classList.add("find__article-details--date-clone");

    // clearing the content of the display container and append the cloned article
    displayCloneContainer.innerHTML = "";
    displayCloneContainer.appendChild(articleClone);
  }
});

///////////////////////////////////////
////////////FOR JOINING INPUTS/////////
///////////////////////////////////////

const message = document.querySelector(".join__input--message");
const lettersCount = document.querySelector(
  ".join__input--message-letters-count"
);

const maxLength = 500; // Set the maximum length

message.value = "";
message.addEventListener("input", function () {
  let charactersCounter = message.value.length;

  if (charactersCounter > maxLength) {
    // Trim the input value to the maximum length
    message.value = message.value.substring(0, maxLength);
    charactersCounter = maxLength;
  }

  lettersCount.textContent = `${charactersCounter}/${maxLength}`;
});

////FOR GREEN CONSENT INPUT /////
const consentCheckbox = document.querySelector(".join__input--consentment");
const greenBox = document.querySelector(".join__input--consentment--green-bg");
const palomita = document.querySelector(
  ".join__input--consentment--palomita-icon"
);

const checkBoxParent = document.querySelector(".join__consentment");

let isConsent = false;

checkBoxParent.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("join__input--consentment") ||
    e.target.classList.contains("join__input--consentment--green-bg") ||
    e.target.classList.contains("join__input--consentment--palomita-icon")
  ) {
    isConsent = !isConsent;
    console.log(isConsent);
  }

  consentCheckbox.checked = isConsent;
  greenBox.style.display = isConsent ? "block" : "none";
  palomita.style.display = isConsent ? "block" : "none";
});

////COOCKIES///

// Coockies remove label

const crossIcon = document.querySelector(".coockies__cross-icon");
const coockiesDiv = document.getElementById("cookiesDiv");

crossIcon.addEventListener("click", function () {
  coockiesDiv.style.display = "none";
});

////////SHOWING MENU/////
let isShowingMenu = false;
const burguerIcon = document.querySelector(".header__burger-icon");
const navigationCrossIcon = document.querySelector(".header__cross-icon");
const navigation = document.querySelector(".navigation");
const bodyContainer = document.body;

burguerIcon.addEventListener("click", function () {
  isShowingMenu = true;
  console.log("burger clicked");

  if (isShowingMenu) {
    navigation.classList.add("navigation__visible");
    bodyContainer.style.overflow = "hidden";
  }
});

navigationCrossIcon.addEventListener("click", function () {
  isShowingMenu = false;
  if (!isShowingMenu) {
    navigation.classList.remove("navigation__visible");
    bodyContainer.style.overflow = "visible";
  }
});
