# Generated by Django 4.0.4 on 2022-06-01 00:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='date_purchased',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
