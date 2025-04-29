from rest_framework import serializers
from .models import MyInputes

class MyInputesSerializers(serializers.ModelSerializer):
    model=MyInputes
    fields=['id','name','position']