from django.urls import path, re_path
from rest_framework.routers import DefaultRouter
from . import views
from django.views.generic import TemplateView

# router = DefaultRouter()
# router.register(r'todos', views.ToDoView)


urlpatterns = [
    # path('', views.index, name='index'),
    path('signup', views.signup, name='signup'),
    path('upload', views.upload, name='upload'),
    path('follow', views.follow, name='follow'),
    re_path(r"^.*", TemplateView.as_view(template_name ='base.html')),
    path('search', views.search, name='search'),
    path('profile/<str:pk>', views.profile, name='profile'),
    path('like-post', views.like_post, name='like-post'),
    path('signin', views.signin, name='signin'),
    path('logout', views.logout, name='logout'),
    path('settings', views.settings, name='settings'),
]

# urlpatterns += router.urls