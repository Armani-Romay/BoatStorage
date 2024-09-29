import os
import google.generativeai as genai
from dotenv import load_dotenv

class ChatBot:
    def __init__(self):
        load_dotenv()
        genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

        # Create the model configuration
        self.generation_config = {
            "temperature": 0,
            "top_p": 0.95,
            "top_k": 64,
            "max_output_tokens": 8192,
            "response_mime_type": "text/plain",
        }

        self.model = genai.GenerativeModel(
            model_name="gemini-1.5-pro",
            generation_config=self.generation_config,
            system_instruction=("You are an expert in boat and RV storage spots in Tampa, Florida, and you're tasked "
                                "with interacting with customers for a storage company called Romay Storage, local to "
                                "Pasco County, located off of Anclote Road. Answer any questions regarding local "
                                "beaches, local camping grounds, and scenery. Also answer questions about what the "
                                "storage company offers by directing them toward our options page or the contact page."),
        )

        # Initialize history
        self.history = []

    def get_response(self, user_input):
        chat_session = self.model.start_chat(history=self.history)
        response = chat_session.send_message(user_input)
        model_response = response.text
        
        # Update chat history
        self.history.append({"role": "user", "parts": [user_input]})
        self.history.append({"role": "model", "parts": [model_response]})
        
        return model_response
