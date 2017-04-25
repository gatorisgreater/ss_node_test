const url = 'https://guarded-mountain-54113.herokuapp.com/client';

// State Object

let state = {};

// State Manipulation Functions

let root;
let clientTree;
let subPropertyTree;

const makeClientTree = () => {

  root = Object.keys(state);

  clientTree = state.Client.map(client => {
   
  let keys = Object.keys(client);
  console.log(keys);

  let propertyTree = '';
    for (var i = 1; i < keys.length; i++) {
      let string = `<li><span class="tree_label" id="${client.name}-object-${keys[i]}-property">${keys[i]}</span></li>`;
      propertyTree += string;
    };

    return `<li><input type="checkbox" checked="checked" id="${client.name}-object" /><label for="${client.name}-object" class="tree_label">${client.name}</label><ul>${propertyTree}</ul></li>`
  });

};


const makeSubPropertyTree = (index) => {

  console.log(state.Client[index]);
  // let keys = Object.keys(client);
  // console.log(keys);

  // let subPropertyTree = '';
  //   for (var i = 1; i < keys.length; i++) {
  //     let string = `<li><span class="tree_label" id="${client.name}-object-${keys[i]}-property">${keys[i]}</span></li>`;
  //     propertyTree += string;
  //   };

  //   return `<li><input type="checkbox" checked="checked" id="${client.name}-object" /><label for="${client.name}-object" class="tree_label">${client.name}</label><ul>${propertyTree}</ul></li>`
  };



// Render Functions

const renderClientObject = () => {
  makeClientTree();
  $('#root').html(root);  
  $('.object-tree').html(`<ul>${clientTree}</ul>`);
  $('.header').addClass("hidden");
  $('.content').removeClass("hidden");
  makeSubPropertyTree(0);  
}


const renderSubProperty = (event) => {

}


// Event Handlers

$('.menu-button').click(event => {
  event.preventDefault();
  renderClientObject();
});

// AJAX

const ajaxClientObject = () => {
  return fetch(url).then(response => {
    return response.json();
  })
};

const fetchClientObject = (callback) => {
  callback().then(function(response) {
  state = response;
  console.log(state);
});
}

fetchClientObject(ajaxClientObject);