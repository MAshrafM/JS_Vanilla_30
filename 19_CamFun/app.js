"use strict";
(function(){
  const video = document.querySelector('.player');
  const canvas = document.querySelector('.photo');
  const ctx = canvas.getContext('2d');
  const strip = document.querySelector('.strip');
  const snap = document.querySelector('.snap');

  function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        console.log(localMediaStream);
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
      })
      .catch(err => {
        console.error(`OH NO!!!`, err);
      });
  }

  function paintToCanavas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 16);
  }

  function takePhoto() {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome" />`;
    strip.insertBefore(link, strip.firsChild);
  }

  getVideo();

  video.addEventListener('canplay', paintToCanavas);
  document.querySelector("button").addEventListener("click", takePhoto);
})();