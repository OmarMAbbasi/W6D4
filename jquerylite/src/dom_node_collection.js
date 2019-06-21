class DOMNodeCollection {
  constructor(HTMLArray) {
    this.HTMLArray = HTMLArray;
  }




getDomNode() {
  return this.HTMLArray;
}

html(htmlString) {
  if (!htmlString) {
    return this.HTMLArray[0].innerHTML;
  } else {
    HTMLArray.forEach(node => {
      node.innerHTML = htmlString;
    });
  }
}

empty() {
  HTMLArray.forEach(node => {
    node.innerHTML = "";
  });
}



append(arg) {
  if (arg instanceof DOMNodeCollection) {
    debugger;
    this.HTMLArray.forEach(inner => {
      arg.HTMLArray.forEach(outer => {
        inner.innerHTML += outer.outerHTML;
      });
      
    });
  } else if(typeof arg === "string"){
    this.HTMLArray.forEach(inner => {
      inner.innerHTML += arg;

    });
  }
  else {
    this.HTMLArray.forEach(inner => {
      inner.innerHTML += arg.outerHTML;
    });
  }
}

//attr() 
//(name) ==> return value
//(name, value) ==> set name="value"
//(name, func) ==> run func ==> name="returned"
//(obj) inst 


}

module.exports = DOMNodeCollection;