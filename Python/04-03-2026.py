'''
n = 9

for i in range(n):
    for j in range(n):
        # Border of the box
        if i == 0 or i == n-1 or j == 0 or j == n-1:
            print("*", end=" ")
        
        # Plus shape inside
        elif i == n//2 or j == n//2:
            print("*", end=" ")
        
        else:
            print(" ", end=" ")
    print()
'''
'''
n = 7

for i in range(n):
    for j in range(n):

        # Border
        if i == 0 or i == n-1 or j == 0 or j == n-1:
            print("*", end=" ")

        # Plus shape (middle row & column)
        elif i == n//2 or j == n//2:
            print("*", end=" ")

        # Diagonals
        elif i == j or i + j == n-1:
            print("*", end=" ")

        # 3x3 center box
        elif 2 <= i <= 4 and 2 <= j <= 4:
            print("*", end=" ")

        else:
            print(" ", end=" ")
    print()
'''
'''
n = 7

for i in range(n):
    for j in range(n):

        # 5-star horizontal and vertical + 
        if (i == n//2 and 1 <= j <= 5) or (j == n//2 and 1 <= i <= 5):
            print("*", end=" ")

        # 3x3 center box
        elif 2 <= i <= 4 and 2 <= j <= 4:
            print("*", end=" ")

        else:
            print(" ", end=" ")
    print()
'''
'''
n = 7

for i in range(1, n+1):
    for j in range(1, n+1):

        # + shape with 5 stars
        if (i == 4 and 2 <= j <= 6) or (j == 4 and 2 <= i <= 6):
            print("*", end=" ")

        # 3x3 center box
        elif 3 <= i <= 5 and 3 <= j <= 5:
            print("*", end=" ")

        else:
            print(" ", end=" ")
    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(1, n+1):

        if (i + j) % 2 == 0:
            print("*", end="")
        else:
            print("0", end="")

    print()
'''
'''
n = 5

for i in range(1, n+1):
    for j in range(1, i+1):
        print(i, end="")
    print()
'''
'''
n = 4
num = 1

for i in range(1, n+1):
    for j in range(1, i+1):
        print(num, end="")
        num += 1
    print()
'''
n = 7

for i in range(1, n+1):
    for j in range(1, i+1):
        print(chr(64 + j), end="")
    print()
