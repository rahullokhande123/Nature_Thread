from django.shortcuts import render,HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def home(request):
    if request.method == 'POST':
        return HttpResponse("Hello")
    

