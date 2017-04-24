const url = 'https://guarded-mountain-54113.herokuapp.com/client';

const state = {
  "Client": [
    {
      "name": "Will",
      "address": 
        {
          "home": "867 Highway",
          "work": "5309 Lane"          
        },
      "personal": 
        {
          "favoriteColor": "blue",
          "luckyNumber": 33
        }
    },
    {
      "name": "Andrew",
      "address": 
        {
          "home": "1234 Console Log Drive",
          "work": "5678 Promise Object Blvd"          
        },
      "personal": 
        {
          "favoriteColor": "green",
          "luckyNumber": 1
        }
    },
    {
      "name": "Ina",
      "address": 
        {
          "home": "1234 Coding Lane",
          "work": "5678 Recursion Station"
        },
      "personal": 
        {
          "favoriteColor": "blue",
          "luckyNumber": 9
        }
    },
    {
      "name": "Robert",
      "address": 
        {
          "home": "1234 Hello World Drive",
          "work": "5678 Hello World Lane"
        },
      "personal": 
        {
          "favoriteColor": "orange",
          "luckyNumber": 22
        }
    },
    {
      "name": "Gareth",
      "address": 
        {
          "home": "1234 Linked List Way",
          "work": "5678 Bubblesort Highway"
        },
      "personal": 
        {
          "favoriteColor": "yellow",
          "luckyNumber": 1
        }
    }
  ]
}

// State Object
// const state = {
//   "Client": [
//     {
//       "_id": "58fd53876af00807ac64db19",
//       "name": "Will",
//       "__v": 0,
//       "address": [
//         {
//           "home": "867 Highway",
//           "_id": "58fd53876af00807ac64db1b"
//         },
//         {
//           "work": "5309 Lane",
//           "_id": "58fd53876af00807ac64db1a"
//         }
//       ],
//       "personal": [
//         {
//           "favoriteColor": "blue",
//           "_id": "58fd53876af00807ac64db1d"
//         },
//         {
//           "luckyNumber": 33,
//           "_id": "58fd53876af00807ac64db1c"
//         }
//       ]
//     },
//     {
//       "_id": "58fd5d4c9e3c4a1498aced9f",
//       "name": "Andrew",
//       "__v": 0,
//       "address": [
//         {
//           "home": "1234 Console Log Drive",
//           "_id": "58fd5d4c9e3c4a1498aceda1"
//         },
//         {
//           "work": "5678 Promise Object Blvd",
//           "_id": "58fd5d4c9e3c4a1498aceda0"
//         }
//       ],
//       "personal": [
//         {
//           "favoriteColor": "green",
//           "_id": "58fd5d4c9e3c4a1498aceda3"
//         },
//         {
//           "luckyNumber": 1,
//           "_id": "58fd5d4c9e3c4a1498aceda2"
//         }
//       ]
//     },
//     {
//       "_id": "58fd5d779e3c4a1498aceda4",
//       "name": "Ina",
//       "__v": 0,
//       "address": [
//         {
//           "home": "1234 Coding Lane",
//           "_id": "58fd5d779e3c4a1498aceda6"
//         },
//         {
//           "work": "5678 Recursion Station",
//           "_id": "58fd5d779e3c4a1498aceda5"
//         }
//       ],
//       "personal": [
//         {
//           "favoriteColor": "blue",
//           "_id": "58fd5d779e3c4a1498aceda8"
//         },
//         {
//           "luckyNumber": 9,
//           "_id": "58fd5d779e3c4a1498aceda7"
//         }
//       ]
//     },
//     {
//       "_id": "58fd5dae9e3c4a1498aceda9",
//       "name": "Robert",
//       "__v": 0,
//       "address": [
//         {
//           "home": "1234 Hello World Drive",
//           "_id": "58fd5dae9e3c4a1498acedab"
//         },
//         {
//           "work": "5678 Hello World Lane",
//           "_id": "58fd5dae9e3c4a1498acedaa"
//         }
//       ],
//       "personal": [
//         {
//           "favoriteColor": "orange",
//           "_id": "58fd5dae9e3c4a1498acedad"
//         },
//         {
//           "luckyNumber": 22,
//           "_id": "58fd5dae9e3c4a1498acedac"
//         }
//       ]
//     },
//     {
//       "_id": "58fd5ddc9e3c4a1498acedae",
//       "name": "Gareth",
//       "__v": 0,
//       "address": [
//         {
//           "home": "1234 Linked List Way",
//           "_id": "58fd5ddc9e3c4a1498acedb0"
//         },
//         {
//           "work": "5678 Bubblesort Highway",
//           "_id": "58fd5ddc9e3c4a1498acedaf"
//         }
//       ],
//       "personal": [
//         {
//           "favoriteColor": "yellow",
//           "_id": "58fd5ddc9e3c4a1498acedb2"
//         },
//         {
//           "luckyNumber": 1,
//           "_id": "58fd5ddc9e3c4a1498acedb1"
//         }
//       ]
//     }
//   ]
// }

const clientTree = state.Client.map(client => {
 
  let keys = Object.keys(client);

  let propertyTree = '';
  for (var i = 1; i < keys.length; i++) {
  let string = `<li><span class="tree_label" id="${client.name}-object-${keys[i]}-property">${keys[i]}</span></li>`;
  propertyTree += string;
  }

  return `<li><input type="checkbox" checked="checked" id="${client.name}-object" /><label for="${client.name}-object" class="tree_label">${client.name}</label><ul>${propertyTree}</ul></li>`
})


const root = Object.keys(state);

console.log(state.Client[0].address);
console.log(state.Client[0].personal);

// State Manipulation Functions



// Render Functions


const fetchClientObject = (callback) => $.getJSON(url, callback);

const logger = (response) => console.log(response);

const renderSubProperty = (event) => {
  $('#sub-property-1').html();    
}


const renderClientObject = (response) => {

  $('#root').html(root);  
  $('.object-tree').html(`<ul>${clientTree}</ul>`);
   
}

renderClientObject();

// Event Handlers



// AJAX

$(document).ready(fetchClientObject(logger()));
// $(document).ready(fetchClientObject(renderClientObject));