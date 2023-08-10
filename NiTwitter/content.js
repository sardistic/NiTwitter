function replaceCopyLink() {
  const observer = new MutationObserver(() => {
    const copyLinkSpans = document.querySelectorAll('span.css-901oao');
    copyLinkSpans.forEach((span) => {
      if (span.textContent.includes('Copy link to Tweet')) {
        span.addEventListener('click', () => {
          setTimeout(() => {
            navigator.clipboard.readText()
              .then(clipText => {
                if (clipText.includes('twitter.com')) {
                  const nitterUrl = clipText.replace('twitter.com', 'nitter.com');
                  navigator.clipboard.writeText(nitterUrl);
                }
              });
          }, 100); // Wait for the URL to be copied to clipboard
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

chrome.storage.local.get('enabled', (data) => {
  if (data.enabled !== false) {
    replaceCopyLink();
  }
});
