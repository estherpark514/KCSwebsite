from django.contrib import admin
# from ckeditor.widgets import CKEditorWidget
# from django import forms
from .models import Home, MissionSection, AboutUs, ProgressSection, SponsorInformationSection, SponsorSection, Partners, StudentOrganization, KoreanCompanies, USCompanies, Roles, Executive, WebsiteManagement, Programs, ProgramsSections, Resources, JoinUs, MembershipBenefits, OpenRoles, Sponsors

#Home
class MissionSectionInline(admin.StackedInline):
    model = MissionSection
    extra = 1

class HomeAdmin(admin.ModelAdmin):
    # form = HomeForm
    inlines = [MissionSectionInline]

admin.site.register(Home, HomeAdmin)

#AboutUs
class ProgressSectionInline(admin.StackedInline):
    model = ProgressSection
    extra = 1

class SponsorInformationSectionInline(admin.StackedInline):
    model = SponsorInformationSection
    extra = 1
class SponsorSectionInline(admin.StackedInline):
    model = SponsorSection
    extra = 1

#About Us
class AboutUsAdmin(admin.ModelAdmin):
    inlines = [ProgressSectionInline, SponsorInformationSectionInline, SponsorSectionInline]

admin.site.register(AboutUs, AboutUsAdmin)

class StudentOrganizationsInline(admin.StackedInline):
    model = StudentOrganization
    extra = 1


class KoreanCompaniesInline(admin.StackedInline):
    model = KoreanCompanies
    extra = 1

class USCompaniesInline(admin.StackedInline):
    model = USCompanies
    extra = 1

class PartnersAdmin(admin.ModelAdmin):
    inlines = [StudentOrganizationsInline, KoreanCompaniesInline, USCompaniesInline]

admin.site.register(Partners, PartnersAdmin)

#Roles
class ExecutiveInline(admin.StackedInline):
    model = Executive
    extra = 1

class WebsiteManagementInline(admin.StackedInline):
    model = WebsiteManagement
    extra = 1

class RolesAdmin(admin.ModelAdmin):
    inlines = [ExecutiveInline, WebsiteManagementInline]

admin.site.register(Roles, RolesAdmin)

#Programs
class ProgramsSectionsInline(admin.StackedInline):
    model = ProgramsSections
    extra = 1

class ProgramsAdmin(admin.ModelAdmin):
    inlines = [ProgramsSectionsInline]

admin.site.register(Programs, ProgramsAdmin)

#Resources
admin.site.register(Resources)

#Join Us
class MembershipBenefitsInline(admin.StackedInline):
    model = MembershipBenefits
    extra = 1

class OpenRolesInline(admin.StackedInline):
    model = OpenRoles
    extra = 1

class SponsorsInline(admin.StackedInline):
    model = Sponsors
    extra = 1

class JoinUsAdmin(admin.ModelAdmin):
    inlines = [MembershipBenefitsInline, OpenRolesInline, SponsorsInline]

admin.site.register(JoinUs, JoinUsAdmin)