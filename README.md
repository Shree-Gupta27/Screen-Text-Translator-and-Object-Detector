# Team-40

# Screen Text Translator and Object Detector

## Description

This project is a Python-based application that combines screen text translation and object detection functionalities. It allows users to hover their cursor over a region on the screen to detect and translate text in real-time. Additionally, the application performs object detection within the specified region and uses text-to-speech to announce the detected objects.

The motivation behind this project is to assist users in understanding and interacting with digital content presented on the screen. It can be particularly useful for individuals with visual impairments or language barriers, helping them access information in a more inclusive manner.

## Features

- Real-time screen text translation and text-to-speech:

  - As the user hovers the cursor over a region on the screen, the application uses Optical Character Recognition (OCR) with Tesseract to detect and extract text from the specified area.
  - The extracted text is then translated to a target language (e.g., Hindi) using the Google Translate API.
  - The translated text is converted into speech using the gTTS (Google Text-to-Speech) library and played through the default media player, allowing users to hear the translated content.

- Object detection in specified region and audio feedback:
  - The application uses the YOLOv4 (You Only Look Once version 4) object detection model to detect various objects within the region specified by the user's cursor.
  - Detected objects are announced using text-to-speech, providing audio feedback to the user about the presence of objects in the area.

## Requirements

Ensure that you have the following software and libraries installed on your system:

- Python 3.x
- OpenCV
- Tesseract OCR
- pytesseract
- pyttsx3
- mss
- pyautogui
- numpy
- googletrans==4.0.0-rc1
- gtts

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/cfgindia2023/Team-40.git
cd Team-40
```

2. Install the required Python packages using pip:

```
pip install -r requirements.txt
```

3. Download the YOLOv4 weights file, configuration file, and coco.names file, and place them in the project directory:

   - YOLOv4 weights: https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.weights
   - YOLOv4 configuration: https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.cfg
   - coco.names: https://github.com/pjreddie/darknet/blob/master/data/coco.names

4. Install Tesseract OCR and specify its path in the code:

   - Tesseract OCR: https://github.com/tesseract-ocr/tesseract

## Usage

1. Run the main script:

```
python main.py
```

2. Hover the cursor over the desired region on the screen.

3. The application will detect and translate text in the region, and announce detected objects using text-to-speech.

4. Press 'q' to quit the application.

## Note

- For optimal performance, ensure your machine has the necessary hardware and dependencies installed as specified in the Requirements section.
- The object detection accuracy may vary depending on the screen region and the objects present in the frame.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- YOLOv4 model implementation by AlexeyAB: https://github.com/AlexeyAB/darknet
- Google Translate API: https://py-googletrans.readthedocs.io/en/latest/
- pytesseract OCR library: https://github.com/madmaze/pytesseract
- pyttsx3 text-to-speech library: https://github.com/nateshmbhat/pyttsx3

## Contributing

Contributions to this project are welcome! If you'd like to contribute new features, bug fixes, or improvements, please create a pull request with your changes.

For major changes or significant features, it's recommended to open an issue first to discuss the proposed changes.

## Folder Structure

📦Image_Processing
┣ 📂object detection
┃ ┗ 📜object_detection.py
┣ 📜diffLang.py
┣ 📜install_and_run.bat
┣ 📜live_experiment.py
┗ 📜package-lock.json

## Support

If you encounter any issues, have questions, or need support, feel free to [open an issue](https://github.com/cfgindia2023/Team-40.git) in this repository. We'll be happy to assist you.
