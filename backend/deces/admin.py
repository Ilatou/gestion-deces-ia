from django.contrib import admin
from .models import CauseDeces, Lieu, Personne, Deces


@admin.register(CauseDeces)
class CauseDecesAdmin(admin.ModelAdmin):
    list_display = (
        "code_cim",
        "libelle",
        "categorie",
    )

    search_fields = (
        "code_cim",
        "libelle",
    )

    list_filter = (
        "categorie",
    )

    ordering = (
        "code_cim",
    )


@admin.register(Lieu)
class LieuAdmin(admin.ModelAdmin):
    list_display = (
        "pays",
        "region",
        "ville",
        "etablissement",
    )

    search_fields = (
        "pays",
        "region",
        "ville",
        "etablissement",
    )

    list_filter = (
        "pays",
        "region",
    )

    ordering = (
        "pays",
        "region",
    )


@admin.register(Personne)
class PersonneAdmin(admin.ModelAdmin):
    list_display = (
        "nom",
        "prenom",
        "sexe",
        "age",
    )

    search_fields = (
        "nom",
        "prenom",
    )

    list_filter = (
        "sexe",
    )

    ordering = (
        "nom",
        "prenom",
    )


@admin.register(Deces)
class DecesAdmin(admin.ModelAdmin):
    list_display = (
        "personne",
        "cause",
        "lieu",
        "date_deces",
        "type_deces",
        "certificat_medical",
        "enregistre_par",
    )

    search_fields = (
        "personne__nom",
        "personne__prenom",
        "cause__libelle",
        "cause__code_cim",
    )

    list_filter = (
        "type_deces",
        "date_deces",
        "certificat_medical",
        "lieu__region",
    )

    autocomplete_fields = (
        "personne",
        "cause",
        "lieu",
        "enregistre_par",
    )

    date_hierarchy = "date_deces"

    ordering = (
        "-date_deces",
    )
