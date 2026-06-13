const player = document.querySelector("#music-player");
const currentTrack = document.querySelector("#current-track");
const trackSelect = document.querySelector("#track-select");

function playTrack() {
  const selectedOption = trackSelect.selectedOptions[0];
  const trackId = selectedOption.value;
  const trackName = selectedOption.dataset.trackName;

  player.src =
    `https://music.163.com/outchain/player?type=2&id=${trackId}` +
    "&auto=1&height=66";
  currentTrack.textContent = trackName;
}

trackSelect.addEventListener("change", playTrack);
