document.querySelectorAll(".action-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    card.style.transform = `perspective(600px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg) translateY(-3px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("transform");
  });
});
