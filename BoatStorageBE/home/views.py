from django.shortcuts import render


# Create your views here.

def home(request):
    # Renders the React build's index.html file
    return render(request, "templates/index.html")
