from rest_framework import serializers
from deces.models import CauseDeces, Lieu, Personne, Deces
from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "role"]


class CauseDecesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CauseDeces
        fields = "__all__"


class LieuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lieu
        fields = "__all__"


class PersonneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personne
        fields = "__all__"


class DecesSerializer(serializers.ModelSerializer):
    personne = PersonneSerializer(read_only=True)
    cause = CauseDecesSerializer(read_only=True)
    lieu = LieuSerializer(read_only=True)
    enregistre_par = UserSerializer(read_only=True)

    class Meta:
        model = Deces
        fields = "__all__"