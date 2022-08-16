function addLoadEvent(func) {
    // 把现有的onload行为保存在oldonload
    var oldonload = window.onload;
    // 通过对比window.onload的typeof值是是不是等于function，就是等不等于函数，
    // 如果不等于的话 据说明目前没有onload行为直接添加就可以，不用担心打乱了原有的加载顺序
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else {
        // 如果存在原有的onload行为 为了不打乱触发的先后顺序，直接添加在原有的onload行为后面。
        window.onload = function() {
            oldonload();
            func();
        }
    }
}