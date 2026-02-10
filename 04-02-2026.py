'''
Single Value Data Type
int, float, complex, bool
'''
a=89, b=409, c=34 '''int'''
a=89.0, b=43.43, c=43.234 '''float'''
a=8j, b=9j+56, c=34+0j '''complex'''

>>> 8j
8j
>>> a=9j
>>> type(a)
<class 'complex'>
>>> a=9j+56
>>> type(a)
<class 'complex'>

'''in complex value the real and imaginary part can be inter changed but the coefficient of imaginary part cannot
be interchanged'''
bool(a), bool(b), bool(c)
'''here the valu of all the bool function is true unless it is completle a default valu if at all it contaiins the default value in them
then still it is true as it is associated with other value'''

>>> a=0j+4
>>> bool(a)
True
>>> a=0j
>>> bool(a)
False
