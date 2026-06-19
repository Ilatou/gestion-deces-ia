from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Administrateur"
        MEDECIN = "MEDECIN", "Médecin"
        AGENT = "AGENT", "Agent de santé"
        ANALYSTE = "ANALYSTE", "Analyste de données"

    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.AGENT
    )

    telephone = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    date_creation = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.username} ({self.role})"
