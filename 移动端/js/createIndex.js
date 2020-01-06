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
    "华农兄弟：昨晚有只竹鼠“托梦给我，想吃竹鼠吗？",
    "【MC 老八】 你那叫吃播吗？",
    "【博君一肖】 上头踩点！ 《全世界都在说博肖话》 （填词自白）",
    "把超市里所有的水果买回来做果汁！ 榴莲为什么不做成果汁？",
    "耗时半年 ！只需要15秒！ 我将从你手中夺走硬币！ 【火影/踩他】",
    "奥里给妙妙屋",
    "【每天一遍 防止抑郁】熊猫抖肩舞",
    "【火影人物志55】 站在顶点的男人！ 宇智波斑 当时Boss就",
    "【收藏向】 实用结绳技巧",
    "中国Boy超级白嫖怪！ 阴阳怪气陪你过圣诞节！",
    "南方人不懂为什么东北人喜欢吃黑乎乎的冻梨， 吃了才知道原来",
    "小老妹， 你家ADC怎么走？",
    "你们老师的水杯里可能装的不是开水， 可能是奶茶",
    "外国人如何评价古力娜扎的 《穷哈》 美国妹子帮你分析扎扎",
    "【压缩disco】 全场问号和我整齐划一！ ",
    "是你啊破站无人识， 一朝成名天下知， B站这十年 2009————",
    "惊了， B站竟然自己搞了个跨年晚会？ 看到节目单我看裂开了",
    "【Minecraft】 一个看完能让你大喊舒服的视频",
    "【评分1.9】 这绝对是b站有史以来买过最亏的动画， 山寨",
    "调音师的准确率已达100000000000000000000000000000000000000000",
    "当你拔剑的那一刻， 世界你毛都不是！",
    "【AMV/FZ】切嗣的救赎 【FATE - ZERO】",
    "挑战抖音颜值爆表的美女！ 看完这个视频你敢说你不会心动",
    "b站热度年度总结（禁止套娃）⭐",
    "狗拿东西打狗",
    "在我眼里的乒乓球比赛！ 合集四",
    "魔鬼亚索",
    "传说中最变态的直播间到底都在直播些什么？ 《两句恐怖故事》",
    "再探镇上自助餐， 大sao一个人吃五锅， 服务员都嫌弃了，",
    "男人都是大猪蹄子",
    "【主播真会玩八卦篇】 105：严审之下巨龙撞击，好快的",
    "【刘老师】 逆天吐槽差点给我尬抽过去的爱情古装爱情剧《梦",
    "圣诞鸡",
    "老婆的肚子上怎么可能有赘肉qwq",
    "停播了！我峨嵋你也许欠老八一个道歉， 男人不易啊！催泪！",
    "【小米粥】芒种👑竖屏离你更近~",
    "警方看到真个视频之后，决定要处理这个人渣了。",
    "用耳勺舀满一桶水需要舀多少次？",
    "熬夜之后如何科学恢复",
    "影流之主",
    "【当我知道不能健身了】我崩溃了！！",
    "芒种",
    "【不明生物】 瘦长鬼影清晰照片被人曝光",
    "观看一分钟，兴奋一整天！",
    "【刀剑神域】 爱丽丝篇 700 + 草稿图片还原OP镜头",
    "用敬汉卿的的火腿制作国宴·开水白菜！ 天府之国的传统菜",
    "【博君一肖】 十级唇语+全程糖点+最新绿洲=新年快乐！",
    "【庆余年手书】 范闲和二皇子的抖肩舞",
    "【古力娜扎&朱丹】 穷哈Baby",
    "papi酱不定期更新的抖音合集————12月",
    "盗梦空间",
    "怎样才算是真爱",
    "本想送个礼物，她以为我要求婚，直接哭了。哈哈蛤。。",
    "【博君一肖】12.28星光全程糖点集合+唇语分析|| 八倍镜",
    "老 八 超 级 晓 汉 堡",
    "【游戏侦察冰】 国区游戏首发价暴涨， 揭秘背后的商业逻辑",
    "第一次去女仆店是什么样的体验？？？",
    "学校领导：？？？ 晚会你给我整这个？",
    "【猛男版】 新 宝 岛",
    "我给王嘉尔做了顿饭吃！！（杭州的）",
    "【灯泡动画】企鹅无聊上了贼船！她们能否脱身？"]
var pWord = document.querySelectorAll('.webindex ul p')
for (var m = 0; m < indexWord.length; m++) {
    pWord[m + 2].innerText = indexWord[m]
}

// contNav的Dom
var contNav = document.querySelector(".contNav");
var span = document.querySelector(".contNav div span");
var divspan = document.querySelector(".contNav div");
var count = 0;
divspan.onclick = function () {
    count++
    if (count % 2 != 0) {
        divspan.style.transform = 'rotateZ(270deg)'
        contNav.style.height = "fit-content"
    } else {
        var hei = 32 / 20.7 + 0.256
        contNav.style.height = `${hei}rem`
        divspan.style.transform = 'rotateZ(90deg)'
    }
}
var webindexs = document.querySelectorAll('.webindex')
var contnavlias = document.querySelectorAll('.contNav li a')
for (var n = 0; n < contnavlias.length; n++) {
    contnavlias[n].index = n
    contnavlias[n].onclick = function () {
        for (var i = 0; i < contnavlias.length; i++) {
            contnavlias[i].className = ""
        }
        this.className = 'pink'
    }
}
var generalize = document.querySelector('.generalize')
var removebottom = document.querySelector(".generalize .left img:first-child");
removebottom.onclick = function () {
    generalize.style.display = "none"
}
// input点击事件
var input = document.querySelector(".topnav .center input[type=text]")
input.onclick = function () {
    location.href = "./search.html"
    console.log(123, this)
}