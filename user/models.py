from django.db import models
from group.models import Group


class User(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    group = models.ForeignKey(Group, related_name='users', on_delete=models.PROTECT)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return self.name