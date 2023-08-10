function toggleHiddenContent(iconDownId, iconUpId, hiddenContentId) {
  const angleDownIcon = document.getElementById(iconDownId);
  const angleUpIcon = document.getElementById(iconUpId);
  const hiddenContent = document.getElementById(hiddenContentId);

  angleDownIcon.addEventListener('click', () => {
      angleDownIcon.style.display = 'none';
      angleUpIcon.style.display = 'inline';
      hiddenContent.style.display = 'block';
  });

  angleUpIcon.addEventListener('click', () => {
      angleDownIcon.style.display = 'inline';
      angleUpIcon.style.display = 'none';
      hiddenContent.style.display = 'none';
  });
}

