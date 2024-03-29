# Generated by Django 5.0.2 on 2024-03-02 04:18

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0010_alter_aboutus_image_alter_home_title_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='executive',
            name='executive_role_description',
        ),
        migrations.RemoveField(
            model_name='executive',
            name='executive_role_name',
        ),
        migrations.RemoveField(
            model_name='websitemanagement',
            name='website_management_role_description',
        ),
        migrations.RemoveField(
            model_name='websitemanagement',
            name='website_management_role_name',
        ),
        migrations.AddField(
            model_name='executive',
            name='description',
            field=ckeditor.fields.RichTextField(default=''),
        ),
        migrations.AddField(
            model_name='executive',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='websitemanagement',
            name='description',
            field=ckeditor.fields.RichTextField(default=''),
        ),
        migrations.AddField(
            model_name='websitemanagement',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='home',
            name='footer',
            field=ckeditor.fields.RichTextField(default=''),
        ),
        migrations.AlterField(
            model_name='home',
            name='subtitle',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='missionsection',
            name='mission_heading',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='missionsection',
            name='mission_subheading',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='roles',
            name='subtitle',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='sponsorinformationsection',
            name='subtitle',
            field=ckeditor.fields.RichTextField(),
        ),
    ]
