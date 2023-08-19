const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
function updateProgressBar() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progressPercentage}%`;
}

video.addEventListener('timeupdate', updateProgressBar);

// Skipping functionality
function skip() {
  const skipAmount = parseFloat(this.dataset.skip);
  video.currentTime += skipAmount;
}

skipButtons.forEach(button => button.addEventListener('click', skip));

// Volume and playback speed functionality
function handleVolumeChange() {
  video.volume = this.value;
}

function handlePlaybackSpeedChange() {
  video.playbackRate = this.value;
  speedBar.textContent = this.value + 'x';
}

volumeSlider.addEventListener('change', handleVolumeChange);
volumeSlider.addEventListener('mousemove', handleVolumeChange);

playbackSpeedSlider.addEventListener('change', handlePlaybackSpeedChange);
playbackSpeedSlider.addEventListener('mousemove', handlePlaybackSpeedChange);