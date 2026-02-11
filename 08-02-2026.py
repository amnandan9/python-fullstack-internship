''' set '''

>>> a={1,2,3,4}
>>> type(a)
<class 'set'>
>>> c={'l',10,2}
>>> type(c)
<class 'set'>
>>> c[0]
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    c[0]
TypeError: 'set' object is not subscriptable
>>> s={1,2,30}
>>> s.add(40)
>>> s
{40, 1, 2, 30}
>>> s.add(400)
>>> s
{1, 2, 40, 400, 30}
>>> s
{1, 2, 40, 400, 30}
>>> a=set()
>>> type(a)
<class 'set'>
