'''
These are the exercise for Swaping of variables
'''

a=1, b=2, c=3, d=4, e=a, f=d, b=d, d=f, f=d, a=b, b=e
h=10, i=20, j=30, k=40, l=h, m=j, j=k, k=i, p=k
a=10, b=20, c=a, a=b, b=c

Q1
a = 2
b = 4
c = a
a = b
b = c

Q2
x = 1
y = 2
z = 3

x, y, z = y, z, x

Q3
p = 10
q = 20
r = 30

temp = q
q = r
r = p
p = temp

✅ Example 1: Simple Swap (2 variables)
a = 10
b = 20

c = a
a = b
b = c


👉 Final values?

✅ Example 2: Python Shortcut Swap (No temp)
a = 5
b = 9
'''here in a single line the value swaps so the value of a is 5 later 9 and value of bis 9 later 5
ifthere was a line like a=b, b=a the both valu would be a=9, b=9'''

a, b = b, a


👉 Final values?

✅ Example 3: Swap 3 Variables (Rotation)
a = 1
b = 2
c = 3

temp = a
a = b
b = c
c = temp


👉 This becomes: a→2, b→3, c→1

✅ Example 4: Swap First and Last
a = 100
b = 200
c = 300
d = 400

temp = a
a = d
d = temp


👉 Final values?

✅ Example 5: Swap Middle Values
a = 10
b = 20
c = 30
d = 40

temp = b
b = c
c = temp


👉 What happens?

✅ Example 6: Swap Using Extra Variables (Like Your Style)
a = 1
b = 2
c = 3
d = 4

e = a
f = d

a = b
d = c

b = f
c = e


👉 Track the final values of a,b,c,d

✅ Example 7: Swap Pairwise
x = 11
y = 22
z = 33
w = 44

x, y = y, x
z, w = w, z


👉 Final values?

✅ Example 8: Circular Swap (4 variables)
a = 10
b = 20
c = 30
d = 40

temp = a
a = b
b = c
c = d
d = temp


👉 Rotation: a←b←c←d←a

✅ Example 9: Swap Without Temp (Math Trick)
a = 3
b = 7

a = a + b
b = a - b
a = a - b


👉 Final values?

⚠️ Not used much in Python, but good logic practice.

✅ Example 10: Mixed Swap (Hard Practice)
h = 10
i = 20
j = 30
k = 40

l = h
m = j

h = k
j = i
k = l
i = m


👉 Find final values of h,i,j,k

✅ Example 11: Basic Temp Swap (Like Your Last One)
a = 10
b = 20

c = a
a = b
b = c


👉 Final values?

✅ Example 12: Swap 3 Variables Without Temp (Python Style)
a = 1
b = 2
c = 3

a, b, c = c, a, b


👉 Final values?
