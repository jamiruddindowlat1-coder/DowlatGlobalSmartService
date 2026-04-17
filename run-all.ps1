Write-Host "Starting Backend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "cd backend\src\DowlatGlobal.API; dotnet run"

Start-Sleep -Seconds 5

Write-Host "Starting Frontend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "cd frontend; npm run dev"

Write-Host "Project Started!"