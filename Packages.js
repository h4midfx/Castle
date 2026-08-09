```javascript
/* =========================================================
   ⚔️ EMPIRE MARKET
   PACKAGE FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const categoryButtons =
        document.querySelectorAll(".category");

    const packageCards =
        document.querySelectorAll(".package-card");


    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedCategory =
                button.dataset.category;


            /* Remove active */

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* Add active */

            button.classList.add("active");


            /* Filter */

            packageCards.forEach(card => {

                const cardCategory =
                    card.dataset.category;


                if (
                    selectedCategory === "all" ||
                    cardCategory === selectedCategory
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================================
       PACKAGE BUTTONS
    ===================================================== */

    const packageButtons =
        document.querySelectorAll(".package-button, .buy-button");


    packageButtons.forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "اطلاعات خرید این پکیج به‌زودی اضافه می‌شود."
            );

        });

    });

});
```
