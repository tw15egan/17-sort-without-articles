const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector('#bands');

const sorted = bands.sort((a, b) => {
    a = a.replace(/^(a |the |an )/i, '').trim();
    b = b.replace(/^(a |the |an )/i, '').trim();
    
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

[...sorted].forEach((band) => {
  let html = document.createElement('li');
  html.innerHTML = band;
  list.append(html);
});

