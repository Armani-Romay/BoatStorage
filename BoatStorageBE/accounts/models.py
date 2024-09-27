from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

# class for the user
class CustomUser(AbstractUser):
    
    email = models.EmailField(unique=True)
    # required fields, anymore fields would be optional
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self) -> str:
        return self.email
    
    # # add related_name attributes to resolve the reverse accessor conflicts
    # groups = models.ManyToManyField(
    #     Group,
    #     related_name="customuser_set",  # Add this line to avoid clash with auth.User.groups
    #     blank=True,
    #     help_text=("The groups this user belongs to. "
    #                "A user will get all permissions granted to each of "
    #                "their groups."),
    #     related_query_name="customuser",
    # )
    # user_permissions = models.ManyToManyField(
    #     Permission,
    #     related_name="customuser_set",  # add this line to avoid clash with auth.User.user_permissions
    #     blank=True,
    #     help_text="Specific permissions for this user.",
    #     related_query_name="customuser",
    # )