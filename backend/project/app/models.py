from django.db import models

# Create your models here.

class FirstCaro(models.Model):
    name=models.CharField(max_length=50,null=True)
    image=models.ImageField(upload_to='images/',blank=True,null=True)

    def _str_(self):
        return self.image
    
