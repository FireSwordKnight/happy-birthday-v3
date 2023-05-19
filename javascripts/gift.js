// register gift handler
function getPresent() {
    const link = document.createElement('a');
    link.style.display = "none";
    link.href = "ecard.txt";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

const present_blocks = document.getElementsByClassName("art_box");
for (let block of present_blocks) {
    block.addEventListener("click", getPresent);
}

// cursor icon and background music

  function switch_cursor() {
        <img class="moon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="">
    const bgm = document.querySelector("#bgm");
    if (!(this.switched)) {
      document.body.style.cursor = "url('assets/clef.png'), auto";
      bgm.play();
      this.switched = true;
    } else {
      document.body.style.cursor = "url('assets/magic-cursor.png') 20 20, auto";
      bgm.pause();
      this.switched = false;
    }
  }
  
  window.addEventListener('long-press', switch_cursor);