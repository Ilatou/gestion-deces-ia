from django.db.models import Count
from deces.models import Deces, Personne


class DashboardService:
    """
    Service de calcul des statistiques du tableau de bord
    """

    @staticmethod
    def statistiques_generales():
        return {
            "total_deces": Deces.objects.count(),

            "hommes": Personne.objects.filter(
                sexe="H"
            ).count(),

            "femmes": Personne.objects.filter(
                sexe="F"
            ).count(),

            "causes_enregistrees":
                Deces.objects.values("cause").distinct().count(),

            "regions_concernees":
                Deces.objects.values("lieu").distinct().count(),
        }


    @staticmethod
    def top_causes(limite=10):
        return (
            Deces.objects
            .values("cause__libelle")
            .annotate(total=Count("id"))
            .order_by("-total")[:limite]
        )


    @staticmethod
    def repartition_par_region():
        return (
            Deces.objects
            .values("lieu__region")
            .annotate(total=Count("id"))
            .order_by("-total")
        )


    @staticmethod
    def repartition_par_sexe():
        return (
            Deces.objects
            .values("personne__sexe")
            .annotate(total=Count("id"))
        )
