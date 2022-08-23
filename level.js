document.addEventListener('DOMContentLoaded', function (event) {
  const menu = document.querySelector('.menu');

  menu.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-value');

    console.log(value);

    localStorage.setItem('level', value);
  });
});
