# Generated by Django 5.0.2 on 2024-03-03 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0015_alter_home_logo_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='openroles',
            name='open_roles',
        ),
        migrations.AddField(
            model_name='openroles',
            name='executive_roles',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='openroles',
            name='web_management_roles',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='home',
            name='github_link',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='home',
            name='instagram_link',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='home',
            name='logo_image',
            field=models.ImageField(upload_to='logo'),
        ),
    ]
