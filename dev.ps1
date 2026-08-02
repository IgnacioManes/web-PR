$runtimeRoot = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies'
$nodeDirectory = Join-Path $runtimeRoot 'node\bin'
$pnpmExecutable = Join-Path $runtimeRoot 'bin\fallback\pnpm.cmd'

if (-not (Test-Path -LiteralPath $pnpmExecutable)) {
  Write-Error 'No se encontró el runtime incluido con Codex. Instalá Node.js LTS desde https://nodejs.org/ y luego ejecutá npm run dev.'
  exit 1
}

$env:Path = "$nodeDirectory;$env:Path"
$env:ASTRO_TELEMETRY_DISABLED = '1'

Write-Host 'Iniciando Pared Roja…' -ForegroundColor Red
& $pnpmExecutable run dev -- --host 127.0.0.1
exit $LASTEXITCODE
