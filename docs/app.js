// API endpoint URL

const url = 'https://guarded-mountain-54113.herokuapp.com/client';

///////////BASIC STATE MANAGEMENT FRAMEWORK

// State Object

let state = {};

// State Manipulation Functions

    let root;
    let clientTree;
    let subPropertyTree;


    // Makes Dynamic Client Menu

    const makeClientTree = () => {

      root = Object.keys(state);

      clientTree = state.Client.map((client, index) => {
       
      let keys = Object.keys(client);
      console.log(keys);

      let propertyTree = '';
        for (var i = 1; i < keys.length; i++) {
          let string = `<li><span class="tree_label" id="${client.name}-object-${keys[i]}-property" value=${index}>${keys[i]}</span></li>`;
          propertyTree += string;
        };

        return `<li><input type="checkbox" checked="checked" id="${client.name}-object" /><label for="${client.name}-object" class="tree_label">${client.name}</label><ul>${propertyTree}</ul></li>`
      });

    };

    // Makes Dynamic Client Subproperty Menu

    const makeSubPropertyTree = (index) => {

      let clientPropertyTree = state.Client[index];

      let clientKeys = Object.keys(clientPropertyTree);

      console.log(clientPropertyTree);



      let subPropertyTree = '';
        for (var i = 1; i < clientKeys.length; i++) {
          let subprops = Object.keys(clientPropertyTree[clientKeys[i]]);
          console.log(subprops);
          console.log(clientKeys[i]);
          let string = `<p class="sub-property">${clientKeys[i]}</p>`;
          subPropertyTree += string;
        };
        console.log(subPropertyTree);
        return subPropertyTree;
      };



// Render Functions

    // Renders Client Menu

    const renderClientObject = () => {
      makeClientTree();
      $('#root').html(root);  
      $('.object-tree').html(`<ul>${clientTree}</ul>`);
      $('.header').addClass("hidden");
      $('.content').removeClass("hidden");
      makeSubPropertyTree(0);
        $('.sub-tree').html(`${subPropertyTree}`);  
    }


    const renderSubProperty = (event) => {

    }


// Event Handlers

    // Triggers Dynamic Menu System after Welcome Screen

    $('.menu-button').click(event => {
      event.preventDefault();
      renderClientObject();
    });

// AJAX

    // Makes AJAX call and assigns response object as the codebase state object

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