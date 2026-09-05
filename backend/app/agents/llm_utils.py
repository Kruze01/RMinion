import os
import re
import google.generativeai as genai
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '../../.env'))

# Providers configuration
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
GEMINI_KEY = os.getenv("GEMINI_API_KEY")

use_openai = False
if OPENAI_KEY and OPENAI_KEY != "your_openai_api_key_here":
    use_openai = True
    openai_client = OpenAI(api_key=OPENAI_KEY)
elif GEMINI_KEY and GEMINI_KEY != "your_api_key_here":
    genai.configure(api_key=GEMINI_KEY)
    gemini_model = genai.GenerativeModel('gemini-3.6-flash')
else:
    print("WARNING: Neither OPENAI_API_KEY nor GEMINI_API_KEY are properly set in .env")

def clean_json_response(text: str) -> str:
    """Removes markdown formatting (like ```json ... ```) from LLM output."""
    text = text.strip()
    if text.startswith("```"):
        # Match ```json or just ``` at the start, and ``` at the end
        text = re.sub(r'^```(?:json)?\s*', '', text)
        text = re.sub(r'\s*```$', '', text)
    return text.strip()

def generate_llm_response(prompt: str, json_mode: bool = False) -> str:
    """
    Unified function to generate LLM response, prioritizing OpenAI if available.
    """
    if use_openai:
        # Use OpenAI GPT-4o mini for fast prototyping
        messages = [{"role": "user", "content": prompt}]
        response = openai_client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages,
            temperature=0.2,
        )
        result = response.choices[0].message.content
        if json_mode:
            result = clean_json_response(result)
        return result
    else:
        # Fallback to Gemini
        config = {"response_mime_type": "application/json"} if json_mode else None
        response = gemini_model.generate_content(prompt, generation_config=config)
        result = response.text
        if json_mode:
            result = clean_json_response(result)
        return result
