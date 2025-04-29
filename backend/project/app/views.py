from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt
from .models import FirstCaro
from .serializers import FirstCaroSerializers

# Create your views here.

@csrf_exempt
def firstCaroImg(request):
    images = FirstCaro.objects.all()
    serializer = FirstCaroSerializers(images, many=True)
    return JsonResponse(serializer.data,safe=False)
    

