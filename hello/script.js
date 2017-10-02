var names = ['tanim', 'sumon', 'sarwar', 'hayder'];
var hello = document.getElementById('hello');
// hello.innerHTML = names[0];
// for (name in names) {
//   console.log(names[name]);
//}

for (var i = 0; i <= 3; i = i+1) {
  console.log(names[i]);

}
var friends = "<li>" + names[0] + "</li>";
var friends = friends + "<li>" + names[1] + "</li>";
var friends = friends + "<li>" + names[2] + "</li>";
var friends = friends + "<li>" + names[3] + "</li>";

hello.innerHTML = friends;
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])