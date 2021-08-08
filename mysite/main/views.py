from django.shortcuts import render
from django.views import generic

class Edit_view(generic.TemplateView):
    template_name = "edit.html"
# Create your views here.
