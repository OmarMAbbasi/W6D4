DOMNodeCollection = require("./dom_node_collection");


function $l(selector){
  // debugger;
  if(typeof selector === "string") {
    querySelector = document.querySelectorAll(selector);
    selectorArray = Array.from(querySelector); 
    return selectorDomNode = new DOMNodeCollection(selectorArray)
  } else if(selector instanceof HTMLElement) {
    return selectorDOMNode = new DOMNodeCollection([selector])
  }

}

window.$l = $l;

