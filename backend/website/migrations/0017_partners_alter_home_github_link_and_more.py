# Generated by Django 5.0.3 on 2024-03-26 15:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("website", "0016_remove_openroles_open_roles_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Partners",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
        ),
        migrations.AlterField(
            model_name="home",
            name="github_link",
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="home",
            name="instagram_link",
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name="home",
            name="logo_image",
            field=models.ImageField(null=True, upload_to="logo"),
        ),
        migrations.CreateModel(
            name="KoreanCompanies",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("logo", models.ImageField(upload_to="partners/logos/")),
                (
                    "partners",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="website.partners",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="StudentOrganization",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("logo", models.ImageField(upload_to="partners/logos/")),
                (
                    "partners",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="website.partners",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="USCompanies",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("logo", models.ImageField(upload_to="partners/logos/")),
                (
                    "partners",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="website.partners",
                    ),
                ),
            ],
        ),
    ]
