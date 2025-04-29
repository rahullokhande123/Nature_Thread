from app import views
from django.urls import path

urlpatterns = [
    path('firstCaroImg/', views.firstCaroImg, name='firstCaroImg')
]