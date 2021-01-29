var header = document.getElementsByClassName("header")[0];
var mobileMenu = document.getElementsByClassName("mobile-menu-btn")[0];
var headerHeight = header.clientHeight;

// Đóng hoặc mở menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

// Tự động đóng menu khi click vào
var mobileItems = document.querySelectorAll('.nav-bar li a[href*="#"]');
for (var i = 0; i < mobileItems.length; i++) {
    var mobileItem = mobileItems[i];
    mobileItem.onclick = function() {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("sub-nav-bar");
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}