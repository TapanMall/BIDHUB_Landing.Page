const properties = [
  {
    images: [
      'Resource/images/PROPERTY/1.png',
      'Resource/images/PROPERTY/1b.png',
      'Resource/images/PROPERTY/1c.png'
    ],
    title: 'Kilauea, Kauai',
    location: 'Hawaii US',
    date: '29 April - 06 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/PROPERTY/2a.png',
      'Resource/images/PROPERTY/2b.png',
      'Resource/images/PROPERTY/2c.png'
    ],
    title: 'Ivyland, Near Philadelphia',
    location: 'Pennsylvania, US',
    date: '22-30 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/PROPERTY/3a.png',
      'Resource/images/PROPERTY/3b.png',
      'Resource/images/PROPERTY/3c.png'
    ],
    title: 'Princeville, North Shore Kauai',
    location: 'Hawaii, US',
    date: '01-08 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/PROPERTY/4a.png',
      'Resource/images/PROPERTY/4b.png',
      'Resource/images/PROPERTY/4c.png'
    ],
    title: 'Slidell, New Orleans Area',
    location: 'Louisiana, US',
    date: '10-15 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/PROPERTY/5a.png',
      'Resource/images/PROPERTY/5b.png',
      'Resource/images/PROPERTY/5c.png'
    ],
    title: 'Gibson Island, Chesapeake Bay',
    location: 'Maryland, US',
    date: '07-15 May 2025',
    button: 'PREVIEW →'
  },
  {
  images: [
      'Resource/images/PROPERTY/6a.png',
      'Resource/images/PROPERTY/6b.png',
      'Resource/images/PROPERTY/6c.png'
  ],
  title: 'Mount Shasta',
  location: 'California, US',
  date: '16-29 May 2025',
  button: 'PREVIEW →'
}
];

const container = document.querySelector('.card-container');

properties.forEach((property, index) => {
  const imageId = `slider-${index}`;
  const dotId = `dots-${index}`;
  const imgHtml = property.images
    .map((src, i) =>
      `<img src="${src}" class="${i === 0 ? 'active' : ''}" data-index="${i}">`
    )
    .join('');
  const dotHtml = property.images
    .map(
      (_, i) =>
        `<span class="${i === 0 ? 'active' : ''}" onclick="showSlide(${index}, ${i})"></span>`
    )
    .join('');

  container.innerHTML += `
    <div class="card">
      <div class="image-slider" id="${imageId}">
        ${imgHtml}
        <div class="slider-arrow left" onclick="prevImage(${index})">&#8249;</div>
        <div class="slider-arrow right" onclick="nextImage(${index})">&#8250;</div>
      </div>
      <div class="slider-dots" id="${dotId}">${dotHtml}</div>
      <div class="card-title">${property.title}</div>
      <div>${property.location}</div>
      <div>📅 ${property.date}</div>
      <div>📍 Online</div>
      <a href="#" class="button-link">${property.button}</a>
    </div>
  `;
});

function prevImage(index) {
  const images = document.querySelectorAll(`#slider-${index} img`);
  const dots = document.querySelectorAll(`#dots-${index} span`);
  let activeIndex = [...images].findIndex((img) => img.classList.contains('active'));

  activeIndex = (activeIndex - 1 + images.length) % images.length;

  images.forEach((img, i) => img.classList.toggle('active', i === activeIndex));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
}

function nextImage(index) {
  const images = document.querySelectorAll(`#slider-${index} img`);
  const dots = document.querySelectorAll(`#dots-${index} span`);
  let activeIndex = [...images].findIndex((img) => img.classList.contains('active'));

  activeIndex = (activeIndex + 1) % images.length;

  images.forEach((img, i) => img.classList.toggle('active', i === activeIndex));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
}

function showSlide(index, slideIndex) {
  const images = document.querySelectorAll(`#slider-${index} img`);
  const dots = document.querySelectorAll(`#dots-${index} span`);

  images.forEach((img, i) => img.classList.toggle('active', i === slideIndex));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === slideIndex));
}
