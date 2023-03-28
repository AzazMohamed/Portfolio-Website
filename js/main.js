// Navbar Toggle Btn
let navBar = document.querySelector("nav");
let navToggle = document.querySelector(".toggle-menu");
let linkList = document.querySelector("nav .links");

navToggle.addEventListener("click", () => {
  linkList.classList.toggle("clicked");
});

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    navBar.style.backgroundColor = "var(--bg-color)";
  } else {
    navBar.style.backgroundColor = "transparent";
  }
});

// Changing Background
let landingSec = document.querySelector(".landing");
let urls = ["../imgs/landing-1.jpg", "../imgs/landing-2.jpg"];

let landingInt = setInterval(() => {
  landingSec.style.backgroundImage = `url(${
    urls[Math.floor(Math.random() * urls.length)]
  })`;
}, 5000);

// Filling Skills On Scroll
let aboutSec = document.querySelector(".about");
let skillsProgressArray = Array.from(
  document.querySelectorAll(".skills > .skill > span > span")
);

let started = false;

window.addEventListener("scroll", () => {
  // Skills Offset Top
  let secOffsetTop = aboutSec.offsetTop;

  // Skills Outer Height
  let secOuterHeight = aboutSec.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > secOffsetTop + secOuterHeight - windowHeight) {
    skillsProgressArray.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
      skill.style.left = "0";
    });
  }
  acheivIncrease();
});

// Acheivement Increase Number

function returnTime(number) {
  if (number.parentElement.dataset.number > 100) {
    return 10;
  } else {
    return 100;
  }
}
function acheivIncrease() {
  let boxAcheivNumber = Array.from(
    document.querySelectorAll(".acheivements .box > .number > span")
  );
  let acheivSec = document.querySelector(".acheivements");

  if (!started) {
    // Skills Offset Top
    let secOffsetTop = acheivSec.offsetTop;

    // Skills Outer Height
    let secOuterHeight = acheivSec.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window Scroll Top
    let windowScrollTop = this.scrollY;

    if (windowScrollTop > secOffsetTop + secOuterHeight - windowHeight - 100) {
      boxAcheivNumber.forEach((number) => {
        let acheivInt = setInterval(() => {
          number.textContent++;
          if (number.textContent == number.parentElement.dataset.number) {
            clearInterval(acheivInt);
          }
        }, returnTime(number));
      });
      started = true;
    }
  }
}

// Show Images In Portfolio
let protfolioImages = Array.from(
  document.querySelectorAll(".recent-work .images .box img")
);
let zoomBtns = Array.from(
  document.querySelectorAll(".recent-work .images .box i")
);

zoomBtns.forEach((btn, index) => {
  let currentIndex = index;
  btn.onclick = () => {
    // Create Overlay
    let overlay = document.createElement("div");
    overlay.className = "overlay";

    // create Left Button
    let leftBtn = document.createElement("i");
    leftBtn.className = "fa-solid fa-chevron-left left-btn";
    if (index == 0) {
      leftBtn.style.display = "none";
    } else {
      leftBtn.style.display = "block";
    }

    // Create img Element
    let image = document.createElement("img");
    image.src = protfolioImages[index].src;

    // Right Button
    let rightBtn = document.createElement("i");
    rightBtn.className = "fa-solid fa-chevron-right right-btn";
    if (index + 1 == protfolioImages.length) {
      rightBtn.style.display = "none";
    } else {
      leftBtn.style.display = "block";
    }
    // Create Close Btn
    let closeBtn = document.createElement("i");
    closeBtn.className = "fa-solid fa-xmark close-btn";

    // Create content Div
    let contentDiv = document.createElement("div");
    contentDiv.className = "content-zoom";
    contentDiv.appendChild(leftBtn);
    contentDiv.appendChild(image);
    contentDiv.appendChild(rightBtn);
    contentDiv.appendChild(closeBtn);

    // Create div Container
    let divContainer = document.createElement("div");
    divContainer.className = "div-container";
    divContainer.appendChild(overlay);
    divContainer.appendChild(contentDiv);

    document.body.appendChild(divContainer);

    closeBtn.addEventListener("click", () => {
      document.querySelector(".div-container").remove();
    });

    rightBtn.onclick = () => {
      currentIndex++;
      image.src = protfolioImages[currentIndex].src;
      if (currentIndex + 1 == protfolioImages.length) {
        rightBtn.style.display = "none";
      } else {
        rightBtn.style.display = "block";
      }
      if (currentIndex == 0) {
        leftBtn.style.display = "none";
      } else {
        leftBtn.style.display = "block";
      }
    };

    leftBtn.onclick = () => {
      currentIndex--;
      image.src = protfolioImages[currentIndex].src;
      if (currentIndex == 0) {
        leftBtn.style.display = "none";
      } else {
        leftBtn.style.display = "block";
      }
      if (currentIndex + 1 == protfolioImages.length) {
        rightBtn.style.display = "none";
      } else {
        rightBtn.style.display = "block";
      }
    };
  };
});

// Questions appear
let questionDiv = Array.from(
  document.querySelectorAll(".questions .text .question")
);
let arrowIcon = Array.from(
  document.querySelectorAll(".questions .text .question i")
);

questionDiv.forEach((question) => {
  question.onclick = () => {
    dealActive(question);
  };
});

function dealActive(el) {
  if (el.classList.contains("active")) {
    el.classList.remove("active");
    return;
  }
  [...el.parentElement.children].forEach((child) => {
    child.classList.remove("active");
  });
  el.classList.add("active");
}

// Testimonials
let testimonialsUl = document.querySelector(".testimonials ul");
let rightBtnsTestimonials = Array.from(
  document.querySelectorAll(".testimonials ul li .quote i:last-child")
);

let leftBtnsTestimonials = Array.from(
  document.querySelectorAll(".testimonials ul li .quote i:first-child")
);

rightBtnsTestimonials.forEach((btn, index) => {
  btn.onclick = () => {
    let trans;
    if (index == 1) {
      trans = "-100%";
      testimonialsUl.style.transform = "translateX(" + trans + ")";
      rightBtnsTestimonials[index + 1].style.display = "none";
      return;
    } else {
      trans = "0";
      testimonialsUl.style.transform = "translateX(" + trans + ")";
    }
  };
});
leftBtnsTestimonials.forEach((btn, index) => {
  btn.onclick = () => {
    let trans;
    if (index == 1) {
      trans = "100%";
      testimonialsUl.style.transform = "translateX(" + trans + ")";
      leftBtnsTestimonials[index - 1].style.display = "none";
      return;
    } else {
      trans = "0";
      testimonialsUl.style.transform = "translateX(" + trans + ")";
    }
  };
});
