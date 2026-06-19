from rest_framework import viewsets
from accounts.models import User
from deces.models import CauseDeces, Lieu, Personne, Deces
from .serializers import (
    UserSerializer,
    CauseDecesSerializer,
    LieuSerializer,
    PersonneSerializer,
    DecesSerializer,
)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CauseDecesViewSet(viewsets.ModelViewSet):
    queryset = CauseDeces.objects.all()
    serializer_class = CauseDecesSerializer


class LieuViewSet(viewsets.ModelViewSet):
    queryset = Lieu.objects.all()
    serializer_class = LieuSerializer


class PersonneViewSet(viewsets.ModelViewSet):
    queryset = Personne.objects.all()
    serializer_class = PersonneSerializer


class DecesViewSet(viewsets.ModelViewSet):
    queryset = Deces.objects.all()
    serializer_class = DecesSerializer