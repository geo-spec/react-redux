from rest_framework import routers

from .views import TodoViewSet
from .views import CrudViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')
router.register('crud', CrudViewSet, 'crud')


urlpatterns = router.urls
