from rest_framework.serializers import ModelSerializer
from ..models import Home, MissionSection, AboutUs, ProgressSection, SponsorInformationSection, SponsorSection,  Partners, StudentOrganization, KoreanCompanies, USCompanies, Roles, Executive, WebsiteManagement, ProgramsSections, Resources, JoinUs, MembershipBenefits, OpenRoles, Sponsors

class HomeSerializer(ModelSerializer):
    class Meta:
        model = Home
        fields = ('id', 'title_image', 'logo_image', 'footer', 'github_link', 'instagram_link')

class MissionSectionSerializer(ModelSerializer):
    class Meta:
        model = MissionSection
        fields = ('id', 'mission_image')

class AboutUsSerializer(ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ('id', 'about_us_description', 'image')

class ProgressSectionSerializer(ModelSerializer):
    class Meta:
        model = ProgressSection
        fields = ('id', 'progress_name', 'progress_stat')

class SponsorInformationSectionSerializer(ModelSerializer):
    class Meta:
        model = SponsorInformationSection
        fields = ('id', 'title', 'subtitle')
        
class SponsorSectionSerializer(ModelSerializer):
    class Meta:
        model = SponsorSection
        fields = ('id', 'sponsor_logo')

class StudentOrganizationSerializer(ModelSerializer):
    class Meta:
        model = StudentOrganization
        fields = ('id', 'name', 'logo')

class KoreanCompaniesSerializer(ModelSerializer):
    class Meta:
        model = KoreanCompanies
        fields = ('id', 'name', 'logo')

class USCompaniesSerializer(ModelSerializer):
    class Meta:
        model = USCompanies
        fields = ('id', 'name', 'logo')
class RolesSerializer(ModelSerializer):
    class Meta:
        model = Roles
        fields = ('id', 'description')

class ExecutiveSerializer(ModelSerializer):
    class Meta:
        model = Executive
        fields = ('id', 'name', 'description')

class WebsiteManagementSerializer(ModelSerializer):
    class Meta:
        model = WebsiteManagement
        fields = ('id', 'name', 'description')

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
        fields = ('id', 'application_form_link', 'executive_roles', 'web_management_roles')

class SponsorsSerializer(ModelSerializer):
    class Meta:
        model = Sponsors
        fields = ('id', 'instruction')
