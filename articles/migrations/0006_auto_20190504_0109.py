# Generated by Django 2.1.5 on 2019-05-03 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0005_auto_20190504_0103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='add_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]