"""
View for the team API
"""
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


from core.models import TeamMember
from team import serializers

class TeamMemberViewSet(viewsets.ModelViewSet):
    """View to manage team API"""
    serializer_class = serializers.TeamMemberSerializer
    queryset = TeamMember.objects.all()
    authentication_class = [TokenAuthentication]
    permission_class = [IsAuthenticated]

    def get_queryset(self):
        """Retrieve team member for authneticated users"""
        return self.queryset.filter(user=self.request.user).order_by('-id')

    def perform_create(self, serializer):
        """Add a new team member"""
        serializer.save(user=self.request.user)






