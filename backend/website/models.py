from django.db import models
# from ckeditor.fields import RichTextField


# Home
class Home(models.Model):
    title_image = models.ImageField(upload_to="media/home/title_image/")
    logo_image = models.ImageField(upload_to="media/logo", null=True)
    # footer = RichTextField(default="")
    footer = models.CharField(max_length=200, null=True)
    github_link = models.CharField(max_length=200, null=True)
    instagram_link = models.CharField(max_length=200, null=True)

    def __str__(self):
        return f"Home"


# MissionSection
class MissionSection(models.Model):
    home = models.ForeignKey(Home, on_delete=models.CASCADE)
    mission_image = models.ImageField(upload_to="media/mission_image")

    def __str__(self):
        return f"Mission"


# AboutUs
class AboutUs(models.Model):
    about_us_description = models.TextField()
    image = models.ImageField(upload_to="media/aboutGTKCS/")

    def __str__(self):
        return f"About Us"


class ProgressSection(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE)
    progress_name = models.CharField(max_length=100)
    progress_stat = models.CharField(max_length=100)

    def __str__(self):
        return f"Progress Section - {self.id}"


class SponsorInformationSection(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    # subtitle = RichTextField()
    subtitle = models.CharField(max_length=200, null=True)

    def __str__(self):
        return f"Sponsor Section"

class SponsorSection(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE)
    sponsor_logo = models.ImageField(upload_to="about_us/sponsor_section_logos/")

    def __str__(self):
        return f"Sponsors - {self.id}"

class Partners(models.Model):
    def __str__(self):
        return f"Partners"
    
class StudentOrganization(models.Model):
    partners = models.ForeignKey(Partners, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to="partners/logos/")

    def __str__(self):
        return f"Student Organization - {self.id}"
    
class KoreanCompanies(models.Model):
    partners = models.ForeignKey(Partners, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to="partners/logos/")

    def __str__(self):
        return f"Korean Company - {self.id}"
    
class USCompanies(models.Model):
    partners = models.ForeignKey(Partners, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to="partners/logos/")

    def __str__(self):
        return f"US Company - {self.id}"

# Roles
class Roles(models.Model):
    description = models.TextField()

    def __str__(self):
        return f"Roles"


class Executive(models.Model):
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default="")
    description = models.TextField(default="")

    def __str__(self):
        return f"Executive Team Role - {self.name}"


class WebsiteManagement(models.Model):
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default="")
    # description = RichTextField(default="")

    def __str__(self):
        return f"Website Management Team Role - {self.name}"

class ProgramsSections(models.Model):
    name = models.CharField(max_length=200)
    frequency = models.CharField(max_length=200)
    image = models.ImageField(upload_to="media/programs/")

    def __str__(self):
        return self.name


# Resources
class Resources(models.Model):
    name = models.CharField(max_length=200)
    link = models.CharField(max_length=500)

    def __str__(self):
        return self.name


# JoinUs
class JoinUs(models.Model):
    membership_application_form_link = models.CharField(max_length=500)

    def __str__(self):
        return f"Join Us"


class MembershipBenefits(models.Model):
    join_us = models.ForeignKey(JoinUs, on_delete=models.CASCADE)
    benefits = models.CharField(max_length=200)

    def __str__(self):
        return f"Membership Benefits - {self.id}"


class OpenRoles(models.Model):
    join_us = models.ForeignKey(JoinUs, on_delete=models.CASCADE)
    application_form_link = models.CharField(max_length=500)
    executive_roles = models.TextField(null=True)
    web_management_roles = models.TextField(null=True)

    def __str__(self):
        return f"Open Roles - {self.id}"


class Sponsors(models.Model):
    join_us = models.ForeignKey(JoinUs, on_delete=models.CASCADE)
    instruction = models.TextField()

    def __str__(self):
        return f"Sponsors - {self.id}"