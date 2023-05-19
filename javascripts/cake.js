// cursor icon and background music

function switch_cursor() {
    const bgm = document.querySelector("#bgm");
    if (!(this.switched)) {
      document.body.style.cursor = "url('assets/clef.png') 20 20, auto";
      bgm.play();
      this.switched = true;
    } else {
      document.body.style.cursor = "url('assets/magic-cursor.png') 20 20, auto";
      bgm.pause();
      this.switched = false;
    }
  }
  
  window.addEventListener('long-press', switch_cursor);

  // cache cake title and update accordingly
  function cache_cake_title_change() {
    document.querySelector('#cake-title').addEventListener("focusout", (e) => {
      localStorage.setItem("cake-title", e.target.textContent);
    });
  }
  cache_cake_title_change();

  let cake_title = localStorage.getItem('cake-title');
if (cake_title)
  document.querySelector('#cake-title').textContent = cake_title;

  // game

  /*
 * Represent a discrete hour glass which triggers some specified action after being activated some specified number of times. 
 */
class HourGlass {
    constructor(times, action) {
     if (!Number.isInteger(times) || times < 1) {
         throw "times must be an integer greater than 0";
     } 
     if (!(action instanceof Function)) {
         throw "action must be a function";
     }
     this.times = times;
     this.action = action;
    }
 
    activate() {
     this.times -= 1;
     if (this.times === 0) {
         this.action();
     }
    }
 }

// instructions begin
const isCandlesOn = new Array(6).fill(false);
const COLOR_LIGHTING_CANDLE = "#f79347";
const COLOR_UNLIGHT_CANDLE = "#c0c0c0";
const ACTION_LIMIT = 7;
const hourGlass = new HourGlass(ACTION_LIMIT, () => {
    alert("由于点燃次数太多蛋糕爆炸了💥💥💥")
    window.location.href = "https://wwwwwwwww.jodi.org/100cc/hqx/i900.html"
});
// window.onload = () => setTimeout(() => alert("谜题：点燃所有🕯️"), 3000);

function lightCandle(index) {
    const candle = document.getElementById(`candle_${index}`);
    candle.style.color = COLOR_LIGHTING_CANDLE;
    for (let flame of document.getElementsByClassName(`flame_${index}`)) {
        flame.style.color = COLOR_LIGHTING_CANDLE;
    }
    isCandlesOn[index] = true;
    console.log(isCandlesOn);
}

function extinguishCandle(index) {
    const candle = document.getElementById(`candle_${index}`);
    candle.style.color = COLOR_UNLIGHT_CANDLE;
    for (let flame of document.getElementsByClassName(`flame_${index}`)) {
        flame.style.color = COLOR_UNLIGHT_CANDLE;
    }
    isCandlesOn[index] = false;
    console.log(isCandlesOn);
}

function touchCandle(event) {
    const candle = event.target;
    const index = parseInt(candle.id.charAt(candle.id.length - 1));
    if (!isCandlesOn[index]) {
        lightCandle(index);
        if (index === 0) {
            // do nothing 
        } else if ([1,2].includes(index)) {
            extinguishCandle(index - 1);
        } else if (index === 3) {
            extinguishCandle(index - 1);
            extinguishCandle(index + 1);
        } else if ([4,5].includes(index)) {
            extinguishCandle((index + 1) % 6);
        } else {
            console.error(`Invalid candle index ${index}`);
        }
    } else {
        extinguishCandle(index);
    }
    if (isCandlesOn.reduce((acc,val) => acc && val)) {
        alert("10, 9, 8, ...");
        document.querySelector("#secret").style.visibility = "visible";
        window.setTimeout(() => window.location.href = "gift.html",7_000);
        return;
    }
    hourGlass.activate();
}

// Add click listener for candles
const candles = document.getElementsByClassName("candle");
for (let i=0; i<candles.length; ++i) {
    const candle = candles[i];
    candle.addEventListener("click", touchCandle);
}