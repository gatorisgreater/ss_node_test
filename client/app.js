const url = 'localhost:8080/client';


// State Object
const state = {
  "Client": [
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
  ]
}

console.log(state);

const root = Object.keys(state);

console.log(state.Client[1].address.children);

// State Manipulation Functions



// Render Functions


const fetchClientObject = (callback) => $.getJSON(url, callback);

const renderClientObject = (response) => {

  $('#root').html(root);  
  $('#object-name-label-1').html(state.Client[0].name);
  $('#object-name-label-2').html(state.Client[1].name); 
  $('#object-name-label-3').html(state.Client[2].name);
  $('#object-name-label-4').html(state.Client[3].name);     

  $('#object-1-property-1').html('Hello World');
  $('#object-1-property-2').html('Hello World');

  $('#object-2-property-1').html('Hello World');
  $('#object-2-property-2').html('Hello World');

  $('#object-3-property-1').html('Hello World');
  $('#object-3-property-2').html('Hello World');     

  $('#object-4-property-1').html('Hello World');
  $('#object-4-property-2').html('Hello World');               
  
}

renderClientObject();

// Event Handlers



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