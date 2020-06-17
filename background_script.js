chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        let url = 'https://www.crunchyroll.com' + request.episode;
        fetch(url)
            .then(response => response.text())
            .then(data => sendResponse(parseInt(data.substr(data.search("ad_breaks") + 69, 10))))
            .catch(error => alert("error"))
        return true;  // Will respond asynchronously.
    });
