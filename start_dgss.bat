@echo off
echo Starting Dowlat Global Smart Service...

:: Start Backend
start cmd /k "cd d:\DowlatGlobalSmartService\backend && dotnet run"

:: Start Frontend
start cmd /k "cd d:\DowlatGlobalSmartService\frontend && npm run dev"

echo Backend and Frontend are starting. Swagger will be available at http://localhost:5000/swagger
pause
