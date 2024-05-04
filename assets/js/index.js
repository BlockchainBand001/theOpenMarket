document.getElementById('themeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = this.textContent === 'Dark Theme' ? 'Light Theme' : 'Dark Theme';
});
//
// const sidebar = document.querySelector('.sidebar');
// const resizeHandle = document.querySelector('.resize-handle');
// let isResizing = false;
//
// resizeHandle.addEventListener('mousedown', function(e) {
//     isResizing = true;
//     sidebar.style.width = e.clientX + "px";
// });
//
// window.addEventListener('mousemove', function(e) {
//     if (isResizing) {
//         sidebar.style.width  = e.clientX + "px";
//     }
// });
//
// window.addEventListener('mouseup', function() {
//     isResizing = false;
// });
