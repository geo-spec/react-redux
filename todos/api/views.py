from rest_framework import viewsets

from .serializers import TodoSerializer, CrudSerializer
from todos.models import Todo
from todos.models import Crud


class TodoViewSet(viewsets.ModelViewSet):
    # @todo disable CSRF
    authentication_classes = []
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class CrudViewSet(viewsets.ModelViewSet):
    # @todo disable CSRF
    authentication_classes = []
    queryset = Crud.objects.all()
    serializer_class = CrudSerializer
