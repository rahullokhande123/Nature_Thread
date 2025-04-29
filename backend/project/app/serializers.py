from rest_framework import serializers
from .models import FirstCaro

class FirstCaroSerializers(serializers.ModelSerializer):
    class Meta:
        model = FirstCaro
        fields = '__all__' 