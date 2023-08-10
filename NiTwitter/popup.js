document.getElementById('toggle').addEventListener('change', (event) => {
  chrome.storage.local.set({ enabled: event.target.checked });
});
