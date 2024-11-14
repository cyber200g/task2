function showMoreInfo(card) {
  const moreInfo = card.querySelector('.more-info');
  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
      moreInfo.style.display = 'block';
  } else {
      moreInfo.style.display = 'none';
  }
}
