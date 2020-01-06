var search = document.querySelector('.search')
search.onclick = function (e) {
    var emElement = e.target
    if (emElement.nodeName == "EM") {
        location.href = './index.html'
        console.log(123);

    }
}