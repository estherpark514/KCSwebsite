from rest_framework.routers import DefaultRouter
from .views import (
    HomeViewSet,
    MissionSectionViewSet,
    AboutUsViewSet,
    ProgressSectionViewSet,
    SponsorInformationSectionViewSet,
    SponsorSectionViewSet,
    StudentOrganizationViewset,
    KoreanCompaniesViewset,
    USCompaniesViewset,
    RolesViewSet,
    ExecutiveViewSet,
    WebsiteManagementViewSet,
    ProgramsSectionsViewSet,
    ResourcesViewSet,
    JoinUsViewSet,
    MembershipBenefitsViewSet,
    OpenRolesViewSet,
    SponsorsViewSet,
)

home_router = DefaultRouter()
home_router.register(r"home", HomeViewSet)

mission_section_router = DefaultRouter()
mission_section_router.register(r"mission-section", MissionSectionViewSet)

about_us_router = DefaultRouter()
about_us_router.register(r"about-us", AboutUsViewSet)

progress_section_router = DefaultRouter()
progress_section_router.register(r"progress-section", ProgressSectionViewSet)

sponsor_section_router = DefaultRouter()
sponsor_section_router.register(r"sponsor-section", SponsorSectionViewSet)

sponsor_information_section_router = DefaultRouter()
sponsor_information_section_router.register(r"sponsor-information-section", SponsorInformationSectionViewSet)

student_organization_router = DefaultRouter()
student_organization_router.register(r"student-org", StudentOrganizationViewset)

korean_companies_router = DefaultRouter()
korean_companies_router.register(r"korean-companies", KoreanCompaniesViewset)

us_companies_router = DefaultRouter()
us_companies_router.register(r"us-companies", USCompaniesViewset)

roles_router = DefaultRouter()
roles_router.register(r"roles", RolesViewSet)

executive_router = DefaultRouter()
executive_router.register(r"executive", ExecutiveViewSet)

website_management_router = DefaultRouter()
website_management_router.register(r"website-management", WebsiteManagementViewSet)

programs_sections_router = DefaultRouter()
programs_sections_router.register(r"programs-sections", ProgramsSectionsViewSet)

resources_router = DefaultRouter()
resources_router.register(r"resources", ResourcesViewSet)

join_us_router = DefaultRouter()
join_us_router.register(r"join-us", JoinUsViewSet)

membership_benefits_router = DefaultRouter()
membership_benefits_router.register(r"membership-benefits", MembershipBenefitsViewSet)

open_roles_router = DefaultRouter()
open_roles_router.register(r"open-roles", OpenRolesViewSet)

sponsors_router = DefaultRouter()
sponsors_router.register(r"sponsors", SponsorsViewSet)
