const tableBody = document.querySelector('.nypl-holds-table tbody');

const itemHold = [
  {
    title: 'British intelligence and Hitler\'s empire in the Soviet Union, 1941-1945 / Benjamin William Wheatley',
    url: 'https://catalog.nypl.org/search~S1?/Xsoviet+union&searchscope=1&SORT=DZ/Xsoviet+union&searchscope=1&SORT=DZ&extended=0&SUBKEY=soviet+union/1%2C32000%2C32000%2CB/frameset&FF=Xsoviet+union&searchscope=1&SORT=DZ&1%2C1%2C',
    author: 'Wheatley, Benjamin William',
    format: 'Book',
    imprint: 'London ; New York, NY : Bloomsbury Academic, an imprint of Bloomsbury Publishing Plc, 2017.',
    location: 'Stephen A. Schwarzman Building, General Research, Room 315',
    locLink: '#',
    status: 'In transit from ReCAP',
    statusClass: 'in-transit',
    manageUrl: '#',
  },
  {
    title: 'Protest, reform and repression in Khrushchev\'s Soviet Union / Robert Hornsby',
    url: 'https://catalog.nypl.org/search~S98?/Xsoviet+union&searchscope=98&SORT=DZ/Xsoviet+union&searchscope=98&SORT=DZ&SUBKEY=soviet+union/1%2C32000%2C32000%2CB/frameset&FF=Xsoviet+union&searchscope=98&SORT=DZ&13%2C13%2C',
    author: 'Hornsby, Rob',
    format: 'Book',
    imprint: 'Cambridge, U.K. ; New York : Cambridge University Press, 2013',
    location: 'Stephen A. Schwarzman Building, General Research, Room 315',
    locLink: '#',
    status: 'Requested from ReCAP',
    statusClass: 'requested recap',
    manageUrl: '#',
  },
  {
    title: 'String quartet in F minor, op. 95 "serioso" [sound recording] / Ludwig van Beethoven. Five fugues from the Well-tempered clavier, arr. for string quartet, K. 405 / Johann Sebastian Bach ; Wolfgang Amadeus Mozart. String quartet, op. 3 / Alban Berg. String quartet no. 1 in D major, op. 11 / Peter Ilich Tchaikovsky.',
    url: 'https://catalog.nypl.org/search~S98?/Xsoviet+union&searchscope=98&SORT=DZ/Xsoviet+union&searchscope=98&SORT=DZ&SUBKEY=soviet+union/1%2C32000%2C32000%2CB/frameset&FF=Xsoviet+union&searchscope=98&SORT=DZ&13%2C13%2C',
    author: 'Hornsby, Rob',
    format: 'Book',
    imprint: 'Cambridge, U.K. ; New York : Cambridge University Press, 2013',
    location: 'Stephen A. Schwarzman Building, General Research, Room 315',
    locLink: '#',
    status: 'Requested from ReCAP',
    statusClass: 'requested recap',
    manageUrl: '#',
  },
];

itemHold.forEach(item => {
  const tableRow = `
    <tr role="row">
      <td>
        <div class="item"><a href="${item.url}">${item.title}</a></div>
        <div>${item.author}</div>
        <div>${item.imprint}</div>
        <div>${item.format}</div>
      </td>
      <td>
        <span class="${item.statusClass}">${item.status}</span>
      </td>
      <td>
        <span><a href="${item.locLink}">${item.location}</a></span>
      </td>
      <td>
        <span><a href="${item.manageUrl}">Manage this item</a></span>
      </td>
    </tr>
  `;

  tableBody.insertAdjacentHTML('beforeend', tableRow);
  console.log(tableBody);
});

// Helper so we can put the number of trs at the top of the table
// get the number of trs in table
const trItems = document.querySelectorAll('tbody tr').length;
// console.log(trItems);
// update the number printed to item count
// turn the number into a string
// const numberOfItems = trItems.toString();
// console.log(numberOfItems);
const totalNumber = document.getElementById('number-of-holds');
totalNumber.innerHTML = trItems;
