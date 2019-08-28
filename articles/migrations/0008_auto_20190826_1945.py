# Generated by Django 2.1.5 on 2019-08-26 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0007_auto_20190504_0110'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='file1',
            field=models.FileField(blank=True, null=True, upload_to='articles/<django.db.models.fields.CharField>'),
        ),
        migrations.AddField(
            model_name='article',
            name='file2',
            field=models.FileField(blank=True, null=True, upload_to='articles/<django.db.models.fields.CharField>'),
        ),
        migrations.AddField(
            model_name='article',
            name='file3',
            field=models.FileField(blank=True, null=True, upload_to='articles/<django.db.models.fields.CharField>'),
        ),
        migrations.AddField(
            model_name='article',
            name='file4',
            field=models.FileField(blank=True, null=True, upload_to='articles/<django.db.models.fields.CharField>'),
        ),
        migrations.AddField(
            model_name='article',
            name='file5',
            field=models.FileField(blank=True, null=True, upload_to='articles/<django.db.models.fields.CharField>'),
        ),
        migrations.AlterField(
            model_name='article',
            name='add_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
