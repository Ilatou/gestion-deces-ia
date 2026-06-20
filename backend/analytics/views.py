from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .services import DashboardService


class DashboardStatsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = DashboardService.statistiques_generales()
        return Response(data)


class TopCausesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = DashboardService.top_causes()
        return Response(data)


class RegionsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = DashboardService.repartition_par_region()
        return Response(data)


class SexeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        data = DashboardService.repartition_par_sexe()
        return Response(data)