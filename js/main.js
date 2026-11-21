const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Stay enquiry - Rhino Guest House');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nCheck-in: ${data.get('checkin')}\nCheck-out: ${data.get('checkout')}\nRoom: ${data.get('room')}\nGuests: ${data.get('guests')}\n\nMessage: ${data.get('message') || ''}`
  );
  window.location.href = `mailto:bookings@rhinoguesthouse.com?subject=${subject}&body=${body}`;
});
