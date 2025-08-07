const properties = [
  {
    images: [
      'Resource/images/property/1A.jpg',
      'Resource/images/property/1B.jpg',
      'Resource/images/property/1C.jpg'
    ],
    title: 'Kilauea, Kauai',
    location: 'Hawaii US',
    date: '29 April - 06 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/property/2A.jpg',
      'Resource/images/property/2B.jpg',
      'Resource/images/property/2C.jpg'
    ],
    title: 'Ivyland, Near Philadelphia',
    location: 'Pennsylvania, US',
    date: '22-30 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/property/3A.jpg',
      'Resource/images/property/3B.jpg',
      'Resource/images/property/3C.jpg'
    ],
    title: 'Princeville, North Shore Kauai',
    location: 'Hawaii, US',
    date: '01-08 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/property/4A.jpg',
      'Resource/images/property/4B.jpg',
      'Resource/images/property/4C.jpg'
    ],
    title: 'Slidell, New Orleans Area',
    location: 'Louisiana, US',
    date: '10-15 May 2025',
    button: 'PREVIEW →'
  },
  {
    images: [
      'Resource/images/property/5A.jpg',
      'Resource/images/property/5B.jpg',
      'Resource/images/property/5C.jpg'
    ],
    title: 'Gibson Island, Chesapeake Bay',
    location: 'Maryland, US',
    date: '07-15 May 2025',
    button: 'PREVIEW →'
  },
  {
  images: [
      'Resource/images/property/6A.jpg',
      'Resource/images/property/6B.jpg',
      'Resource/images/property/6C.jpg'
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
