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

// Cache door title
function cache_door_title_change() {
  document.querySelector('#door-title').addEventListener("focusout", (e) => {
    localStorage.setItem("door-title", e.target.textContent);
  });
}
cache_door_title_change();

// Update door title
let door_title = localStorage.getItem('door-title');
if (door_title)
  document.querySelector('#door-title').textContent = door_title;

// Dialog
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

if ( ! localStorage.getItem('visited') ) {
  wait(3000)
    .then(() => {
      alert("(*。∀。): 好久不见, 异界的旅客...");
      return wait(3000);
    })
    .then(() => {
      alert("(*。∀。): 我是...守门人");
      return wait(3000);
    })
    .then(() => {
      alert("(*。∀。): 有一些不算好的消息。你之前拿到的🪄似乎更加...诡异了, 甚至有了别的形态...我也不清楚具体是怎么一回事...");
      return wait(3000);
    })
    .then(() => {
      alert("(*。∀。): 门可以被起名字了, 我会尽力记住的...当然, 其他人不会知道...因为是本地存储...");
      return wait(3000);
    })
    .then(() => {
      alert("(*。∀。): 你下次来的时候我就不啰嗦了啊");
      localStorage.setItem('visited', 'true');
    })
    ;
}

