@echo off

REM Check if Python is installed
python --version 2>NUL
IF %ERRORLEVEL% NEQ 0 (
    REM Python is not installed, proceed with installation
    echo Python is not installed. Installing Python...
    
    REM Download Python installer
    curl -o python_installer.exe https://www.python.org/ftp/python/3.9.7/python-3.9.7-amd64.exe
    
    REM Install Python silently
    python_installer.exe /quiet PrependPath=1 Include_test=0 InstallAllUsers=1
    
    REM Delete the Python installer
    del python_installer.exe
    
    REM Verify Python installation
    python --version 2>NUL
    IF %ERRORLEVEL% NEQ 0 (
        REM Python installation failed
        echo Python installation failed. Please check the installation manually.
        exit /b
    )
)

REM Python is installed, proceed with running the script
echo Python is installed. Running the script...

REM Activate Python virtual environment if necessary
REM Uncomment the following line if you are using a virtual environment
REM call <path_to_your_virtualenv>/Scripts/activate.bat

REM Run the Python script
python live_experiment.py

REM Pause the script to keep the command prompt window open
pause
