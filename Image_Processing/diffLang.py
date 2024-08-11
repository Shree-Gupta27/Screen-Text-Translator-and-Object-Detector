import pytesseract
import pyautogui
import pyttsx3
import time
from deep_translator import GoogleTranslator
 
# Set up Tesseract OCR
pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe'
 
# Set up translation service
translator = GoogleTranslator(source='auto', target='fr')
 
def extract_text_under_cursor():
    x, y = pyautogui.position()
    region_left = x - 50
    region_top = y - 50
    region_width = 100
    region_height = 100
    screen = pyautogui.screenshot(region=(region_left, region_top, region_width, region_height))
    extracted_text = pytesseract.image_to_string(screen)
    return extracted_text.strip()
 
def text_to_speech(text, rate=150):
    engine = pyttsx3.init()
    engine.setProperty('rate', rate)  # Adjust the rate (words per minute) as desired
 
    # Set the voice to a specific French voice
    # Replace 'FrenchVoiceName' with the name of the desired French voice
    french_voice = 'FrenchVoiceName'
    engine.setProperty('voice', french_voice)
 
    engine.say(text)
    engine.runAndWait()
 
def translate_to_french(text):
    translated_text = translator.translate(text)
    return translated_text
 
if __name__ == "__main__":
    try:
        previous_text = ''
        while True:
            hovered_text = extract_text_under_cursor()
            if hovered_text and hovered_text != previous_text:
                translated_text = translate_to_french(hovered_text)
                text_to_speech(translated_text)
                previous_text = hovered_text
            time.sleep(1)  # Delay between consecutive text extractions (1 second)
 
    except KeyboardInterrupt:
        pass