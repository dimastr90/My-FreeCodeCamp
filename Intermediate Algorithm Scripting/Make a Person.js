/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object. Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code. */

var Person = function(firstAndLast) {
  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return firstName+" "+lastName;
  };

   this.getFirstName = function(){
     return firstName;
   }

   this.getLastName = function(){
     return lastName;
   }

   this.setFullName = function(name){
     firstName = name.split(' ')[0];
     lastName = name.split(' ')[1];
   }

   this.setFirstName = function(name){
      firstName = name;
   }

   this.setLastName = function(name){
      lastName = name;
   }

};

var bob = new Person('Bob Ross');
bob.getFullName();
