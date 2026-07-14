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

    personne_details = PersonneSerializer(
        source="personne",
        read_only=True
    )

    cause_details = CauseDecesSerializer(
        source="cause",
        read_only=True
    )

    lieu_details = LieuSerializer(
        source="lieu",
        read_only=True
    )

    class Meta:
        model = Deces
        fields = "__all__"

    class Meta:
        model = Deces
        fields = "__all__"