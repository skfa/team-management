"""
URL mapping for team app
"""
from django.urls import (
    path,
    include
)
from rest_framework.routers import DefaultRouter

from team import views

router = DefaultRouter()
"""Setting basename as 'member' works"""
router.register('teammembers', views.TeamMemberViewSet)

app_name='teammember'

urlpatterns = [
    path('', include(router.urls))
]