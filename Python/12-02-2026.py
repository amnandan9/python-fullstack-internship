''' Operator in Python '''
''' 1. Arithmetic Operator
    2. Logical Operator
    3. Membership Operator
    4. Identity Operator
    5. Assignment Operator
    6. Relation Operator/Comparision Operator 

1. Arithmetic Operator
   a. addition operator
   b. subtraction operator
   c. multiplication operator
   d. power operator
   e. division operator
       i. True Division
       ii. floor Division
       iii. Modulus Division Operator'''

''' a. addition Operator '''

>>> 10+2
12
>>> 10.3+3
13.3
>>> 2+7j+6
(8+7j)
>>> "pine"+"apple"
'pineapple'
>>> [1,2,3]+[4,5,6]
[1, 2, 3, 4, 5, 6]
>>> {1,2,3}+{5,6}
Traceback (most recent call last):
  File "<pyshell#7>", line 1, in <module>
    {1,2,3}+{5,6}
TypeError: unsupported operand type(s) for +: 'set' and 'set'
>>> (1,2,3)+(5,6)
(1, 2, 3, 5, 6)
>>> {"a":1,"b":2} + {"c":3,"d":4}
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    {"a":1,"b":2} + {"c":3,"d":4}
TypeError: unsupported operand type(s) for +: 'dict' and 'dict'



''' b. subtraction operator '''

>>> 10-2
8
>>> 22.2-3
19.2
>>> 30-4j-3
(27-4j)
>>> 3-True
2
>>> "hi"-'hello'
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    "hi"-'hello'
TypeError: unsupported operand type(s) for -: 'str' and 'str'
>>> [1,2,3]-[4,5,6]
Traceback (most recent call last):
  File "<pyshell#15>", line 1, in <module>
    [1,2,3]-[4,5,6]
TypeError: unsupported operand type(s) for -: 'list' and 'list'
>>> {2,3,4,5}-{6,2,8,9}
{3, 4, 5}
{"a":1,"b":2} - {"c":3,"d":4}
Traceback (most recent call last):
  File "<pyshell#21>", line 1, in <module>
    {"a":1,"b":2} - {"c":3,"d":4}
TypeError: unsupported operand type(s) for -: 'dict' and 'dict'

''' multiplication operator '''





