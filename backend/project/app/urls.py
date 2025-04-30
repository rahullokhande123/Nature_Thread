from app import views
from django.urls import path

urlpatterns = [
    path('firstCaroImg/', views.firstCaroImg, name='firstCaroImg'),
    path('secondCaroImg/', views.secondCaroImg, name='secondCaroImg'),
    path('thirdCaroImg/', views.thirdCaroImg, name='thirdCaroImg'),
    path('fourthCaroImg/', views.fourthCaroImg, name='fourthCaroImg'),
    path('fifthCaroImg/', views.fifthCaroImg, name='fifthCaroImg'),
    path('womanCategories/', views.womanCategories, name='womanCategories'),
]