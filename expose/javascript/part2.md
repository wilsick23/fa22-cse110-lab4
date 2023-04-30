1. 3 is printed, because the variable **i**, initially set to 0, was incremented three times in the for loop. Because it was declared with the *var* keyword, it exists outside the scope of the for-loop.
2. 150 is printed, because on the last iteration of the for-loop, we are accessing **prices[i]**, which is 300, multipled by (1 - **discount**). Here, **discount** is 0.5, so 300 * (1 - 0.5) = 150. The variable is not reassigned anymore after this, and because it was declared with *var*, then it still exists outside the scope of the for-loop.
3. Similar to question 2, 150 is printed again. After the last execution of line 8 in the for-loop, **finalPrice** equals 150.
4. The function will return an array, [50, 100, 150]. The for-loop in the function took each element from the array [100, 200, 300] and multipled it by (1 - 0.5) or 0.5. It rounded these values to the nearest integer, and they were all pushed into the array **discounted**, which was returned.
5. The code causes an error, because the variable **i**, declared with *let*, only exists in the scope of the for-loop, which had already finished by the time the execution reached line 12. Thus, **i** cannot be logged to the console.
6. Similarly, the code causes an error, because the variable **discountedPrice**, declared with *let*, only exists in the scope of the for-loop, which had already finished by the time the execution reached line 13. Thus, the value of **discountedPrice** cannot be logged to the console.
7. 150 is printed, in a similar way to question 3. Because **finalPrice** was declared before and outside the scope of the for-loop, it still exists at line 14, throwing no error.
8. The function returns the array [50, 100, 150]. The for-loop discounted the prices of the elements in the input array by half and pushed them to **discounted**, the returned variable.
9. The code throws an error. Similarly to question 5, the variable **i**, declared with *let*, only exists in the scope of the for-loop, which had already finished by the time the execution reached line 11. Thus, **i** cannot be logged to the console.
10. 3 is printed. When **length** was declared, it was also assigned the value of the length of **prices**, which was 3.
11. The code returns the array [50, 100, 150] because of the same reasoning as question 8. Althought the returned variable, **discounted**, was declared with *const*, we can still manipulate the array and push elements to it. 
12. 
    1.  alert( student.name );
    2.  alert( student["Grad Year"] );
    3.  student.greeting();
    4.  alert( student["Favorite Teacher"]["name"] );
    5.  alert( student["courseload"][0] );
13. 
    1. '32' because the integer 2 was converted to a string. We get '3'+'2' which is '32'.
    2.  1 because the string '3' was converted to an integer. We get 3-2 which is 1.
    3.  3 because null is converted to 0. We get 3+0 which is 3.
    4.  '3null' because null is converted to a string, 'null'. We get '3'+'null' which is '3null'.
    5.  4 because true is converted to 1. We get 1+3 which is 4.
    6.  0 because both false and null are converted to 0. We get 0+0 which is 0.
    7.  '3undefined' because undefined is converted to a string. We get '3'+'undefined' which is '3undefined'.
    8.  NaN because undefined is converted to NaN. Arithmetic operations with NaN will result in NaN.
14. 
    1.  true because '2' is converted to an integer. We get 2 > 1, which is true.
    2.  false because the first character of '2' is greater than the first character of '12'. Thus, '2' is greater than '12'.
    3.  true because '2' is converted to an integer, 2. We get 2 == 2, which is true.
    4.  false because the === operator also checks for type. Because '2' is a string and 2 is an integer, they are of different types and the result is false.
    5.  false because true is converted to 1, an integer. We get 1 == 2, which is false.
    6.  true because Boolean(2) is converted to true. We get true === true. Because they have the same value and are of the same type, the result is true.

15. === checks if the operands are of the same type first. If they are not, then it will automatically return false. == just checks for equality and will convert the operand(s) so that they are of the same type before comparing.
16. *part2-question16.js*
17. The function returns an array [2, 4, 6]. When **modifyArray** is called, it is passed **doSomething** as one of its arguments. As **modifyArray** exectues, it passes each element of the input array as the argument for the callback function, **doSomething**. This function doubles the value of the element and returns it, which then gets pushed into the new array to be returned in the **modifyArray** function.
18. *part2-question18.js*
19. 1\
    4\
    3\
    2