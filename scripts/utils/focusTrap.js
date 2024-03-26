function focusTrap(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", (evt) => {
    if (evt.key !== "Tab") return;

    if (evt.shiftKey) {
      if (evt.target === firstFocusableElement) {
        evt.preventDefault();
        lastFocusableElement.focus();
      }
    } else {
      if (evt.target === lastFocusableElement) {
        evt.preventDefault();
        firstFocusableElement.focus();
      }
    }
  });
}

export { focusTrap };
