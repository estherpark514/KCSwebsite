# Generated by Django 5.0.2 on 2024-03-02 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0012_alter_programssections_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='github_link',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='home',
            name='instagram_link',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
