from django.db import models

# Create your models here.

class MyInputes(models.Model):
    name=models.CharField(max_length=100)
    position=models.CharField(max_length=50)

    def _str_(self):
        return self.name