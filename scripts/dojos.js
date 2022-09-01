/* -------------------------------------------------------------------------- */
/*                                  Libraries                                 */
/* -------------------------------------------------------------------------- */

/* First map */
const map = L.map('map').setView([10.76899, 106.65802], 16);

const tiles = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

const marker = L.marker([10.76899, 106.65802]).addTo(map);
marker
  .bindPopup(
    '<b>Nitoukan Kendo Iaido Vietnam</b><br>219 Ly Thuong Kiet Street, Ward 15, District 11, Ho Chi Minh City',
  )
  .openPopup();

/* Second map */
const map2 = L.map('map2').setView(
  [10.765656882039773, 106.6591224507509],
  16,
);

const tiles2 = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map2);

const marker2 = L.marker([
  10.765656882039773, 106.6591224507509,
]).addTo(map2);
marker2
  .bindPopup(
    '<b>Saigon Kendo Club</b><br>215C Ly Thuong Kiet Street, Ward 15, District 11, Ho Chi Minh City',
  )
  .openPopup();

/* Third map */
const map3 = L.map('map3').setView(
  [10.809675915094411, 106.7083966912617],
  16,
);

const tiles3 = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map3);

const marker3 = L.marker([
  10.809675915094411, 106.7083966912617,
]).addTo(map3);
marker3
  .bindPopup(
    '<b>Kenyukai Kendo HCM</b><br>107F Chu Van An Street, Ward 26, Binh Thanh District, Ho Chi Minh City',
  )
  .openPopup();

/* Fourth map */
const map4 = L.map('map4').setView(
  [10.713677912403233, 106.7013309814624],
  16,
);

const tiles4 = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map4);

const marker4 = L.marker([
  10.713677912403233, 106.7013309814624,
]).addTo(map4);
marker4
  .bindPopup(
    '<b>HCMC ChungAng Kumdo Club</b><br>5 Le Van Luong Street, Phuoc Kien Commune, Nha Be District, Ho Chi Minh City',
  )
  .openPopup();

/* Fifth map */
const map5 = L.map('map5').setView(
  [10.8051960083157, 106.66414975421932],
  16,
);

const tiles5 = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map5);

const marker5 = L.marker([
  10.8051960083157, 106.66414975421932,
]).addTo(map5);
marker5
  .bindPopup(
    '<b>Oimatsu Kendo Club</b><br>91/7 Tran Quoc Hoan Street, Ward 4, Tan Binh District, Ho Chi Minh City',
  )
  .openPopup();

/* Sixth map */
const map6 = L.map('map6').setView(
  [10.803770991356604, 106.69558223010526],
  16,
);

const tiles6 = L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map6);

const marker6 = L.marker([
  10.803770991356604, 106.69558223010526,
]).addTo(map6);
marker6
  .bindPopup(
    '<b>Daido Kendo Club</b><br>8 Phan Dang Luu Street, Ward 14, Binh Thanh District, Ho Chi Minh City',
  )
  .openPopup();
