const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}


const enquiryForm = document.querySelector('[data-enquiry-form]');
const formStatus = document.querySelector('.form-status');

if (enquiryForm && formStatus) {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('status');
  const messages = {
    sent: 'Thank you. Your request has been sent to BirchPly.',
    invalid: 'Please check the required fields and try again.',
    error: 'The message could not be sent. Please email info@birchply.online directly.'
  };
  if (messages[status]) {
    formStatus.hidden = false;
    formStatus.textContent = messages[status];
    if (status !== 'sent') formStatus.classList.add('error');
  }

  if (window.location.hostname.endsWith('github.io')) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.hidden = false;
      formStatus.classList.remove('error');
      formStatus.textContent = 'This is the test version. Form delivery is enabled only on birchply.online.';
      formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}
