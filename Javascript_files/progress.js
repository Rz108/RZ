/*
Author: Goh Rui Zhuo
Date:   07/20/2022

Filename:progress.js

*/
//Develop the back to top button
var showOnPx = 100;
var backToTopButton = document.querySelector(".BackToTop");
var pageProgressBar = document.querySelector(".progress-bar");
//putting all in a class 
class backToTop {
    scrollToTop() {
        return document.documentElement || document.body;
    };
    goToTop() {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };
    //to add the scroll and update the back to top button and progress bar
    add() {
        document.addEventListener("scroll", () => {
            var percentage =
                (this.scrollToTop().scrollTop /
                    (this.scrollToTop().scrollHeight - this.scrollToTop().clientHeight)) *
                100;
            console.log(percentage)
            pageProgressBar.style.width = `${percentage}%`;

            if (this.scrollToTop().scrollTop < showOnPx) {
                backToTopButton.classList.add("hidden");
            } else {
                backToTopButton.classList.remove("hidden");
            }
        });


        backToTopButton.addEventListener("click", this.goToTop);
    }

}
var BTT = new backToTop()
BTT.add()