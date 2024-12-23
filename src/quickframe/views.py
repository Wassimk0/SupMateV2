from django.shortcuts import render
from django.template import TemplateDoesNotExist



def home_view(request):
    return render(request, f"index.html")

def dynamic_view(request, page):
    try:
        return render(request, f"{page}")
    except TemplateDoesNotExist:
        return render(request, f"404.html")