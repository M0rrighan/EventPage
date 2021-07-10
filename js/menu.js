const menuBtnOpen = document.querySelector('.openMenuBtn');
const menuBtnClose = document.querySelector('.closeMenuBtn');
const menu = document.querySelector('.mobile-menu');
const navlinks = document.querySelectorAll('.navlinks a');
const p = document.querySelector('.main__program');
const h = document.querySelector('.main__info h1');
const i = document.querySelector('.openMenuBtn i');

for (let i = 0; i < navlinks.length; i += 1) {
  const clone = navlinks[i].cloneNode(true);
  menu.appendChild(clone);
}

menuBtnOpen.addEventListener('click', () => {
  menu.classList.replace('mobile-menu-closed', 'mobile-menu-opened');
  menuBtnOpen.style.display = 'none';
  menuBtnClose.style.display = 'block';
});

menuBtnClose.addEventListener('click', () => {
  menu.classList.replace('mobile-menu-opened', 'mobile-menu-closed');
  menuBtnOpen.style.display = 'block';
  menuBtnClose.style.display = 'none';
});

document.addEventListener('scroll', () => {
  const bounding = p.getBoundingClientRect();
  const top0 = bounding.top;
  const bottom0 = bounding.bottom;
  const bounding1 = h.getBoundingClientRect();
  const top1 = bounding1.top;
  const bottom1 = bounding1.bottom;

  if (top0 < 57.6 && bottom0 > 39) {
    i.style.backgroundColor = '#d3d3d3';
    i.style.borderRadius = '4px';
  } else if (top1 < 57.6 && bottom1 > 39) {
    i.style.backgroundColor = 'rgba(211, 211, 211, 0.9)';
    i.style.borderColor = '#ec5242';
    i.style.borderStyle = 'solid';
    i.style.borderWidth = '1px';
    i.style.borderRadius = '4px';
  } else {
    i.style.backgroundColor = 'transparent';
    i.style.borderColor = 'transparent';
    i.style.borderStyle = 'none';
    i.style.borderWidth = '0';
    i.style.borderRadius = '0';
  }
});
