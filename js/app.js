/*
<section>
      <h2>Seattle</h2>
      <ul>
        <li>6am: 16 cookies</li>
        <li>6am: 16 cookies</li>
        <li>6am: 16 cookies</li>
        <li>Total: 875 cookies</li>
      </ul>
    </section>
    */
    const timeSlots = [
      '6am',
      '7am',
      '8am',
      '9am',
      '10am',
      '11am',
      '12am',
      '1pm',
      '2pm',
      '3pm',
      '4pm',
      '5pm',
      '6pm',
      '7pm',
    ]
    const seattle = {
      location: 'Seattle',
      hourlySales: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    }

    const tokyo = {
      location: 'Tokyo',
      hourlySales: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    }

    const amman = {
      location: 'Amman',
      hourlySales: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
    }

    // let cookieStand = seattle;

const storeContainerElem = document.getElementById('store-container')

renderCookieStand(seattle);
renderCookieStand(tokyo);
renderCookieStand(amman);

function renderCookieStand(cookieStand) {

// per cookie stand
const sectionElem = document.createElement('section');storeContainerElem.appendChild(sectionElem);

const locationElem = document.createElement('h2');sectionElem.appendChild(locationElem);locationElem.textContent = cookieStand.location;

const hourList = document.createElement('ul');sectionElem.appendChild(hourList);

for (let i = 0; i < timeSlots.length; i += 1) {

// need some LIs in the UL
// let's do 1 for now
const hourItemElem = document.createElement('li');

hourListElem.appendChild(hourItemElem);

const currentTimeSlot = timeSlots[i]

const currentSales = cookieStand.hourlySales[i];

hourItemElem.textContent = ': ' + currentSales + ' cookies';

}


let total = // the sum of all the sales for the current cookieStand

for (let i = 0; i < cookieStand.hourlySales.length; i += 1) {
  const currentSales = cookieStand.hourlySales[i];
  total += currentSales;
}
// need last total item
const totalItemElem = document.createElement('li');
hourItemElem.appendChild(totalItemElem);totalItemElem.textContent = 'Total: ' + total + ' cookies';

}