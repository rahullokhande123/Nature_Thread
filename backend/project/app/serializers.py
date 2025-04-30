from rest_framework import serializers
from .models import FirstCaro,SecondCaro,ThirdCaro,FourthCaro,FifthCaro,WomanCategories

class FirstCaroSerializers(serializers.ModelSerializer):
    class Meta:
        model = FirstCaro
        fields = '__all__' 

class SecondCaroSerializers(serializers.ModelSerializer):
    class Meta:
        model = SecondCaro
        fields = '__all__'

class ThirdCaroSerializers(serializers.ModelSerializer):
    class Meta:
        model = ThirdCaro
        fields = '__all__'

class FourthCaroSerializers(serializers.ModelSerializer):
    class Meta:
        model = FourthCaro
        fields = '__all__'

class FifthCaroSerializers(serializers.ModelSerializer):
    class Meta:
        model = FifthCaro
        fields = '__all__'

class WomanCategoriesSerializers(serializers.ModelSerializer):
    class Meta:
        model = WomanCategories
        fields ='__all__'