// 实现图片的切换，使用DOM函数实现点击UL列表切换图片和文字
function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != 'IMG' ) return false;
    placeholder.setAttribute("src",source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true; // 这个return语句主要作用是当description存在就返回true，不存在直接跳过，函数返回false
}

// 获取当前点击事件的元素名称并传递给图片切换函数showPic并取消默认图片查看行为
// 使用这种方法可以减少在标签中添加相关javascript代码 使结构样式行为分离更彻底。
function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for ( var i=0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showPic(this);
        }
    }
}

// 使用addLoadEvent函数可以在html文档加载完毕后和onclick绑定并加载多个多个函数，
// 如果不使用这个函数直接赋值调用的还绑定只会在最后一个绑定函数中生效。
// 这个函数将会在html文档加载完毕后才会执行因为绑定了onload事件，如果提前加载
// DOM文档不完整，一些检测函数也就无从谈起，所以必须要让网页加载完毕后就立即执行。
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an images");
    description.appendChild(desctext);
    // document.getElementsByTagName("body")[0].appendChild(placeholder);
    // document.getElementsByTagName("body")[0].appendChild(description);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);

}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}


addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
