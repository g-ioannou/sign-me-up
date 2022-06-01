from rest_framework import viewsets

from .models import User,Admin,SimpleUser,Store,Purchase,Event,Review
from .serializers import UserSerializer, AdminSerializer, SimpleUserSerializer, StoreSerializer, PurchaseSerializer, EventSerializer, ReviewSerializer

class UserViewSet(viewsets.ViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AdminViewSet(viewsets.ViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer

class SimpleUserViewSet(viewsets.ViewSet):
    queryset = SimpleUser.objects.all()
    serializer_class = SimpleUserSerializer
    
class StoreViewSet(viewsets.ViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    
class StoreViewSet(viewsets.ViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    
class PurchaseViewSet(viewsets.ViewSet):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    
class EventViewSet(viewsets.ViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
class ReviewViewSet(viewsets.ViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    

