'''
5 4
1 2 3
3 4 4
1 4 1
2 2 2
'''


n,m= map(int, input().split())
result=[0] * n;

for i in range(m):
    start,end,value= map(int,input().split())
    for j in range(start-1,end):
        result[j]= value;
     
    
    
print(*result)