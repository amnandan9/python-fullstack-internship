''' Slicing '''
>>> a="i love mysore"
>>> a[2:6]
'love'
>>> a[2:5]
'lov'
>>> a[2:5:1]
'lov'
>>> a[2:5:2]
'lv'
>>> a[2:5:-1]
''
>>> a[12]
'e'
>>> a[-1:-5:-1]
'eros'
>>> a[-1:-5:1]
''
>>> a[-8]
'e'
>>> a[-11]
'l'
>>> a[-8:-11]
''
>>> a[-8:-12]
''
>>> a[-8:-12:-1]
'evol'
>>> a[::]
'i love mysore'
>>> a[::1]
'i love mysore'
>>> a[0:12:1]
'i love mysor'
>>> a[:12:1]
'i love mysor'
>>> a[0::1]
'i love mysore'
>>> a[::2]
'ilv yoe'
>>> a
'i love mysore'
>>> a[::2]
'ilv yoe'
>>> a[::1]
'i love mysore'
a[::2]
'ilv yoe'
a[::3]
'io se'
