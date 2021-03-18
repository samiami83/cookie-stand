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
};

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
let locations = [seattle, tokyo, amman];

// const amman = {
//   location: 'Amman',
//   hourlySales: [4, 2, 7, 4, 5, 2, 3, 4, 2, 6, 7, 12, 4, 21],
// }

const storeContainerElem = document.getElementById('store-container');

// renderCookieStand(seattle);
// renderCookieStand(tokyo);
// renderCookieStand(amman);

const tableBodyElem = document.createElement('tbody');
const tableFootElem = document.createElement('tfoot');
const tableHeadElem= document.createElement('thead');
const cellElem = document.createElement('td');
// const headCellElem = document.createElement('th');
const rowElem = document.createElement('tr');
const tableElem = document.createElement('table');

function renderCookieStand(cookieStand) {

  storeContainerElem.appendChild(tableElem);
  tableElem.appendChild(tableHeadElem);
  tableHeadElem.appendChild(rowElem);

  for (let i = 0; i < timeSlots.length; i += 1) {
    const headCellElem = document.createElement('th');
    rowElem.appendChild(headCellElem);

    const currentTimeSlot = timeSlots[i];

    // const currentSales = cookieStand.hourlySales[i];

    headCellElem.textContent = currentTimeSlot;
  }
  tableElem.appendChild(tableBodyElem);

  for (let i = 0; i < locations.length; i += 1) {
    const rowElem = document.createElement('tr');
    tableBodyElem.appendChild(rowElem);
// console.log(locations[i].hourlySales);
    for (let cookieInd = 0; cookieInd < locations[i].hourlySales[cookieInd]; cookieInd += 1) {
      const cellElem = document.createElement('td');
      // console.log(locations[i][1]);
      rowElem.appendChild(cellElem);

      const currentCookie = locations[i].hourlySales[cookieInd];
      cellElem.textContent = currentCookie;
    }}

  //   <!-- header row -->
  //   <thead>  <!-- hard code code this -->
  //       <tr> <!-- hard code code this -->
  //           <!-- for loop times -->
  //               <th> 1 </th>
  //               <th> 2 </th>
  //               <!-- end for loop times -->
  //       </tr>
  //   </thead>
  //   <!-- End Header -->

  //   <!-- Start table cells -->
  //   <tbody>  <!-- hard code code this -->
  //       <!-- for loop locations objects -->
  //       <tr>
  //           <!-- for loop for # of cookies -->
  //           <td> 1 </td>
  //           ...
  //       </tr>
  //       ...
  //       <!-- END for loop locations objects -->
  //   </tbody>
  //   <!-- End Table Cells -->

  //   <!-- Start Footer  -->
  //   <!-- for loop locations object -->
  //   <tfoot>
  //       <tr>

  //       </tr>
  //   </tfoot>
  //   <!-- End footer  -->



  // // const sectionElem = document.createElement('section');
  // // storeContainerElem.appendChild(sectionElem);

  // sectionElem.appendChild(locationElem);
  // locationElem.textContent = cookieStand.location;

  // // const locationElem = document.createElement('h2');
  // // sectionElem.appendChild(locationElem);
  // // locationElem.textContent = cookieStand.location;

  // sectionElem.appendChild(hourListElem);

  // // const hourListElem = document.createElement('ul');
  // // sectionElem.appendChild(hourListElem);

  // for (let i = 0; i < timeSlots.length; i += 1) {


  //   // const hourItemElem = document.createElement('li');

  //   // hourListElem.appendChild(hourItemElem);

  //   // const currentTimeSlot = timeSlots[i];

  //   // const currentSales = cookieStand.hourlySales[i];

  //   // hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';

  // }


  // let total = 0;
  // // the sum of all the sales for the current cookieStand

  // for (let i = 0; i < cookieStand.hourlySales.length; i += 1) {
  //   const currentSales = cookieStand.hourlySales[i];
  //   total += currentSales;
  // }
  // // need last total item
  // const totalItemElem = document.createElement('li');
  // hourListElem.appendChild(totalItemElem);
  // totalItemElem.textContent = 'Total: ' + total + ' cookies';

}
renderCookieStand(locations);
