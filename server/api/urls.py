from rest_framework import routers

from .views import UserViewSet,AdminViewSet,SimpleUserViewSet,StoreViewSet,PurchaseViewSet,EventViewSet,ReviewViewSet

router = routers.DefaultRouter()


router.register('users',UserViewSet, basename='user')
router.register('admins',AdminViewSet, basename='admin')
router.register('simple_users',SimpleUserViewSet, basename='simple_user')
router.register('stores',StoreViewSet, basename='store')
router.register('purchases',PurchaseViewSet, basename='purchase')
router.register('events',EventViewSet, basename='event')
router.register('reviews',ReviewViewSet, basename='review')