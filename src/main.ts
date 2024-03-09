const accordionHeaders = document.querySelectorAll("[data-accordion-header]");

Array.prototype.forEach.call(accordionHeaders, (accordionHeader) => {
  let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = (event: MouseEvent) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.dataset.toggleButton !== ""
    ) {
      let expanded =
        accordionHeader.getAttribute("aria-expanded") === "true" || false;
      accordionHeader.setAttribute("aria-expanded", String(!expanded));
      target.hidden = expanded;
    }
    event.stopPropagation();
  };
});

const toggleButtons = document.querySelectorAll("[data-toggle-button]");
console.log("🚀 ~ toggleButtons:", toggleButtons);

Array.prototype.forEach.call(toggleButtons, (toggleButton) => {
  toggleButton.onclick = () => {
    let checked = toggleButton.getAttribute("aria-checked") === "true" || false;
    toggleButton.setAttribute("aria-checked", !checked);
  };
});
