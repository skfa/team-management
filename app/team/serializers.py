"""
Serializers for Teams API
"""
from rest_framework import serializers
from core.models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
    """Serializeer for Team model"""

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'email', 'phone', 'role', 'location']
        read_only_fields = ['id']
