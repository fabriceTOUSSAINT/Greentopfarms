$(document).ready(function ($) {
  const pagesAttr = document.querySelectorAll("[data-link-id='contact-us']");
  console.log({ pagesAttr });
  const hasContactUs = pagesAttr && pagesAttr.length > 0;

  if (hasContactUs) {
    pagesAttr.forEach((page) => {
      console.log({ page });
      page.classList.add("is-contact-button");
    });
  }
});
