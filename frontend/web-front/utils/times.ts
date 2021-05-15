export const sec2time = (sec: number) => {
  var pad = function (num: number, size: number) {
      return ("0" + num).slice(size * -1)
    },
    minutes = Math.floor(sec / 60) % 60,
    seconds = Math.floor(sec - minutes * 60)
  return pad(minutes, 2) + ":" + pad(seconds, 2)
}
