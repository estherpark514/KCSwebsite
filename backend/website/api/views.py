from rest_framework.viewsets import ModelViewSet
from ..models import (
    Home,
    MissionSection,
    AboutUs,
    ProgressSection,
    SponsorInformationSection,
    SponsorSection,
    Partners, StudentOrganization, KoreanCompanies, USCompanies,
    Roles,
    Executive,
    WebsiteManagement,
    ProgramsSections,
    Resources,
    JoinUs,
    MembershipBenefits,
    OpenRoles,
    Sponsors,
)
from .serializers import (
    HomeSerializer,
    HomeSerializer,
    MissionSectionSerializer,
    AboutUsSerializer,
    ProgressSectionSerializer,
    SponsorInformationSectionSerializer,
    SponsorSectionSerializer,
    StudentOrganizationSerializer, KoreanCompaniesSerializer, USCompaniesSerializer,
    RolesSerializer,
    ExecutiveSerializer,
    WebsiteManagementSerializer,
    ProgramsSectionsSerializer,
    ResourcesSerializer,
    JoinUsSerializer,
    MembershipBenefitsSerializer,
    OpenRolesSerializer,
    SponsorsSerializer,
)


class HomeViewSet(ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer


class MissionSectionViewSet(ModelViewSet):
    queryset = MissionSection.objects.all()
    serializer_class = MissionSectionSerializer

class AboutUsViewSet(ModelViewSet):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer


class ProgressSectionViewSet(ModelViewSet):
    queryset = ProgressSection.objects.all()
    serializer_class = ProgressSectionSerializer

class SponsorInformationSectionViewSet(ModelViewSet):
    queryset = SponsorInformationSection.objects.all()
    serializer_class = SponsorInformationSectionSerializer

class SponsorSectionViewSet(ModelViewSet):
    queryset = SponsorSection.objects.all()
    serializer_class = SponsorSectionSerializer

class StudentOrganizationViewset(ModelViewSet):
    queryset = StudentOrganization.objects.all()
    serializer_class = StudentOrganizationSerializer

class KoreanCompaniesViewset(ModelViewSet):
    queryset = KoreanCompanies.objects.all()
    serializer_class = KoreanCompaniesSerializer

class USCompaniesViewset(ModelViewSet):
    queryset = USCompanies.objects.all()
    serializer_class = USCompaniesSerializer

class RolesViewSet(ModelViewSet):
    queryset = Roles.objects.all()
    serializer_class = RolesSerializer

class ExecutiveViewSet(ModelViewSet):
    queryset = Executive.objects.all()
    serializer_class = ExecutiveSerializer


class WebsiteManagementViewSet(ModelViewSet):
    queryset = WebsiteManagement.objects.all()
    serializer_class = WebsiteManagementSerializer

class ProgramsSectionsViewSet(ModelViewSet):
    queryset = ProgramsSections.objects.all()
    serializer_class = ProgramsSectionsSerializer

class ResourcesViewSet(ModelViewSet):
    queryset = Resources.objects.all()
    serializer_class = ResourcesSerializer


class JoinUsViewSet(ModelViewSet):
    queryset = JoinUs.objects.all()
    serializer_class = JoinUsSerializer

class MembershipBenefitsViewSet(ModelViewSet):
    queryset = MembershipBenefits.objects.all()
    serializer_class = MembershipBenefitsSerializer


class OpenRolesViewSet(ModelViewSet):
    queryset = OpenRoles.objects.all()
    serializer_class = OpenRolesSerializer

class SponsorsViewSet(ModelViewSet):
    queryset = Sponsors.objects.all()
    serializer_class = SponsorsSerializer
