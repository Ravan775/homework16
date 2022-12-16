function selectHero() {
    var characters = document.getElementById('characters').value
    document.getElementById('hero').src = "img/" + characters + ".png"
}