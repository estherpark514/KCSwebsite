from django.db import models
from ckeditor.fields import RichTextField


# Home
class Home(models.Model):
    title = RichTextField()
    subtitle = RichTextField()
    title_image = models.ImageField(upload_to="MEDIA/home/title_image/")
    logo_image = models.ImageField(null=True)
    footer = RichTextField(default="")

    def __str__(self):
        return f"Home"


# MissionSection
class MissionSection(models.Model):
    home = models.ForeignKey(Home, on_delete=models.CASCADE)
    mission_heading = RichTextField()
    mission_subheading = RichTextField()
    mission_image = models.ImageField(upload_to="MEDIA/home/mission_image/")

    def __str__(self):
        return self.mission_heading


# AboutUs
class AboutUs(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    about_us_description = models.TextField()
    image = models.ImageField(upload_to="MEDIA/about_us/title_section_images/")

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
    subtitle = RichTextField()

    def __str__(self):
        return f"Sponsor Section"


class SponsorSection(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE)
    sponsor_logo = models.ImageField(upload_to="MEDIA/about_us/sponsor_section_logos/")

    def __str__(self):
        return f"Sponsors - {self.id}"


# Roles
class Roles(models.Model):
    title = models.CharField(max_length=200)
    subtitle = RichTextField()
    roles_description = models.TextField()
    executive_title = models.CharField(max_length=200)  # Set a default value
    executive_description = models.TextField()
    website_management_title = models.CharField(max_length=200)
    website_management_description = models.TextField(default="")

    def __str__(self):
        return f"Roles"


class Executive(models.Model):
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    description = RichTextField(default='')

    def __str__(self):
        return f"Executive Team Role - {self.name}"


class WebsiteManagement(models.Model):
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default='')
    description = RichTextField(default='')

    def __str__(self):
        return f"Website Management Team Role - {self.name}"


# Programs
class Programs(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class ProgramsSections(models.Model):
    programs = models.ForeignKey(Programs, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    frequency = models.CharField(max_length=200)
    image = models.ImageField(upload_to="MEDIA/programs/images/")

    def __str__(self):
        return f"Programs Section - {self.id}"


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
    open_roles = models.TextField()

    def __str__(self):
        return f"Open Roles - {self.id}"


class Sponsors(models.Model):
    join_us = models.ForeignKey(JoinUs, on_delete=models.CASCADE)
    instruction = models.TextField()

    def __str__(self):
        return f"Sponsors - {self.id}"
