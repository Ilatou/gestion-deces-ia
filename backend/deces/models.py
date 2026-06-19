import uuid
from django.db import models
from django.conf import settings


class CauseDeces(models.Model):
    """
    Classification des causes de décès (CIM)
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    code_cim = models.CharField(
        max_length=20,
        unique=True
    )

    libelle = models.CharField(
        max_length=200
    )

    categorie = models.CharField(
        max_length=100
    )

    description = models.TextField(
        blank=True,
        null=True
    )

    def __str__(self):
        return f"{self.code_cim} - {self.libelle}"


class Lieu(models.Model):
    """
    Lieu du décès
    """

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    pays = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    ville = models.CharField(max_length=100)

    etablissement = models.CharField(
        max_length=200,
        blank=True,
        null=True
    )

    def __str__(self):
        return f"{self.ville}, {self.region}"


class Personne(models.Model):
    """
    Informations sur la personne décédée
    """

    class Sexe(models.TextChoices):
        HOMME = "H", "Homme"
        FEMME = "F", "Femme"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    nom = models.CharField(max_length=100)

    prenom = models.CharField(
        max_length=100
    )

    sexe = models.CharField(
        max_length=1,
        choices=Sexe.choices
    )

    date_naissance = models.DateField()

    age = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.nom} {self.prenom}"


class Deces(models.Model):
    """
    Enregistrement d'un décès
    """

    class TypeDeces(models.TextChoices):
        NATUREL = "NATUREL", "Naturel"
        ACCIDENT = "ACCIDENT", "Accident"
        INCONNU = "INCONNU", "Inconnu"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    personne = models.ForeignKey(
        Personne,
        on_delete=models.CASCADE,
        related_name="deces"
    )

    cause = models.ForeignKey(
        CauseDeces,
        on_delete=models.PROTECT,
        related_name="deces"
    )

    lieu = models.ForeignKey(
        Lieu,
        on_delete=models.PROTECT,
        related_name="deces"
    )

    date_deces = models.DateField()

    heure_deces = models.TimeField(
        blank=True,
        null=True
    )

    type_deces = models.CharField(
        max_length=20,
        choices=TypeDeces.choices
    )

    certificat_medical = models.BooleanField(
        default=False
    )

    enregistre_par = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="deces_enregistres"
    )

    date_enregistrement = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"Décès de {self.personne.nom} "
            f"le {self.date_deces}"
        )
