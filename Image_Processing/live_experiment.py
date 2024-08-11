import pytesseract
import pyautogui
from googletrans import Translator
from gtts import gTTS
import os

def extract_text_under_cursor():
    x, y = pyautogui.position()
    
    region_left = x - 50
    region_top = y - 50
    region_width = 100
    region_height = 100

    screen = pyautogui.screenshot(region=(region_left, region_top, region_width, region_height))
    
    extracted_text = pytesseract.image_to_string(screen)
    
    return extracted_text.strip()

def text_to_speech(text, language):
    tts = gTTS(text=text, lang=language, slow=False)
    tts.save("temp.mp3")
    os.system("start temp.mp3")

def translate_text(text, dest_language):
    translator = Translator()
    translation = translator.translate(text, dest=dest_language)
    return translation.text

if __name__ == "__main__":
    try:
        while True:
            hovered_text = extract_text_under_cursor()
            
            if hovered_text:
                print("Original Text:", hovered_text)
                translated_text = translate_text(hovered_text, 'hi')  # 'hi' for Hindi
                print("Translated Text:", translated_text)
                text_to_speech(translated_text, 'hi')
    except KeyboardInterrupt:
        pass
