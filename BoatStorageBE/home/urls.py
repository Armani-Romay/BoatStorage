from django.urls import path, re_path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),  # Serve the React app at the root
    re_path(r'^(?:.*)/?$', views.home),  # Catch-all for React routes
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
