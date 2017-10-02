# programming 101

* Datatype
  * Scalar type (who holds only one value)
    * Numbers
      * Integer (absolute number - 10)
      * Floating / Double (Fractional number 13.14)
    * Boolean (True, False)
    * String (Text)
  * Composite type (who holds mix value)
    * Array 
    ~~~js
    var names = ['sumon', 'sarwar', 'imran']  
    names[0] //sarwar
    ~~~
    * Object
    ~~~js
    names = {name1 : 'sumon', name2 : 'sarwar', name3 : 'imran'} 
    names['name2']   //sarwar
    //or
    names.name2 //sarwar
    ~~~
* Control flow
  * iterative
    ~~~js
    //for, while, foreach  

    for (var number = 0; number < 3; number ++ ) {
      names[number]
    }
    for (name in names) {
      name 
    }
    while(true/false) {
      'some code execute';
      'condition';
    }
    ~~~
  * conditional
    ~~~js
    if, else, else if, elseif
    ~~~
* Variable
~~~js
var name1 = 'sumon';
~~~

* Function   
  Built in Function 
  ~~~js
  name1 = 'sumon';
  name1.toUpperCase() = SUMON
  ~~~
  User Defined function   
  ~~~js
  function add (number1, number2) {
    return number1 + number2;
  }
  add(2+3);
  add(5+3);
  ~~~
  
* operator
~~~js
+ - * / % = > < == ===  ++ --
~~~