from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet,
    CauseDecesViewSet,
    LieuViewSet,
    PersonneViewSet,
    DecesViewSet,
)

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"causes", CauseDecesViewSet)
router.register(r"lieux", LieuViewSet)
router.register(r"personnes", PersonneViewSet)
router.register(r"deces", DecesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]