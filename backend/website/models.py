from django.db import models

# Home
class Home(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    title_image = models.ImageField(upload_to='home_title_image/')

    def __str__(self):
        return self.title

# MissionSection
class MissionSection(models.Model):
    home = models.ForeignKey(Home, on_delete=models.CASCADE)
    mission_heading = models.TextField()
    mission_subheading = models.TextField()
    mission_image = models.ImageField(upload_to='mission_image/')

    def __str__(self):
        return self.mission_heading

# AboutUs
class AboutUs(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    about_us_description = models.TextField()
    image = models.ImageField(upload_to='about_us/title_section_images/')

    def __str__(self):
        return f"About Us - {self.id}"

class ProgressSection(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE)
    progress_name = models.CharField(max_length=100)
    progress_stat = models.CharField(max_length=100)

    def __str__(self):
        return f"Progress Section - {self.id}"

class SponsorSection(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE)
    sponsor_logo = models.ImageField(upload_to='about_us/sponsor_section_logos/')

    def __str__(self):
        return f"Sponsor Section - {self.id}"

# Roles
class Roles(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    roles_description = models.TextField()

    def __str__(self):
        return f"Roles - {self.id}"

class Executive(models.Model):
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    executive_role_name = models.CharField(max_length=100)
    executive_role_description = models.TextField()

    def __str__(self):
        return f"Executive Team Role - {self.executive_role_name}"

class WebsiteManagement(models.Model):
    roles = models.ForeignKey(Roles, on_delete=models.CASCADE)
    website_management_role_name = models.CharField(max_length=100)
    website_management_role_description = models.TextField()

    def __str__(self):
        return f"Website Management Team Role - {self.website_management_role_name}"

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
    image = models.ImageField(upload_to='programs/images/')

    def __str__(self):
        return f"Programs Section - {self.id}"

# Resources
class Resources(models.Model):
    name = models.CharField(max_length=200)
    link = models.CharField(max_length=500)

    def __str__(self):
        return f"Resources - {self.id}"

# JoinUs
class JoinUs(models.Model):
    membership_application_form_link = models.CharField(max_length=500)

    def __str__(self):
        return f"Join Us - {self.id}"

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
