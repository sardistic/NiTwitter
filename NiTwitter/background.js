chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var url = details.url;
    if (url.includes("twitter.com")) {
      return { redirectUrl: url.replace("twitter.com", "nitter.com") };
    }
  },
  { urls: ["*://twitter.com/*"] },
  ["blocking"]
);
