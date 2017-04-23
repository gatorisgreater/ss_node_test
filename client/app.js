const url = 'localhost:8080/client';


// State Object
const state = [
  {
    "_id": "58fb8726a1b4db1eb04e8076",
    "name": "Ina",
    "__v": 0,
    "address": {
      "home": "1234 Coding Lane",
      "work": "5678 Recursion Station"
    },
    "personal": {
      "favoriteColor": "blue",
      "luckyNumber": 9
    }
  },
  {
    "_id": "58fb8790a1b4db1eb04e8077",
    "name": "Robert",
    "__v": 0,
    "address": {
      "home": "1234 Hello World Drive.",
      "work": "5678 Hello World Lane"
    },
    "personal": {
      "favoriteColor": "orange",
      "luckyNumber": 22
    }
  },
  {
    "_id": "58fb87f5a1b4db1eb04e8078",
    "name": "Gareth",
    "__v": 0,
    "address": {
      "home": "1234 Linked List Way",
      "work": "5678 Bubblesort Highway"
    },
    "personal": {
      "favoriteColor": "yellow",
      "luckyNumber": 1
    }
  },
  {
    "_id": "58fb882aa1b4db1eb04e8079",
    "name": "Andrew",
    "__v": 0,
    "address": {
      "home": "1234 Console Log Drive",
      "work": "5678 Promise Object Blvd"
    },
    "personal": {
      "favoriteColor": "green",
      "luckyNumber": 1
    }
  }
];

console.log(state);

// State Manipulation Functions



// Render Functions

console.log(Object.keys(state[1].address));

const renderName = () => {
  $('#object-name-label').html(state[1].name);  
}

renderName();

const renderProperties = () => {
  Object.keys(state[1].address).forEach(function(key) {
  $('#property-1').html(key);
  console.log(key);      
  $('#property-2').html(key);
  console.log(key);       
  })
}

renderProperties();


// const renderObject = () => {
//   $('#object-label').html('Hello World');
// }

const fetchClientObject = (callback) => $.getJSON(url, callback);

const renderClientObject = (response) => {
  console.log(response);
  $('#object-label').html('Hello World');  
}


// Event Handlers

// renderObject();

// AJAX

$(document).ready(fetchClientObject(renderClientObject));













// function isNumber(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }

// function setFontSize(el) {
//     var fontSize = el.val();
    
//     if ( isNumber(fontSize) && fontSize >= 0.5 ) {
//       $('body').css({ fontSize: fontSize + 'em' });
//     } else if ( fontSize ) {
//       el.val('1');
//       $('body').css({ fontSize: '1em' });  
//     }
// }

// $(function() {
  
//   $('#fontSize')
//     .bind('change', function(){ setFontSize($(this)); })
//     .bind('keyup', function(e){
//       if (e.keyCode == 27) {
//         $(this).val('1');
//         $('body').css({ fontSize: '1em' });  
//       } else {
//         setFontSize($(this));
//       }
//     });
  
//   $(window)
//     .bind('keyup', function(e){
//       if (e.keyCode == 27) {
//         $('#fontSize').val('1');
//         $('body').css({ fontSize: '1em' });  
//       }
//     });
  
// });