var sortli = document.querySelectorAll(".sort li")
for (var i = 0; i < sortli.length; i++) {
    sortli[i].onclick = function () {
        for (var j = 0; j < sortli.length; j++) {
            sortli[j].children[0].style.color = '#222'
            sortli[j].children[0].style.borderBottom = "1px solid transparent"
        }
        var a = this.children[0];
        console.log(a)
        a.style.color = '#00a1d6'
        a.style.borderBottom = "1px solid #00a1d6"
    }
}