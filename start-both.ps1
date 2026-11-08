#!/usr/bin/env powershell
# One-command startup for portfolio website (serves both React app + inner-site)
# This starts the Express server that serves:
# - React portfolio at http://localhost:8080/
# - Inner-site (UgyenOS) at http://localhost:8080/inner-site

Write-Host "=================================================="
Write-Host "Starting Portfolio Website Server"
Write-Host "=================================================="
Write-Host ""
Write-Host "Server will be available at:"
Write-Host "  http://localhost:8080   (React Portfolio)"
Write-Host "  http://localhost:8080/inner-site   (UgyenOS)"
Write-Host ""

# Change to the portfolio-website directory
cd 'd:\pp\portfolio-website'

# Start the Node.js server
node server/index.ts

# Ctrl+C trap to clean up
 trap {
     Write-Host "`nServer stopped. Goodbye!"
     exit
 }