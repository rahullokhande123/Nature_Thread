from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt
from .models import FirstCaro,SecondCaro,ThirdCaro,FourthCaro,FifthCaro,WomanCategories,ManCategories,KidsCategories,PersonalcareCategories
from .serializers import FirstCaroSerializers,SecondCaroSerializers,ThirdCaroSerializers,FourthCaroSerializers,FifthCaroSerializers,WomanCategoriesSerializers,ManCategoriesSerializers,KidsCategoriesSerializers,PersonalcareCategoriesSerializers

# import razorpay

# Create your views here.

@csrf_exempt
def firstCaroImg(request):
    images = FirstCaro.objects.all()
    serializer = FirstCaroSerializers(images, many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def secondCaroImg(request):
    images = SecondCaro.objects.all()
    serializer = SecondCaroSerializers(images, many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def thirdCaroImg(request):
    images = ThirdCaro.objects.all()
    serializer = ThirdCaroSerializers(images, many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def fourthCaroImg(request):
    images = FourthCaro.objects.all()
    serializer = FourthCaroSerializers(images, many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def fifthCaroImg(request):
    images = FifthCaro.objects.all()
    serializer = FifthCaroSerializers(images, many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def womanCategories(request):
    mydata=WomanCategories.objects.all()
    serializer=WomanCategoriesSerializers(mydata,many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def manCategories(request):
    mydata=ManCategories.objects.all()
    serializer=ManCategoriesSerializers(mydata,many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def kidsCategories(request):
    mydata=KidsCategories.objects.all()
    serializer=WomanCategoriesSerializers(mydata,many=True)
    return JsonResponse(serializer.data,safe=False)

@csrf_exempt
def personalcareCategories(request):
    mydata=PersonalcareCategories.objects.all()
    serializer=PersonalcareCategoriesSerializers(mydata,many=True)
    return JsonResponse(serializer.data,safe=False)

# def payment(request):
#     global payment
#     if request.method=="POST":
#         # amount in paisa
#         amount = int(request.POST.get('amount')) * 100
        
#         client = razorpay.Client(auth =("rzp_test_pr99iascS1WRtU" , "UTDIzPGwICnAssu3Q3lk7zUi"))
#         # create order
        
#         data = { "amount": amount, "currency": "INR", "receipt": "order_rcptid_11" }
#         payment = client.order.create(data=data)
#         product = Product.objects.create( amount =amount , order_id = payment['id'])
#         cart = request.session.get('cart',[])
#         quantity = request.session.get('quantity',[])
#         alldata = []
#         i=0
#         j=0
#         total=0
#         while i < len(cart):
#             data = WeddingsData.objects.get(id=cart[i])
#             total = total + (data.item_price)*quantity[j]
#             alldata.append({
#                 'id':data.id,
#                 'item_name':data.item_name,
#                 'item_des':data.item_des,
#                 'item_price':data.item_price,
#                 'item_image':data.item_image,
#                 'item_quantity':quantity[j]
#             })
#             i+=1
#             j+=1
#         # print(payment)
#         return render(request,'cart.html',{'key':alldata,'amount':total,'payment':payment})
    
# @csrf_exempt
# def payment_status(request):
#        if request.method=="POST": 
#         response = request.POST
#         print(response) #  
#         print(payment)

#         razorpay_data = {
#             'razorpay_order_id': response['razorpay_order_id'],
#             'razorpay_payment_id': response['razorpay_payment_id'],
#             'razorpay_signature': response['razorpay_signature']
#         }

#         # client instance
#         client = razorpay.Client(auth =("rzp_test_pr99iascS1WRtU" , "UTDIzPGwICnAssu3Q3lk7zUi"))

#         try:
#             status = client.utility.verify_payment_signature(razorpay_data)
#             product = Product.objects.get(order_id=response['razorpay_order_id'])
#             product.razorpay_payment_id = response ['razorpay_payment_id']
#             product.paid = True
#             product.save()
            
#             return render(request, 'success.html', {'status': True})
#         except:
#             return render(request, 'success.html', {'status': False})



    

