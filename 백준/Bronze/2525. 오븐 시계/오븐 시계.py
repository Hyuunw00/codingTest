'''
23 48 
25
'''
t,m = map(int, input().split())

cookTime= int(input())



addM= m + cookTime
a= addM // 60 + t
b= addM % 60

if(a> 23):
    print(a%24, b)
else:
    print(a,b);
