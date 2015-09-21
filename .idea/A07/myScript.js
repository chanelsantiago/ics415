/**
 * Created by chanelsantiago on 9/19/15.
 */
function getClasses(elem){
  var classes = elem.classList;
  return classes.valueOf();
}

function addClass(elem, className) {
  elem.classList.add(className);
}