# Generated by Django 5.0.2 on 2024-03-01 03:26

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0009_sponsorinformationsection'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutus',
            name='image',
            field=models.ImageField(upload_to='MEDIA/about_us/title_section_images/'),
        ),
        migrations.AlterField(
            model_name='home',
            name='title',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='home',
            name='title_image',
            field=models.ImageField(upload_to='MEDIA/home/title_image/'),
        ),
        migrations.AlterField(
            model_name='missionsection',
            name='mission_image',
            field=models.ImageField(upload_to='MEDIA/home/mission_image/'),
        ),
    ]
