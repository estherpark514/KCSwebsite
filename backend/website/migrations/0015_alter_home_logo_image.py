# Generated by Django 5.0.2 on 2024-03-03 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0014_alter_aboutus_image_alter_home_title_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='home',
            name='logo_image',
            field=models.ImageField(null=True, upload_to='logo'),
        ),
    ]