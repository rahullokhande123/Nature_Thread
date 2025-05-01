from app import views
from django.urls import path

urlpatterns = [
    path('firstCaroImg/', views.firstCaroImg, name='firstCaroImg'),
    path('secondCaroImg/', views.secondCaroImg, name='secondCaroImg'),
    path('thirdCaroImg/', views.thirdCaroImg, name='thirdCaroImg'),
    path('fourthCaroImg/', views.fourthCaroImg, name='fourthCaroImg'),
    path('fifthCaroImg/', views.fifthCaroImg, name='fifthCaroImg'),
    path('womanCategories/', views.womanCategories, name='womanCategories'),
    path('manCategories/', views.manCategories, name='manCategories'),
    path('kidsCategories/', views.kidsCategories, name='kidsCategories'),
    path('personalcareCategories/', views.personalcareCategories, name='personalcareCategories'),

    # path("payment/",payment,name='payment'),
    # path('payment-status', payment_status, name='payment-status')
]