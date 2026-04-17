@echo off
title DowlatGlobal Smart Service
echo Starting Backend...
start "Backend" cmd /k "cd /d D:\DowlatGlobalSmartService\backend\src\DowlatGlobal.API & dotnet run"
timeout /t 5 /nobreak >nul
echo Starting Frontend...
start "Frontend" cmd /k "cd /d D:\DowlatGlobalSmartService\frontend & npm run dev"
timeout /t 8 /nobreak >nul
start http://localhost:5173
echo All services started!
pause
