from rest_framework.routers import DefaultRouter
from website.api.urls import (
    home_router,
    mission_section_router,
    about_us_router,
    progress_section_router,
    sponsor_information_section_router,
    sponsor_section_router,
    student_organization_router,
    korean_companies_router,
    us_companies_router,
    roles_router,
    executive_router,
    website_management_router,
    programs_sections_router,
    resources_router,
    join_us_router,
    membership_benefits_router,
    open_roles_router,
    sponsors_router,
)
from django.urls import path, include

router = DefaultRouter()

# Home
router.registry.extend(home_router.registry)

# Mission Section
router.registry.extend(mission_section_router.registry)

# About Us
router.registry.extend(about_us_router.registry)

# Progress Section
router.registry.extend(progress_section_router.registry)

# Sponsor Section
router.registry.extend(sponsor_information_section_router.registry)

# Sponsors Section
router.registry.extend(sponsor_section_router.registry)

router.registry.extend(student_organization_router.registry)

router.registry.extend(korean_companies_router.registry)

router.registry.extend(us_companies_router.registry)

# Roles
router.registry.extend(roles_router.registry)

# Executive
router.registry.extend(executive_router.registry)

# Website Management
router.registry.extend(website_management_router.registry)

# Programs Sections
router.registry.extend(programs_sections_router.registry)

# Resources
router.registry.extend(resources_router.registry)

# Join Us
router.registry.extend(join_us_router.registry)

# Membership Benefits
router.registry.extend(membership_benefits_router.registry)

# Open Roles
router.registry.extend(open_roles_router.registry)

# Sponsors
router.registry.extend(sponsors_router.registry)

urlpatterns = [path("", include(router.urls))]
