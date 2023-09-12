
const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion__title");
    const content = item.querySelector(".accordion__content");

    title.addEventListener("click", () => {
        // Check if the clicked item is already active
        const isActive = item.classList.contains("accordion__active");

        // Close all accordion items
        accordionItems.forEach((item) => {
            item.classList.remove("accordion__active");
            item.querySelector(".accordion__content").style.display = "none";
        });

        // If the clicked item was not active, open it
        if (!isActive) {
            item.classList.add("accordion__active");
            content.style.display = "block";
        }
    });
});