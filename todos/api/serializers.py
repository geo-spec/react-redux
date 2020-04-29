from rest_framework import serializers

from todos.models import Todo
from todos.models import Crud


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class CrudSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crud
        fields = '__all__'