@echo off
title DowlatGlobal Smart Service - Auto Launcher
cd /d "D:\DowlatGlobalSmartService"

echo 🔍 Checking dependencies...
if not exist "frontend\node_modules" (
    echo 📦 Dependencies missing. Installing now (please wait, this may take a few minutes)...
    cd frontend && npm install && cd ..
    echo ✅ Dependencies installed.
)

echo 🚀 Starting Backend...
start "Backend Server" cmd /k "cd /d "D:\DowlatGlobalSmartService\backend\src\DowlatGlobal.API" && dotnet run"

echo ⏳ Waiting for backend to initialize...
timeout /t 10 /nobreak >nul

echo 🎨 Starting Frontend...
start "Frontend Dev" cmd /k "cd /d "D:\DowlatGlobalSmartService\frontend" && npx vite"

echo 🌐 Waiting for frontend...
timeout /t 12 /nobreak >nul

echo 🌍 Opening your browser...
start "" "http://localhost:5173"

echo.
echo ✅ ALL SYSTEMS STARTED!
echo Frontend: http://localhost:5173
echo Backend: https://localhost:7000/swagger
echo.
pause