# Generated by Django 5.2 on 2025-04-29 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_firstcaro_delete_myinputes'),
    ]

    operations = [
        migrations.AddField(
            model_name='firstcaro',
            name='name',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
