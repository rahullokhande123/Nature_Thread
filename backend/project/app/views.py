from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt
from .models import FirstCaro,SecondCaro,ThirdCaro,FourthCaro,FifthCaro,WomanCategories
from .serializers import FirstCaroSerializers,SecondCaroSerializers,ThirdCaroSerializers,FourthCaroSerializers,FifthCaroSerializers,WomanCategoriesSerializers

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
    

