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

      let propertyTree = '';
        for (var i = 1; i < keys.length; i++) {
          let string = `<li><span class="tree_label" id="${client.name}-object-${keys[i]}-property" value=${index} key=${keys[i]}>${keys[i]}</span></li>`;
          propertyTree += string;
        };

        return `<li><input type="checkbox" checked="checked" id="${client.name}-object" /><label for="${client.name}-object" class="tree_label">${client.name}</label><ul>${propertyTree}</ul></li>`
      });

    };

    // Makes Dynamic Client Subproperty Menu

    const makeSubPropertyTree = (index, property) => {

      let client = state.Client[index];

      let subPropertyObject = client[property];

      let subprops = Object.keys(subPropertyObject);

      subPropertyTree = subprops.map(sub => {
        return `<li>${sub}</li>`
      })
    };



// Render Functions

    // Renders Client Menu

    const renderClientObject = () => {
      makeClientTree();
      $('#root').html(root);  
      $('.object-tree').html(`<ul>${clientTree}</ul>`);
      $('.header').addClass("hidden");
      $('.content').removeClass("hidden");
    }

// Event Handlers

    // Triggers Dynamic Menu System after Welcome Screen

    $('.menu-button').click(event => {
      event.preventDefault();
      renderClientObject();
    });

    $(document).on('click', 'span.tree_label', event => {
      event.preventDefault();
      let trigger = event.target;
      console.log(trigger);
      let index = trigger.getAttribute('value');
      let property = trigger.getAttribute('key');
      makeSubPropertyTree(index, property);
      $('.sub-tree').html(`<ul>${subPropertyTree}</ul>`);        

    })

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
    });
    }

    fetchClientObject(ajaxClientObject);