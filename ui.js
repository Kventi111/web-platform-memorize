class UI {
  constructor() {
    this.banner = document.querySelector('.winner_banner');
    this.bannerText = document.querySelector('.winner_banner__text');
  }

  showWinnerBanner = (text) => {
    this.banner.classList.add('show');

    this.bannerText.innerHTML = text;
  };
}
