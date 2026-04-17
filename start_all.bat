@echo off
title DGSS AUTO START

cd /d "D:\DowlatGlobalSmartService"

echo =========================
echo Starting DGSS Project...
echo =========================

echo Starting Backend...
start "Backend" cmd /k "cd backend\src\DowlatGlobal.API && dotnet run"

timeout /t 6 >nul

echo Starting Frontend...
start "Frontend" cmd /k "cd frontend && npm run dev"

timeout /t 5 >nul

echo Opening Browser...
start http://localhost:5173
start http://localhost:5259/swagger

echo =========================
echo ALL SYSTEM STARTED
echo =========================

pause