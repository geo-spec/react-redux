from django.contrib import admin
from .models import Todo

class ListAdminMixin(object):
    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        super(ListAdminMixin, self).__init__(model, admin_site)

admin_class = type('AdminClass', (ListAdminMixin, admin.ModelAdmin), {})
admin.site.register(Todo, admin_class)

# @todo register all models - https://hackernoon.com/automatically-register-all-models-in-django-admin-django-tips-481382cf75e5