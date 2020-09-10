import os,subprocess
# varify the path using getcwd() 
cwd = os.getcwd() 
os.chdir("./api-solar")
# print the current directory 
os.system("export FLASK_APP=appFlask.py")
os.system("flask run")