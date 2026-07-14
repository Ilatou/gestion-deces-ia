from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .services import DashboardService


class DashboardStatsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(DashboardService.statistiques_generales())


class TopCausesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(DashboardService.top_causes())


class RegionsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(DashboardService.repartition_par_region())


class SexeView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(DashboardService.repartition_par_sexe())