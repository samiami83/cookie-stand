const timeSlots = [
      '6am',
      '7am',
      '8am',
      '9am',
      '10am',
      '11am',
      '12pm',
      '1pm',
      '2pm',
      '3pm',
      '4pm',
      '5pm',
      '6pm',
      '7pm',
    ];

const CookieStand = function(location,hourlySales) {
  this.location = location;
  this.hourlySales = hourlySales;
}

    let seattle = new CookieStand('Seattle', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

// console.log(seattle);
    // const seattle = {
    //   location: 'Seattle',
    //   hourlySales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
    // }

    let tokyo = new CookieStand('Tokyo', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    
    // const tokyo = {
    //   location: 'Tokyo',
    //   hourlySales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
    // }

    let amman = new CookieStand('Amman', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    
    // const amman = {
    //   location: 'Amman',
    //   hourlySales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
    // }
    
    const storeContainerElem = document.getElementById('store-container');
    
    renderCookieStand(seattle);
    renderCookieStand(tokyo);
    renderCookieStand(amman);
    
    function renderCookieStand(cookieStand) {

      const sectionElem = document.createElement('table');
      storeContainerElem.appendChild(sectionElem);
    
      // const sectionElem = document.createElement('section');
      // storeContainerElem.appendChild(sectionElem);

      const locationElem = document.createElement('tr');
      sectionElem.appendChild(locationElem);
      locationElem.textContent = cookieStand.location;
    
      // const locationElem = document.createElement('h2');
      // sectionElem.appendChild(locationElem);
      // locationElem.textContent = cookieStand.location;

      const hourListElem = document.createElement('th');
      sectionElem.appendChild(hourListElem);
    
      // const hourListElem = document.createElement('ul');
      // sectionElem.appendChild(hourListElem);
    
      for (let i = 0; i < timeSlots.length; i += 1) {

        const hourItemElem = document.createElement('td');
    
        // const hourItemElem = document.createElement('li');
    
        hourListElem.appendChild(hourItemElem);
    
        const currentTimeSlot = timeSlots[i];
    
        const currentSales = cookieStand.hourlySales[i];
    
        hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
    
      }
    
    
      let total = 0;
      // the sum of all the sales for the current cookieStand
    
      for (let i = 0; i < cookieStand.hourlySales.length; i += 1) {
        const currentSales = cookieStand.hourlySales[i];
        total += currentSales;
      }
    
      // need last total item
      const totalItemElem = document.createElement('li');
      hourListElem.appendChild(totalItemElem);
      totalItemElem.textContent = 'Total: ' + total + ' cookies';
    
    }
    
    