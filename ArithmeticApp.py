import requests
import json

nadisha_host = "http://192.168.0.13:3333"
mbp_host = "http://192.168.0.12:8080"
local_host = "http://localhost:8080"
add_service_url = local_host
multiply_service_url = local_host

def addNumbers(num1,num2):



    url = add_service_url+ "/add/" + str(num1) + "/" + str(num2)

    myResponse = requests.get(url)

    jData = json.loads(myResponse.content)

    return jData["result"]

def multiplyNumbers(num1,num2):



    url = multiply_service_url + "/multiply/" + str(num1) + "/" + str(num2)

    myResponse = requests.get(url)

    jData = json.loads(myResponse.content)
    return jData["result"]

def addThenSquareResult(num1,num2):

    #from CRM
    sum = addNumbers(num1,num2)

    #from WOS
    square = multiplyNumbers(sum,sum)

    return square

num1 = 7
num2 = 8
print(str(addThenSquareResult(num1,num2)))