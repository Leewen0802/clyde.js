var $loading = $('#loading')
var $progress = $('#progress')
var prg = 0
var timer = 0
var now = new Date() // 記錄當前時間
var timeout = 5000 // 超時時間
progress([80, 90], [1, 3], 100)
window.onload = () => {
complete()
}
if (now - loadingStartTime > timeout) { // 超時
complete()
} else {
window.setTimeout(() => { // 未超時，則等待剩餘時間
complete()
}, timeout - (now - loadingStartTime))
}
function complete () { // 封裝完成進度功能
progress(100, [1, 5], 10, () => {
window.setTimeout(() => {
$loading.hide()
}, 1000)
})
}
function progress (dist, speed, delay, callback) {
var _dist = random(dist)
var _delay = random(delay)
var _speed = random(speed)
window.clearTimeout(timer)
timer = window.setTimeout(() => {
if (prg   _speed >= _dist) {
window.clearTimeout(timer)
prg = _dist
callback && callback()
} else {
prg  = _speed
progress (_dist, speed, delay, callback)
}
$progress.html(parseInt(prg)   '%')
console.log(prg)
}, _delay)
}
function random (n) {
if (typeof n === 'object') {
var times = n[1] - n[0]
var offset = n[0]
return Math.random() * times   offset
} else {
return n
}
}