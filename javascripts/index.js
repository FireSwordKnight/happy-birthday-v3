function play_bgm() {
  const bgm = document.querySelector("#bgm");
  if (bgm.paused) {
    bgm.play()
  } 

  clearTimeout(this.timeout);
  this.timeout = setTimeout(() => {
    bgm.pause();
  }, 1000);
}

function switch_cursor() {
  if (!(this.switched)) {
    document.body.style.cursor = "url('/assets/baton-2-cursor.png'), auto";
    window.addEventListener('mousemove', play_bgm);
    this.switched = true;
  } else {
    document.body.style.cursor = "url('/assets/magic-cursor.png') 20 20, auto";
    window.removeEventListener('mousemove', play_bgm);
    this.switched = false;
  }
}

window.addEventListener('long-press', switch_cursor);

setTimeout(() => {
  alert("꒰๑´•.̫ • `๑꒱: 好久不见, 异界的旅客...");
  setTimeout(() => {
    alert("꒰๑´•.̫ • `๑꒱: 有个好消息。🪄似乎变得更强大了, 甚至拥有了多种形态...");
    setTimeout(() => {
      alert("꒰๑´•.̫ • `๑꒱: 别指望我会告诉你怎么做...");
    }, 3000);
  }, 3000);
}, 3000);
