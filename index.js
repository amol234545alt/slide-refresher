function set() {
    document.getElementById("frame").src = (new URLSearchParams(location.search)).get('src')
}
setInterval(set,1000)
set()