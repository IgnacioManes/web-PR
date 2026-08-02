@echo off
set "PARED_ROJA_RUNTIME=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies"
set "PATH=%PARED_ROJA_RUNTIME%\node\bin;%PATH%"
set "ASTRO_TELEMETRY_DISABLED=1"

if not exist "%PARED_ROJA_RUNTIME%\bin\fallback\pnpm.cmd" (
  echo No se encontro el runtime incluido con Codex.
  exit /b 1
)

echo Compilando Pared Roja...
call "%PARED_ROJA_RUNTIME%\bin\fallback\pnpm.cmd" run build
if errorlevel 1 exit /b 1

echo.
echo Sitio disponible en http://127.0.0.1:4321/
echo Presiona Ctrl+C para detenerlo.
"%PARED_ROJA_RUNTIME%\python\python.exe" -m http.server 4321 --bind 127.0.0.1 --directory dist
