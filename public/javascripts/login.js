function showError (error) {
    var errMsg = __(error);
    errTag = document.getElementById('error');
    errTag.innerText = errMsg;
}