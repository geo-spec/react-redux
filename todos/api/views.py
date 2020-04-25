from rest_framework import viewsets

from .serializers import TodoSerializer
from todos.models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    # @todo disable CSRF
    authentication_classes = []
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
