# calculator
08.02.2023: First version of Calculator 

Implementation:
- Basic layout using flexbox
- Input number to display
- Operations (add, substract, mutiply, divide)
- Clear, Clear all
- Equals
- Change sign

ToDo:
- Layout
- Error handling (Div0, Display overflow)

Trained/Learned:
Building basic Layout was trivial.
The first step in coding the functionality was building functions to handle the different operations as well as another function to choose the correct operation. These were thoroughly tested and performed as expected.
The second step consisted of wiring up the buttons so a number could be put in by pressing the buttons. This number also is shown in the display. I planned on using floating point numbers from the beginning, so I devised a way to generate them one character at a time. For this, I used two Strings, one for the numbers leading the decimal point, one for the numbers trailing it, and generated the final number from them.
Wiring up the other buttons (operations, equals, change sign, clear and clear all) required careful handling of all used variables.