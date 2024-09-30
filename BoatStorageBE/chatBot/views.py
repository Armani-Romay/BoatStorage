from django.shortcuts import render
from .chat import ChatBot  # import your ChatBot class
from django.http import JsonResponse
from django.views import View

# Create your views here.
# class for the chatbot
class ChatBotAPIView(View):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.chatbot = ChatBot()  # create an instance of ChatBot

    def post(self, request, *args, **kwargs):
        user_input = request.POST.get('message')  # assume you send a message field in your request
        if user_input:
            response = self.chatbot.get_response(user_input)
            return JsonResponse({"response": response})
        return JsonResponse({"error": "No input provided"}, status=400)
