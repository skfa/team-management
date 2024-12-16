"""
Tests for Team API
"""

from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from rest_framework import status
from rest_framework.test import APIClient

from core.models import TeamMember
from team.serializers import TeamMemberSerializer

TEAM_MEMBERS_URL = reverse('teammember:teammember-list')

def add_team_member(user, **params):
    """Add and rerurn a team member"""
    defaults = {
        'name': 'Test Name',
        'email':'user@example.com',
        'phone':'123456789',
        'location':'ca',
        'role':'admin',
    }

    defaults.update(params)
    member = TeamMember.objects.create(user=user, defaults=defaults)
    return member

def create_user(**params):
    """Create and return a new user"""
    return get_user_model().objects.create(**params)


class PublicTeamAPITests(TestCase):
    """Test unathenticated API requests"""

    def setUp(self):
        self.client = APIClient()


    def test_auth_required(self):
        """Test auth is required for api requests"""
        res = self.client.get(TEAM_MEMBERS_URL)

        self.assertEqual(res.status_code, status.HTTP_403_UNAUTHORIZED)





