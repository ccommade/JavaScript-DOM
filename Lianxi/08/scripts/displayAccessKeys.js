function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // 取得文档中的所有连接
    var links = document.getElementsByTagName("a");
    // 创建一个数组，保存访问键
    var akeys = new Array();
    // 遍历链接
    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        //如果没有accesskey属性，继续循环
        if (!current_link.getAttribute("accesskey")) continue;
        // 取得Accesskey的值
        var key = current_link.getAttribute("accesskey");
        //取得连接文本
        var text = current_link.lastChild.nodeValue;
        //添加到数组
        akeys[key] = text;
    }
    // 创建列表
    var list = document.createElement("ul");
    //遍历访问键
    for (key in akeys) {
        var text = akeys[key]
        var str = key + ": " + text;
        //创建列表项
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        // 把列表项加入列表中
        list.appendChild(item);
    }
    // 创建标题
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskey");
    header.appendChild(header_text);
    // 把标题添加到页面主体
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);
