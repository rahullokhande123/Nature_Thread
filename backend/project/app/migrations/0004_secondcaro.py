# Generated by Django 5.2 on 2025-04-30 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_firstcaro_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='SecondCaro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
    ]
