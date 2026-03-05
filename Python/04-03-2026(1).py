'''Assignment'''
'''
n = 5

for i in range(1,n+1):
    
    for j in range(1,i):
        print(" ",end="")
        
    for j in range(1,n-i+2):
        print("*",end="")
        
    print()
'''
'''
n = 5

for i in range(1,n+1):

    for j in range(1,i):
        print(" ",end="")

    for j in range(1,n-i+2):
        print(chr(64+j),end="")

    print()
'''
'''
n = 5

for i in range(1,n+1):

    for j in range(1,i):
        print(" ",end="")

    for j in range(n,i-1,-1):
        print(chr(64+j),end="")

    print()
'''
'''
n = 5

for i in range(1,n+1):

    for j in range(1,i):
        print(" ",end="")

    for j in range(1,n-i+2):
        print(j,end="")

    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(n, i-1, -1):
        print(j, end="")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(1, n-i+2):
        print(chr(64+i), end="")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(1, n-i+2):
        print(chr(64 + (n-i+1)), end="")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(1, n-i+2):
        print(i, end="")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(1, n-i+2):
        print(n-i+1, end="")
    print()
'''
'''
n = 5

for i in range(n, 0, -1):
    for j in range(i, 0, -1):
        print(chr(64+j), end="")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(i, n+1):
        print(chr(64+j), end="")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(n-i+1, 0, -1):
        print(j, end="")
    print()
'''
'''
Python 3.12.8 (tags/v3.12.8:2dc476b, Dec  3 2024, 19:30:04) [MSC v.1942 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> 
======== RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py =======
*****
 ****
  ***
   **
    *
>>> 
======== RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py =======
ABCDE
 ABCD
  ABC
   AB
    A
>>> 
============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
EDCBA
 EDCB
  EDC
   ED
    E
>>> 
============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
12345
 1234
  123
   12
    1
>>> 
============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
54321
5432
543
54
5
>>> 
============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
AAAAA
BBBB
CCC
DD
E
>>> 
============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
EEEEE
DDDD
CCC
BB
A

============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
11111
2222
333
44
5

============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
55555
4444
333
22
1

============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
EDCBA
DCBA
CBA
BA
A

============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
ABCDE
BCDE
CDE
DE
E

============ RESTART: C:/Users/Maria Kevin/OneDrive/Desktop/04-03-2026(1).py ===========
54321
4321
321
21
1
'''
