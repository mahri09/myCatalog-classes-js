ORGANİZE LIBRARY

Library database carries three different types of media: books, CDs, and movies. 
In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
•	Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
•	Getters: all properties have a getter
•	Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
•	Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
•	Getters: all properties have a getter
•	Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
•	Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings), duration (number).
•	Getters: all properties have a getter
•	Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
If you’re looking for a challenge, try to create the four classes without using the steps below.

1.
Let’s start by making a parent class called Media.

2.
Inside the Media class, create a constructor() method that takes one parameter.
This argument will set the one property that is in all three subclasses of Media, and does not have a default value.
Hint: Each of the three classes has properties for title, isCheckedOut, and ratings. However, the title property is the only one that does not have a default value.

3.
Inside the constructor, set the values for Media properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (_).
Hint: Set the _title property to title, set the _isCheckedOut property to false, and set the _ratings property to an empty array. 

4.
Create getters for the title, isCheckedOut, and ratings properties. Each getter should return the value saved to the matching property.

5.
Create a setter for the isCheckedOut property.

6.
Under your getters, create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property.
If the value is true, then change it to false. If the value is false, then change it to true.

7.
Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value of the ratings array.

8.
Let’s add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array.

Make sure input is between 1 and 10.

9.
Next, we’’ll build a Book class that extends Media.

10.
Inside the Book class, create a constructor that accepts three arguments. These arguments are used to set properties that do not have default values.
Hint: The constructor method arguments are author, title, and pages.

11.
Call super on the first line of the Books‘s constructor method. Pass it any arguments that the parent constructor uses.
Hint: Pass title to the parent constructor. 

12.
Use the remaining arguments to set the author and pages properties in Book.

13.
Since our Book class inherits Media‘s properties and getters, we only need to create two new getters in the Book class.

14.
Now, create an entire Movie class using only the property, getter, and method specifications given at the beginning of the document.

15.
Create a Book instance with the following properties:
•	Author: 'Édouard Louis'
•	Title: 'History of Violence'
•	pages: 224
Save the instance to a constant variable named historyOfViolence.

16.
Call .toggleCheckOutStatus() on the  historyOfViolence instance.

17.
Console.log the value saved to the isCheckedOut property in the  historyOfViolence instance.

18.
Call .addRating() three times on  historyOfViolence with inputs of 4, 5, and 5.

19.
Call .getAverageRating() on  historyOfViolence. Log the result to the console.

20.
Create a Movie instance with the following properties:
Director: 'Jean-Claude Van Damme'
•	Title: 'Blood Sport'
•	Runtime: 122
Save the instance to a constant variable named bloodSport.

21.
Call .toggleCheckOutStatus() on the bloodSport instance.

22.
Call .addRating() three times on bloodSport with inputs of 1, 1, and 5.

23.
Call .getAverageRating() on bloodSport. Log the result to the console.

24.
Now, create an entire CD class using only the property, getter, and method specifications given at the beginning of the document.
Add two more methods: .addSong(), and .shuffle()

Method shuffle()returns a randomly sorted array of all the songs in the songs property.

25.
Now create a new property for parent class that uses from our all subclasses (type)
HINT: Same as title.
26.
Call this new property in our constructors and supers of all.
Add type property (“history”, “action”, “drama”, etc.) for all instances you created before.

27.
Create two or more CD instances with the properties you choice.
Add songs for these CD instances.

28.
Create a class named Catalog that colllects all media in it. Write all media created by you (instances) to the new object (to be created from Catalog).

Log this catalog object to the console.


29. CHALLANGE
Create new instances from using DOM. Add ratings also.

•	Reach elements by using ids or classnames. (Assign them to variables)
•	Make an onclick function for button.
•	Create your instances by using input values.
•	Write your instances to the catalog object.
•	Print this data in DOM catalogLibrary paragraph that is already created.
