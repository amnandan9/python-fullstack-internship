'''LIST PRACTICE EXAMPLES'''

1 Basic List Creation
# A list of numbers
nums = [10, 20, 30, 40]
print(nums)

2 List of Strings
# A list of names (strings)
names = ["Ravi", "Nithish", "Kumar"]
print(names)

3 Mixed Data Type List (Twisted Example)
# List can store different types together
data = [10, 3.5, "Python", True]
print(data)

4 Accessing List Elements (Indexing)
nums = [5, 10, 15, 20]
# Access first element
print(nums[0])
# Access last element
print(nums[-1])

5 Updating List Values
nums = [1, 2, 3, 4]
# Change the 2nd element
nums[1] = 99
print(nums)

6 List Slicing (Extracting Part)
nums = [10, 20, 30, 40, 50]
# Get middle elements
print(nums[1:4])

7 Add Elements (append)
fruits = ["apple", "banana"]
# Add one fruit at the end
fruits.append("mango")
print(fruits)

8 Insert at Specific Position
nums = [1, 2, 4, 5]

# Insert 3 at index 2
nums.insert(2, 3)

print(nums)

9 Remove Element (remove)
nums = [10, 20, 30, 20]

# Removes first occurrence of 20
nums.remove(20)

print(nums)

10 Pop Element (Remove by Index)
nums = [100, 200, 300]
# Remove element at index 1
nums.pop(1)
print(nums)

''' Twisted / Tricky List Examples '''
1 List Inside a List (Nested List)
# A nested list (2D list)
matrix = [[1, 2], [3, 4], [5, 6]]
print(matrix)
Access inner element:
print(matrix[1][0])  # 3

2 Twisted Mixed Nested List
weird = [10, "hi", [1, 2, 3], True]
print(weird[2])       # Inner list
print(weird[2][1])    # Element inside inner list

3 List Repetition
# Repeat list elements
x = [1, 2] * 3
print(x)
✅ Output:
[1, 2, 1, 2, 1, 2]
4️⃣ List Concatenation
a = [1, 2, 3]
b = [4, 5]
c = a + b
print(c)

5 Reverse a List
nums = [1, 2, 3, 4]
nums.reverse()
print(nums)

6 Sorting a List
nums = [40, 10, 30, 20]
nums.sort()
print(nums)

''' List Loop Examples '''
1 Print All Elements
nums = [10, 20, 30]
for x in nums:
    print(x)

2 Print Index + Value
nums = [5, 10, 15]
for i in range(len(nums)):
    print(i, "->", nums[i])

''' Practice Questions For You '''
Try these and tell me the output:
Q1
a = [10, 20, 30]
print(a[1])

Q2
x = ["apple", "banana", "mango"]
x.append("grape")
print(x)

Q3 (Twisted)
y = [1, 2, [10, 20], 5]
print(y[2][0])

Q4
nums = [5, 2, 9, 1]
nums.sort()
print(nums)

Q5 (Negative Index)
z = ["a", "b", "c", "d"]
print(z[-2])
