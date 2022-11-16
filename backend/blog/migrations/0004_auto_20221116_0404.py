# Generated by Django 3.0.8 on 2022-11-16 04:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_delete_blogcomment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('exercise', 'Exercise'), ('diet', 'Diet'), ('hygiene', 'Hygiene'), ('yoga', 'Yoga')], default='exercise', max_length=50),
        ),
    ]