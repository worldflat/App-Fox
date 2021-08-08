from django.urls import path
from . import views

app_name = "main"
urlpatterns = [
    path("edit/", views.Edit_view.as_view(), name='edit')
]
