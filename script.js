function react(button) {
  const span = button.querySelector('span');
  let count = parseInt(span.textContent, 10);
  span.textContent = count + 1;
}

// Pausar otros videos cuando uno empieza a reproducirse
const videos = document.querySelectorAll("video");
videos.forEach(video => {
  video.addEventListener("play", () => {
    videos.forEach(v => {
      if (v !== video) v.pause();
    });
  });
});

