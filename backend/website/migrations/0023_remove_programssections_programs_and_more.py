# Generated by Django 5.0.3 on 2024-03-30 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0022_remove_programs_subtitle_remove_programs_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='programssections',
            name='programs',
        ),
        migrations.AlterField(
            model_name='programssections',
            name='image',
            field=models.ImageField(upload_to='media/programs/'),
        ),
        migrations.DeleteModel(
            name='Programs',
        ),
    ]
