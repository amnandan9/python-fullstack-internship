''' Dict '''

>>> d={10:100,20:200,30:300}
>>> d[10]
100
>>> d[20]
200
>>> d[30]
300
>>> b={'a':[10,20,30],'b':81,'c':'welcome',55:{1:1,2:2}}
>>> b['a']
[10, 20, 30]
>>> b['b']
81
>>> b['c']
'welcome'
>>> b[55]
{1: 1, 2: 2}
>>> b[a]
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    b[a]
NameError: name 'a' is not defined
>>> b['a']
[10, 20, 30]
>>> b['a'][2]
30
>>> b[c][5]
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    b[c][5]
NameError: name 'c' is not defined
>>> b['c'][5]
'm'
>>> b[55][2]
2
>>> b={'a':{'b':{'c':{'d':['dinga loves dingi']}}}}
>>> b[a][b][c]
Traceback (most recent call last):
  File "<pyshell#16>", line 1, in <module>
    b[a][b][c]
NameError: name 'a' is not defined
>>> b['a']['b']['c']
{'d': ['dinga loves dingi']}
>>> b['a']['b']['c']['d'][3]
Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    b['a']['b']['c']['d'][3]
IndexError: list index out of range
b['a']['b']['c']['d']
['dinga loves dingi']
b['a']['b']['c']['d'][0]
'dinga loves dingi'
b['a']['b']['c']['d'][0][3]
'g'
b['a']['b']['c']['d'][0][1]
'i'
b['a']['b']['c']['d'][0][13]
'i'
d={1:{'a':{5.5:{false:('w','thu','friday',[[10,20,30],[44,55,66]])}}}}
Traceback (most recent call last):
  File "<pyshell#24>", line 1, in <module>
    d={1:{'a':{5.5:{false:('w','thu','friday',[[10,20,30],[44,55,66]])}}}}
NameError: name 'false' is not defined. Did you mean: 'False'?
d={1:{'a':{5.5:{False:('w','thu','friday',[[10,20,30],[44,55,66]])}}}}
d[1]['a'][5.5][0]
('w', 'thu', 'friday', [[10, 20, 30], [44, 55, 66]])
d[1]['a'][5.5][False]
('w', 'thu', 'friday', [[10, 20, 30], [44, 55, 66]])
d[1]['a'][5.5][0][1]
'thu'
d[1]['a'][5.5][0][2][2]
'i'
d[1]['a'][5.5][0][3][1][2]
66
d[1]['a'][5.5][0][0:2]
('w', 'thu')
d[1]['a'][5.5][0][2][0:2]
'fr'
d[1]['a'][5.5][0][2][0:3]
'fri'
