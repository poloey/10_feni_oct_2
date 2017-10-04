# Class 10 
### View [all class list](https://github.com/poloey/feni)

# programming 101 with javaScript
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
    //while 
    var number = 0;
    while(number < 3 ) {
      names[number];
      number = number + 1;
    }
    //for, while, foreach  

    for (var number = 0; number < 3; number ++ ) {
      names[number]
    }
    for (number in names) {
      names[number]
    }
    ~~~
  * conditional
    ~~~js
    if, else, else if, elseif
    if (true/false) {
       'if true';
    } else if (true / false) {
      'if this block is true';
    } else {
      'any if block is not true'
    }
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
+ - * / % = > < == ===  ++ -- | 
~~~
`%` (Modulus) returns the division remainder    
`++` increse by 1    
`--` decrese by 1    
`==` equal check    
`===` identity check (equl check + datatype check)    


# Document Object Model (DOM) - Web API

* to showing something in console
~~~js
console.log();
~~~

* to showing something in dom using alert   
~~~js 
alert();
~~~   


* to select a id    

~~~js
var hello = document.getElementById('hello');
~~~

* to write inside html using innerHTML
~~~js
hello.innerHTML = "<h1>heading created by javascript</h1>";
~~~













