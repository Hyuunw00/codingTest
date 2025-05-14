'''
1 1
2 3
3 4
9 8
5 2
0 0
'''

while True:
      a,b= map(int,input().split())
      if a==0 and b==0:
        break;
      else:
        print(a+b)