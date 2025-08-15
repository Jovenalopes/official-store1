document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("cta-button");
    const baseLink = "https://prostapeak.com/?hopId=05de575f-8240-4b85-a9e5-1fe56fcff48b";

    const params = window.location.search;
    button.href = baseLink + params;
});
