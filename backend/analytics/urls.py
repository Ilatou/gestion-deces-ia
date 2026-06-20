from django.urls import path

from .views import (
    DashboardStatsView,
    TopCausesView,
    RegionsView,
    SexeView,
)


urlpatterns = [
    path("dashboard/", DashboardStatsView.as_view()),
    path("causes/", TopCausesView.as_view()),
    path("regions/", RegionsView.as_view()),
    path("sexes/", SexeView.as_view()),
]