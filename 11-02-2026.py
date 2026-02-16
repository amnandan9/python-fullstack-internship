''' Type casting '''
>>> A=5
>>> a=6
>>> a
6
>>> type(a)
<class 'int'>
>>> string(a)
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    string(a)
NameError: name 'string' is not defined. Did you forget to import 'string'?
>>> string('a')
Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    string('a')
NameError: name 'string' is not defined. Did you forget to import 'string'?
>>> str('a')
'a'
>>> a
6
>>> str(a)
'6'
>>> str(6)
'6'
>>> a
6
>>> complex(a)
(6+0j)
>>> bool(a)
True
>>> a=True
>>> list(a)
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    list(a)
TypeError: 'bool' object is not iterable
>>> set(a)
Traceback (most recent call last):
  File "<pyshell#15>", line 1, in <module>
    set(a)
TypeError: 'bool' object is not iterable
>>> dict(a)
Traceback (most recent call last):
  File "<pyshell#16>", line 1, in <module>
    dict(a)
TypeError: 'bool' object is not iterable
tuple(a)
Traceback (most recent call last):
  File "<pyshell#17>", line 1, in <module>
    tuple(a)
TypeError: 'bool' object is not iterable
a='apple'
int(a)
Traceback (most recent call last):
  File "<pyshell#19>", line 1, in <module>
    int(a)
ValueError: invalid literal for int() with base 10: 'apple'
b='156'
int(b)
156
type'b'
SyntaxError: invalid syntax
type(b)
<class 'str'>
a=[10,25,65,[25,89],["ukl",789],753,459]
type(a)
<class 'list'>
dict(a)
Traceback (most recent call last):
  File "<pyshell#26>", line 1, in <module>
    dict(a)
TypeError: cannot convert dictionary update sequence element #0 to a sequence
a=[[10,25],[25,89],["ukl",789],[753,459]]
dict(a)
{10: 25, 25: 89, 'ukl': 789, 753: 459}
a=[[10,25],[25,89],["ukl",789],753,459]
dict(a)
Traceback (most recent call last):
  File "<pyshell#30>", line 1, in <module>
    dict(a)
TypeError: cannot convert dictionary update sequence element #3 to a sequence
a=((10,25),(25,89),("ukl",789),(753,459))
dict(a)
{10: 25, 25: 89, 'ukl': 789, 753: 459}
type(a)
<class 'tuple'>
b
'156'
b={1,2,3,5}
