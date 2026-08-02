@echo off
set "PARED_ROJA_RUNTIME=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies"
set "PATH=%PARED_ROJA_RUNTIME%\node\bin;%PATH%"
set "ASTRO_TELEMETRY_DISABLED=1"

if not exist "%PARED_ROJA_RUNTIME%\bin\fallback\pnpm.cmd" (
  echo No se encontro el runtime incluido con Codex.
  echo Instala Node.js LTS desde https://nodejs.org/ y luego ejecuta npm run dev.
  exit /b 1
)

echo Iniciando Pared Roja...
call "%PARED_ROJA_RUNTIME%\bin\fallback\pnpm.cmd" run dev -- --host 127.0.0.1
