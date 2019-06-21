append(arg) {
  switch (typeof arg) {

    case "DOMNodeCollection":
      this.HTMLArray.forEach(inner => {
        arg.HTMLArray.forEach(outer =>
          closingIndex = inner.innerHTML.indexOf(">");
          innerString = inner.innerHTML;
          
          left = innerString.slice(0, closingIndex);
          right = innerString.slice(closingIndex + 1);
          if (!right) {
            right = "</" + left.slice(1)
          }
          inner.innerHTML = left + outer.outerHTML + right;
        });
      });
      break;

    case "HTMLElement":
      this.HTMLArray.forEach(inner => {
          closingIndex = inner.innerHTML.indexOf(">");
          innerString = inner.innerHTML

          outer = arg.outerHTML;
          left = innerString.slice(0, closingIndex);
          right = innerString.slice(closingIndex + 1);

          if (!right) {
            right = "</" + left.slice(1)
          }

          inner.innerHTML = left + outer + right;
      });
      break;
    case "string":
      this.HTMLArray.forEach(inner => {
        closingIndex = inner.innerHTML.indexOf(">");
        innerString = inner.innerHTML

        outer = arg;
        left = innerString.slice(0, closingIndex);
        right = innerString.slice(closingIndex + 1);

        if (!right) {
          right = "</" + left.slice(1)
        }

        inner.innerHTML = left + outer + right;
      });
      break;
    default:
      break;
  }
}

//attr() 
//(name) ==> return value
//(name, value) ==> set name="value"
//(name, func) ==> run func ==> name="returned"
//(obj) inst 


}