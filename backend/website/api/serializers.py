from rest_framework.serializers import ModelSerializer
from ..models import Home, MissionSection, AboutUs, ProgressSection, SponsorSection, Roles, Executive, WebsiteManagement, Programs, ProgramsSections, Resources, JoinUs, MembershipBenefits, OpenRoles, Sponsors

class HomeSerializer(ModelSerializer):
    class Meta:
        model = Home
        fields = ('id', 'title', 'subtitle', 'title_image', 'logo_image', 'footer')

class MissionSectionSerializer(ModelSerializer):
    class Meta:
        model = MissionSection
        fields = ('id', 'mission_heading', 'mission_subheading', 'mission_image')

class AboutUsSerializer(ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ('id', 'title', 'subtitle', 'about_us_description', 'image')

class ProgressSectionSerializer(ModelSerializer):
    class Meta:
        model = ProgressSection
        fields = ('id', 'progress_name', 'progress_stat')

class SponsorSectionSerializer(ModelSerializer):
    class Meta:
        model = SponsorSection
        fields = ('id', 'sponsor_logo')

class RolesSerializer(ModelSerializer):
    class Meta:
        model = Roles
        fields = ('id', 'title', 'subtitle', 'roles_description', 'executive_title', 'executive_description', 'website_management_title', 'website_management_description')

class ExecutiveSerializer(ModelSerializer):
    class Meta:
        model = Executive
        fields = ('id', 'executive_role_name', 'executive_role_description')

class WebsiteManagementSerializer(ModelSerializer):
    class Meta:
        model = WebsiteManagement
        fields = ('id', 'website_management_role_name', 'website_management_role_description')

class ProgramsSerializer(ModelSerializer):
    class Meta:
        model = Programs
        fields = ('id', 'title', 'subtitle')

class ProgramsSectionsSerializer(ModelSerializer):
    class Meta:
        model = ProgramsSections
        fields = ('id', 'name', 'frequency', 'image')

class ResourcesSerializer(ModelSerializer):
    class Meta:
        model = Resources
        fields = ('id', 'name', 'link')

class JoinUsSerializer(ModelSerializer):
    class Meta:
        model = JoinUs
        fields = ('id', 'membership_application_form_link')

class MembershipBenefitsSerializer(ModelSerializer):
    class Meta:
        model = MembershipBenefits
        fields = ('id', 'benefits')

class OpenRolesSerializer(ModelSerializer):
    class Meta:
        model = OpenRoles
        fields = ('id', 'application_form_link', 'open_roles')

class SponsorsSerializer(ModelSerializer):
    class Meta:
        model = Sponsors
        fields = ('id', 'instruction')
