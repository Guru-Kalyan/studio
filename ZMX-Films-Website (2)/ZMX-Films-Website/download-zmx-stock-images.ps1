$ErrorActionPreference = 'Stop'

Write-Host "`nZMX Films - Temporary Stock Image Downloader" -ForegroundColor Cyan
Write-Host "This script downloads temporary Unsplash images into public/images.`n"

if (-not (Test-Path -LiteralPath (Join-Path (Get-Location) 'package.json'))) {
    Write-Host "ERROR: package.json was not found in the current folder." -ForegroundColor Red
    Write-Host "Open PowerShell in your Next.js project root (the folder containing package.json), then run this script again."
    exit 1
}

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$target = Join-Path (Get-Location) 'public\images'
New-Item -ItemType Directory -Force -Path $target | Out-Null

$images = @(
    [PSCustomObject]@{
        File = 'wedding-bride.jpg'
        Url = 'https://images.unsplash.com/photo-1645862756029-9cf95f6f941e?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Simran Sood - https://unsplash.com/photos/a-woman-wearing-a-red-and-gold-bridal-veil-MwGo9QsMK8g'
    },
    [PSCustomObject]@{
        File = 'wedding-couple.jpg'
        Url = 'https://images.unsplash.com/photo-1665960213530-3fb10da1f25e?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Unsplash - https://unsplash.com/photos/a-man-and-woman-posing-for-a-picture-jWBxlyVZ3bg'
    },
    [PSCustomObject]@{
        File = 'prewedding.jpg'
        Url = 'https://images.unsplash.com/photo-1756376748107-12c98ec6b969?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Suresh Chavan - https://unsplash.com/photos/a-couple-dressed-in-traditional-indian-wedding-attire-BHlJI-Rg0MM'
    },
    [PSCustomObject]@{
        File = 'haldi.jpg'
        Url = 'https://images.unsplash.com/photo-1771992224413-f171d19425cf?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Rejaul Karim - https://unsplash.com/photos/a-woman-in-traditional-attire-adorned-with-marigold-flowers-B2XXakp9qDM'
    },
    [PSCustomObject]@{
        File = 'automobile.jpg'
        Url = 'https://images.unsplash.com/photo-1770749431157-f1f4b74945fd?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Evgeniy Bezkorovayniy - https://unsplash.com/photos/a-black-luxury-car-parked-at-night-zcdR9VxWZ7Q'
    },
    [PSCustomObject]@{
        File = 'real-estate.jpg'
        Url = 'https://images.unsplash.com/photo-1757356657991-c3fd6e2e812e?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Unsplash - https://unsplash.com/photos/modern-luxury-home-with-swimming-pools-at-dusk-q6eSeT3euLU'
    },
    [PSCustomObject]@{
        File = 'hospitality.jpg'
        Url = 'https://images.unsplash.com/photo-1793689298486-6d5d28a8c4d4?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Ruitong Xie - https://unsplash.com/photos/modern-hotel-lobby-with-glass-walls-7saxkxcsC2o'
    },
    [PSCustomObject]@{
        File = 'production.jpg'
        Url = 'https://images.unsplash.com/photo-1749163569134-b525276f367f?auto=format&fit=crop&w=1600&q=82'
        Credit = 'Kyle Loftus - https://unsplash.com/photos/film-crew-working-on-a-shot-outdoors-Dw681UwPYOY'
    }
)

$credits = @(
    '# ZMX Films - Temporary Stock Image Credits',
    '',
    'These are temporary representative stock photographs for development previews. They are not ZMX client work.',
    'Each source page identifies the photograph as free to use under the Unsplash License at the time it was checked. Review the current license and any model/property/trademark rights before commercial publication.',
    ''
)

$failed = @()
$index = 0
foreach ($image in $images) {
    $index++
    $destination = Join-Path $target $image.File
    Write-Host ("[{0}/{1}] Downloading {2}..." -f $index, $images.Count, $image.File) -ForegroundColor Yellow

    try {
        Invoke-WebRequest -Uri $image.Url -OutFile $destination -Headers @{ 'User-Agent' = 'Mozilla/5.0 (compatible; ZMX-Local-Asset-Setup/1.0)' } -UseBasicParsing -TimeoutSec 60
        $fileInfo = Get-Item -LiteralPath $destination
        if ($fileInfo.Length -lt 10000) {
            throw "Downloaded file is unexpectedly small ($($fileInfo.Length) bytes)."
        }
        Write-Host ("  OK - {0:N0} KB" -f ($fileInfo.Length / 1KB)) -ForegroundColor Green
        $credits += "- $($image.File): $($image.Credit)"
    }
    catch {
        if (Test-Path -LiteralPath $destination) { Remove-Item -LiteralPath $destination -Force }
        $failed += $image.File
        Write-Host "  FAILED - $($_.Exception.Message)" -ForegroundColor Red
    }
}

$creditPath = Join-Path (Get-Location) 'IMAGE_CREDITS_STOCK.md'
Set-Content -LiteralPath $creditPath -Value $credits -Encoding UTF8

Write-Host "`nImages folder: $target" -ForegroundColor Cyan
Write-Host "Credits file: $creditPath" -ForegroundColor Cyan

if ($failed.Count -eq 0) {
    Write-Host "`nAll $($images.Count) images downloaded successfully." -ForegroundColor Green
    Write-Host 'You can now use paths such as /images/wedding-bride.jpg in page.js.'
    exit 0
}
else {
    Write-Host "`n$($failed.Count) image(s) could not be downloaded: $($failed -join ', ')" -ForegroundColor Red
    Write-Host 'Check your internet connection, then run the script again.'
    exit 2
}
