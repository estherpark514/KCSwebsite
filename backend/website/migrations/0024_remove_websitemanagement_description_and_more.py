# Generated by Django 5.0.3 on 2024-08-27 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0023_remove_programssections_programs_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='websitemanagement',
            name='description',
        ),
        migrations.AlterField(
            model_name='executive',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='home',
            name='footer',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='sponsorinformationsection',
            name='subtitle',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
