# allows us to convert complex data into python native data types
# which we can then convert into json later
from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']

