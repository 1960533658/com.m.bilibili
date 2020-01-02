var webUl = document.querySelector('.webindex ul')
for (let i = 3; i <= 100; i++) {
    // 创建li
    var lis = document.createElement('li')
    webUl.appendChild(lis)

    // 创建a
    var a = document.createElement('a')
    a.href = 'javascript:;'
    lis.appendChild(a)
    // 创建div.img
    var div = document.createElement('div');
    div.className = "img"
    a.appendChild(div)
    // 创建p添加到a中
    var p = document.createElement('p')
    a.appendChild(p)
    var img = document.createElement('img')
    var divImg = document.querySelectorAll('.img')
    var divShow = document.createElement('div')
    for (var k = 2; k < divImg.length; k++) {
        // 创建img标签
        divImg[k].appendChild(img);
        img.src = '../upload/index' + i + '.webp';
        // 创建添加div.show
        divShow.className = "show"
        divImg[k].appendChild(divShow)
    }



    // console.log(divImg)
}


var showText = document.querySelectorAll('.show')
// console.log(showText.length)
for (var l = 2; l < 100; l++) {
    var str = "";
    str += `<div class="show-left fl">
        <svg id="icon-bofangshu" viewBox="0 0 1024 1024">
            <path
                d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z">
            </path>
            <path
                d="M684.8 483.2l-256-112c-22.4-9.6-44.8 6.4-44.8 28.8v224c0 22.4 22.4 38.4 44.8 28.8l256-112c25.6-9.6 25.6-48 0-57.6z">
            </path>
        </svg>
        <span>370.9万</span>
    </div>
    <div class=" show-right fl">
        <svg id="icon-danmushu" viewBox="0 0 1024 1024">
            <path
                d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z">
            </path>
            <path
                d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z">
            </path>
        </svg>
        <span>5554</span>
    </div>`

    showText[l].innerHTML = str

}

var indexWord = ["【朱一旦】 126 虽然凝视深渊，但依旧向往光明",
    "【明日方舟】COSPLAY史上最大规模制作白人集合【萧影】",
    "【才能做工】魔力钱到制作，究竟什么时还原看完你就明白",
    "【完整版MV】腾格尔最新《芒种》终于来啦！",
    "沙雕之极！愿意和你换这些情头的绝壁是真爱！",
    "两个百万UP住疯狂喷起来了，为了争夺陪玩小姐姐？",
    "100部董漫角色联手拯救世界！！！",
    "拳王争霸× 菜鸡互啄√",
    "天哪！2019年都发生了啥！",
    "万字《黑暗骑士》纯干货影评，[漫改四亿神作是如何]",
    "挡住猫头鹰的眼睛会发生什么？",
    "被无数人嘲笑的奥里给，其实是他对抗命运的怒吼",
    "刺客五六七《下山》粤语撩妹版",
    "【英文原创】初中老师英文原创歌曲December",
    "一颗800的米其林分子料理龙吟草莓究竟是什么神仙小可",
    "DC遗失的预告：比奇堡黑暗骑士",
    "2天4000块，我成功造出一颗星球！",
    "《海王》",
    "有这么个粘人有粘手的小猫咪，还关爱朋友什么争啊",
    "【咬人猫】女仆原装❤加速版&腾格尔 版",
    "【宫廷奶酪】嘘！ 这是一份可以开店的秘方————又名糖蒸",
    "企业文化",
    "商家是怎样给我们洗脑的？怪异的行为经济学【围炉夜话】",
    "六大门派围攻蔡徐坤",
    "【钢琴】 带上耳机！前方高能！ 迪加ost《人类之光·爱の",
    "可爱在性感面前一无是处？？？一秒学会可爱又不失性感",
    "住酒店的我一般都是这么醒的哈哈哈哈哈哈哈哈哈",
    "都是骗人的！ 打了五年了终于有医生告诉我，打进去的是玻尿酸",
    "我失败了1000次菜过去一关的游戏",
    "【古力娜扎&朱丹】灭掉世界的穷哈（歌剧2）",
    "治愈系日语版《好想爱这个世界啊》独唱[华晨宇]",
    "湖南妹子子啊日本挑战最辣面，被当地嘘声偷拍",
    "【党妹】 世界级优雅的Lolita妆发拍照一体教程！",
    "从《庆余年》看中国视频平台混战史：200家网站倒闭、上",
    "是吃世界上提醒最大的甲壳动物【杀人蟹】太过瘾了！",
    "【武林外传】武林骚话！每天一边防止抑郁！",
    "他，是史上承受嘲笑最多的人。观看前请自备纸巾！",
    "华农兄弟：昨晚有只竹鼠“托梦给我，想吃竹鼠吗？"]
var pWord = document.querySelectorAll('.webindex ul p')
for (var m = 0; m < indexWord.length; m++) {
    pWord[m + 2].innerText = indexWord[m]
}