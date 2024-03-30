# Generated by Django 5.0.3 on 2024-03-30 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0018_remove_home_subtitle_remove_home_title_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aboutus',
            name='subtitle',
        ),
        migrations.RemoveField(
            model_name='aboutus',
            name='title',
        ),
        migrations.RemoveField(
            model_name='missionsection',
            name='mission_heading',
        ),
        migrations.RemoveField(
            model_name='missionsection',
            name='mission_subheading',
        ),
        migrations.AlterField(
            model_name='aboutus',
            name='image',
            field=models.ImageField(upload_to='media/aboutGTKCS/'),
        ),
        migrations.AlterField(
            model_name='missionsection',
            name='mission_image',
            field=models.ImageField(upload_to='media/mission_image'),
        ),
    ]
