# Generated by Django 4.2.2 on 2023-06-13 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='tweet',
            field=models.TextField(blank=True),
        ),
    ]