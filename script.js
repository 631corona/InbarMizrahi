const config = {
    popupTime: 1000 // 1 secs
};
$(document).ready(function() {
    setTimeout(function () {
        console.log('hello');
    }, config.popupTime);
});


function serverData() {
    return {};
}
