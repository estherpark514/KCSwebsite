# Generated by Django 5.0.2 on 2024-03-02 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0011_remove_executive_executive_role_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='programssections',
            name='image',
            field=models.ImageField(upload_to='MEDIA/programs/images/'),
        ),
        migrations.AlterField(
            model_name='sponsorsection',
            name='sponsor_logo',
            field=models.ImageField(upload_to='MEDIA/about_us/sponsor_section_logos/'),
        ),
    ]
