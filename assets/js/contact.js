
/* =========================================
   CONTACT FAQ ACCORDION
========================================= */

document.querySelectorAll(".contact-faq__question").forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = this.closest(".contact-faq__item");

        document.querySelectorAll(".contact-faq__item").forEach(function (item) {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        currentItem.classList.toggle("active");

    });

});

