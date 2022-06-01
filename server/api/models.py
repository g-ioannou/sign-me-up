from django.db import models
from django.utils import timezone


class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

class Admin(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)

class SimpleUser(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    is_premium = models.BooleanField(default=False)
    phone = models.CharField(max_length=255)

class Store(models.Model):
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    is_premium = models.BooleanField(default=False)
    phone = models.CharField(max_length=255)

class Purchase(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    price = models.FloatField()
    date_purchased = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=255)
    valid_until = models.DateTimeField()

class Event(models.Model):
    organizer = models.ForeignKey(to=User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    coordinates = models.CharField(max_length=255)
    description = models.TextField()
    is_promoted = models.BooleanField()
    event_time = models.DateTimeField()


class Review(models.Model):
    event = models.ForeignKey(to=Event, on_delete=models.CASCADE)
    grade = models.IntegerField()