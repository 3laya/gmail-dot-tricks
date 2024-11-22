const emailInput = document.querySelector('#email-input');
const resultsList = document.querySelector('#results-list');
const resultLength = document.querySelector('#result-length');

// Add your fixed email username here
const fixedUsername = 'frlpearlb7faaaannnn4eveeeerrr';

// List of excluded email variants
const excludedEmails = [
  'frlpearlb7faaaannnn4eveeeerrr@gmail.com',
  'frlpearlb7faaaannnn4eveeeerr.r@gmail.com',
  'frlpearlb7faaaannnn4eveeeer.rr@gmail.com',
  'frlpearlb7faaaannnn4eveeeer.r.r@gmail.com',
  'frlpearlb7faaaannnn4eveeee.rrr@gmail.com',
  'frlpearlb7faaaannnn4eveeee.rr.r@gmail.com',
  'frlpearlb7faaaannnn4eveeee.r.rr@gmail.com',
  'frlpearlb7faaaannnn4eveeee.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4eveee.errr@gmail.com',
  'frlpearlb7faaaannnn4eveee.err.r@gmail.com',
  'frlpearlb7faaaannnn4eveee.er.rr@gmail.com',
  'frlpearlb7faaaannnn4eveee.er.r.r@gmail.com',
  'frlpearlb7faaaannnn4eveee.e.rrr@gmail.com',
  'frlpearlb7faaaannnn4eveee.e.rr.r@gmail.com',
  'frlpearlb7faaaannnn4eveee.e.r.rr@gmail.com',
  'frlpearlb7faaaannnn4eveee.e.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4evee.eerrr@gmail.com',
  'frlpearlb7faaaannnn4evee.eerr.r@gmail.com',
  'frlpearlb7faaaannnn4evee.eer.rr@gmail.com',
  'frlpearlb7faaaannnn4evee.eer.r.r@gmail.com',
  'frlpearlb7faaaannnn4evee.ee.rrr@gmail.com',
  'frlpearlb7faaaannnn4evee.ee.rr.r@gmail.com',
  'frlpearlb7faaaannnn4evee.ee.r.rr@gmail.com',
  'frlpearlb7faaaannnn4evee.ee.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4evee.e.errr@gmail.com',
  'frlpearlb7faaaannnn4evee.e.err.r@gmail.com',
  'frlpearlb7faaaannnn4evee.e.er.rr@gmail.com',
  'frlpearlb7faaaannnn4evee.e.er.r.r@gmail.com',
  'frlpearlb7faaaannnn4evee.e.e.rrr@gmail.com',
  'frlpearlb7faaaannnn4evee.e.e.rr.r@gmail.com',
  'frlpearlb7faaaannnn4evee.e.e.r.rr@gmail.com',
  'frlpearlb7faaaannnn4evee.e.e.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.eeerrr@gmail.com',
  'frlpearlb7faaaannnn4eve.eeerr.r@gmail.com',
  'frlpearlb7faaaannnn4eve.eeer.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.eeer.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.eee.rrr@gmail.com',
  'frlpearlb7faaaannnn4eve.eee.rr.r@gmail.com',
  'frlpearlb7faaaannnn4eve.eee.r.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.eee.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.errr@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.err.r@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.er.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.er.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.e.rrr@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.e.rr.r@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.e.r.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.ee.e.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.eerrr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.eerr.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.eer.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.eer.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.ee.rrr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.ee.rr.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.ee.r.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.ee.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.errr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.err.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.er.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.er.r.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.e.rrr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.e.rr.r@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.e.r.rr@gmail.com',
  'frlpearlb7faaaannnn4eve.e.e.e.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eeeerrr@gmail.com',
  'frlpearlb7faaaannnn4ev.eeeerr.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eeeer.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.eeeer.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eeee.rrr@gmail.com',
  'frlpearlb7faaaannnn4ev.eeee.rr.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eeee.r.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.eeee.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.errr@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.err.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.er.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.er.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.e.rrr@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.e.rr.r@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.e.r.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.eee.e.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.eerrr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.eerr.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.eer.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.eer.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.ee.rrr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.ee.rr.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.ee.r.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.ee.r.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.errr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.err.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.er.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.er.r.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.e.rrr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.e.rr.r@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.e.r.rr@gmail.com',
  'frlpearlb7faaaannnn4ev.ee.e.e.r.r.r@gmail.com',
  // Add the rest of your excluded emails here
];

// Function to generate all dot-variants of the email
const generateEmailVariants = (username) => {
  const n = username.length;
  const variants = [];

  for (let i = 0; i < Math.pow(2, n - 1); i++) {
    const variant = [];
    let k = 0;

    for (let j = 0; j < n; j++) {
      variant.push(username.charAt(j));
      if (j < n - 1 && i & (1 << k)) {
        variant.push('.');
      }
      k++;
    }

    const variantEmail = `${variant.join('')}@gmail.com`;
    if (!excludedEmails.includes(variantEmail)) {
      variants.push(variantEmail);
    }
  }

  return variants;
};

// Automatically generate and display results based on the fixed username
const displayEmailVariants = () => {
  const variants = generateEmailVariants(fixedUsername);

  resultsList.innerHTML = '';

  if (variants.length > 0) {
    resultLength.parentElement.classList.remove('hidden');
    resultLength.innerText = variants.length;
    variants.forEach((variant) => {
      const listItem = `<li class='item'><span>${variant}</span> <i class="fa fa-clipboard fa-lg" aria-hidden="true"></i></li>`;
      resultsList.insertAdjacentHTML('beforeend', listItem);
    });
  } else {
    resultLength.parentElement.classList.add('hidden');
  }

  const copyButtons = document.getElementsByTagName('i');

  Array.from(copyButtons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const email = event.target.parentElement.innerText;
      navigator.clipboard.writeText(email);
    });
  });
};

// Run the display function on load
window.addEventListener('load', () => {
  displayEmailVariants();
});
