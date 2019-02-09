#opening file and w-writing to it. a is for append to file 
f = open('newfile.txt', 'a')
#append string in new line
lines = ['Hello','World','Welcome','To','File IO']
text = '\n'.join(lines)
f.writelines(text)
f.close()