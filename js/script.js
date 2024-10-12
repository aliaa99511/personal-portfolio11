

// portfolio
$('.portfolio-items').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
});

$(".portfolio-filter button").click(function () {
    $(".portfolio-filter button").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".portfolio-items").isotope({
        filter: selector
    });
    return false;
});

// Aside Navbar
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSelection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {

        // Remove back section class
        removeBackSectionClass();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // Add back section class
                addBackSectionClass(j);
            }

            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSectionClass() {
    for (let i = 0; i < totalSelection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSectionClass(num) {
    if (num >= 0 && num < totalSelection) {
        allSection[num].classList.add("back-section");
    }
}

function showSection(element) {
    for (let i = 0; i < totalSelection; i++) {
        allSection[i].classList.remove("active", "back-section");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");

        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
});

// Nav-toggler
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSelection; i++) {
        allSection[i].classList.toggle("open");
    }
}


////////////////////////////////////////////////////


// // portfolio
// $('.portfolio-items').isotope({
//     itemSelector: '.portfolio-item',
//     layoutMode: 'fitRows'
// });

// $(".portfolio-filter button").click(function () {
//     $(".portfolio-filter button").removeClass("active");
//     $(this).addClass("active");

//     var selector = $(this).attr("data-filter");
//     $(".portfolio-items").isotope({
//         filter: selector
//     });
//     return false
// });
// // portfolio


// //Aside Navbar
// const nav = document.querySelector(".nav"),
//     navList = nav.querySelectorAll("li"),
//     totalNavList = navList.length,
//     allSection = document.querySelectorAll(".section"),
//     totalSelection = allSection.length;


// for (let i = 0; i < totalNavList; i++) {
//     const a = navList[i].querySelector("a");
//     a.addEventListener("click", function () {

//         //remove back section class
//         removeBackSectionClass();

//         for (let j = 0; j < totalNavList; j++) {
//             if (navList[j].querySelector("a").classList.contains("active")) {
//                 //add back section class
//                 addBackSectionClass(j)

//             }

//             navList[j].querySelector("a").classList.remove("active");
//         }
//         this.classList.add("active");

//         showSection(this);

//         if (window.innerWidth < 1200) {
//             asideSectionTogglerBtn();
//         }
//     })
// }

// function removeBackSectionClass() {
//     for (let i = 0; i < totalSelection; i++) {
//         allSection[i].classList.remove("back-section");
//     }
// }

// function addBackSectionClass(num) {
//     allSection[num].classList.add("back-section");
// }

// function showSection(element) {
//     for (let i = 0; i < totalSelection; i++) {
//         allSection[i].classList.remove("active");
//     }

//     const target = element.getAttribute("href").split("#")[1];
//     document.querySelector("#" + target).classList.add("active")
// }

// function updateNav(element) {
//     for (let i = 0; i < totalNavList; i++) {
//         navList[i].querySelector("a").classList.remove("active");

//         const target = element.getAttribute("href").split("#")[1];
//         if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
//             navList[i].querySelector("a").classList.add("active");
//         }
//     }
// }

// document.querySelector(".hire-me").addEventListener("click", function () {
//     const sectionIndex = this.getAttribute("data-section-index")
//     showSection(this);
//     updateNav(this);
//     removeBackSectionClass();
//     addBackSectionClass(sectionIndex);
// })

// //nav-toggler
// const navTogglerBtn = document.querySelector(".nav-toggler"),
//     aside = document.querySelector(".aside");

// navTogglerBtn.addEventListener("click", () => {
//     asideSectionTogglerBtn();
// })

// function asideSectionTogglerBtn() {
//     aside.classList.toggle("open");
//     navTogglerBtn.classList.toggle("open");

//     for (let i = 0; i < totalSelection; i++) {
//         allSection[i].classList.toggle("open");
//     }
// }


