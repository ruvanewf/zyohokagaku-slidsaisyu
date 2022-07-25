let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://pbs.twimg.com/media/FGaONSWVgAQdhME?format=jpg&name=large",
"https://pbs.twimg.com/media/FFCwT89aIAMdKr_?format=jpg&name=large",
"https://pbs.twimg.com/media/FNflWlnaAAsexd1?format=jpg&name=large",
"https://pbs.twimg.com/media/FHdOXFUaUAA4ZZz?format=jpg&name=large",
"https://pbs.twimg.com/media/FKl-KLyacAI2KUD?format=jpg&name=large",
"https://pbs.twimg.com/media/FFhuHvwVcAYB5D9?format=jpg&name=large",
"https://pbs.twimg.com/media/FD6o_3xakAA8w0v?format=jpg&name=large",
"https://pbs.twimg.com/media/FBlTPXjVkAYFTnr?format=jpg&name=large",
"https://pbs.twimg.com/media/FBaKOScUcAMyCRF?format=jpg&name=large",
"https://pbs.twimg.com/media/FXiwEwnacAAKVWP?format=jpg&name=large",
"https://pbs.twimg.com/media/E8gUVRAVcAEEklh?format=jpg&name=large",
"https://pbs.twimg.com/media/E5stPF_VIAAbMLw?format=jpg&name=large",
"https://pbs.twimg.com/media/E5CTgnqUYAIrJp_?format=jpg&name=large",
"https://pbs.twimg.com/media/FXyzvo_aIAAdn8w?format=jpg&name=large",
"https://pbs.twimg.com/media/FXtdF7haUAAFRO5?format=jpg&name=large",
"https://pbs.twimg.com/media/E7mhXq1VIAAwpbL?format=jpg&name=large",
"https://pbs.twimg.com/media/FWvuxG3UUAABhXY?format=jpg&name=large",
"https://pbs.twimg.com/media/FWvq5RtUIAACOqU?format=jpg&name=large",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 500);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
