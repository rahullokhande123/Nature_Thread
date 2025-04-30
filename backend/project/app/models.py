from django.db import models

# Create your models here.

class FirstCaro(models.Model):
    name=models.CharField(max_length=50,null=True)
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def _str_(self):
        return self.name
    
class SecondCaro(models.Model):
    name=models.CharField(max_length=50,null=True)
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def _str_(self):
        return self.name
    
class ThirdCaro(models.Model):
    name=models.CharField(max_length=50,null=True)
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def _str_(self):
        return self.name
    
class FourthCaro(models.Model):
    name=models.CharField(max_length=50,null=True)
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def _str_(self):
        return self.name
    
class FifthCaro(models.Model):
    name=models.CharField(max_length=50,null=True)
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def _str_(self):
        return self.name
    
class WomanCategories(models.Model):
    title=models.CharField(max_length=50)
    categorie=models.CharField(max_length=50)
    price=models.IntegerField()
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def __str__(self):
        return self.title
    
