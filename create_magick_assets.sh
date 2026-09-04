#!/bin/bash
set -e
mkdir -p public public/assets

# 1. LOGO1236748.jpg (800x800)
convert -size 800x800 xc:"#050505" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 90 -gravity center -annotate +0-40 "VENEZ" \
  -fill "#FFFFFF" -font DejaVu-Serif-Bold -pointsize 32 -gravity center -annotate +0+50 "PEST CONTROL" \
  -fill "#00FF4C" -font DejaVu-Sans -pointsize 18 -gravity center -annotate +0+120 "HOUSTON, TX • 713-298-4210" \
  public/LOGO1236748.jpg

# 2. bhbhbhbjuu.jpg (1200x500)
convert -size 1200x500 xc:"#000000" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 110 -gravity west -annotate +100-30 "VENEZ" \
  -fill "#FFFFFF" -font DejaVu-Serif-Bold -pointsize 42 -gravity west -annotate +100+60 "PEST CONTROL" \
  public/bhbhbhbjuu.jpg

# 3. dfsmnfkjshfiushdf.jpg (800x1200)
convert -size 800x1200 xc:"#050505" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 54 -gravity north -annotate +0+60 "VENEZ PEST CONTROL" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 30 -gravity northwest -annotate +60+220 "✓ BIMONTHLY PEST CONTROL" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 46 -gravity northeast -annotate +60+210 "$120" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 30 -gravity northwest -annotate +60+380 "✓ QUARTERLY PEST CONTROL" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 46 -gravity northeast -annotate +60+370 "$190" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 30 -gravity northwest -annotate +60+540 "✓ ANNUAL PEST CONTROL" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 46 -gravity northeast -annotate +60+530 "$400" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 30 -gravity northwest -annotate +60+700 "✓ RODENT PREVENTION" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 46 -gravity northeast -annotate +60+690 "$400" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 30 -gravity northwest -annotate +60+860 "✓ TERMITES" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 46 -gravity northeast -annotate +60+850 "$1000+" \
  -fill "#52B788" -font DejaVu-Sans -pointsize 24 -gravity south -annotate +0+80 "HOUSTON, TEXAS • (713) 298-4210" \
  public/dfsmnfkjshfiushdf.jpg

# 4. asdsadqewrwfdsafdsf.jpg (800x1200)
convert -size 800x1200 xc:"#030303" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 54 -gravity north -annotate +0+80 "VENEZ PEST CONTROL" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 180 -gravity center -annotate +0-120 "$120" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 42 -gravity center -annotate +0+70 "INDOOR/OUTDOOR" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 42 -gravity center -annotate +0+130 "PEST CONTROL" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 64 -gravity center -annotate +0+220 "SERVICE" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 30 -gravity south -annotate +0+80 "www.venezpestcontrol.com" \
  public/asdsadqewrwfdsafdsf.jpg

# 5. brwegrew uiewyrwrb.jpg (1000x1000)
convert -size 1000x1000 xc:"#F4F6F4" \
  -fill "#111111" -font DejaVu-Sans-Bold -pointsize 44 -gravity northwest -annotate +50+60 "Pest Control\nServices" \
  -fill "#2D6A4F" -font DejaVu-Sans -pointsize 26 -gravity northwest -annotate +50+175 "Control de plagas" \
  -fill "#111111" -font DejaVu-Sans -pointsize 26 -gravity northwest -annotate +50+240 "• Regular pest control\n• Bed bugs extermination\n• Termites extermination\n• Yard pest control\n• Mosquitoes control\n• Rodents control\n• Animal control\n  Snakes - Opossums - Raccoons" \
  -fill "#111111" -font DejaVu-Sans-Bold -pointsize 34 -gravity northwest -annotate +50+680 "Book now" \
  -fill "#111111" -font DejaVu-Sans-Bold -pointsize 34 -gravity northwest -annotate +50+760 "John Rincon" \
  -fill "#111111" -font DejaVu-Sans-Bold -pointsize 32 -gravity northwest -annotate +50+815 "+1 (713) 298-4210" \
  -fill "#081C15" -draw "rectangle 620,0 1000,1000" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 34 -gravity northeast -annotate +40+50 "VENEZ\nPEST CONTROL" \
  -fill "#FFFFFF" -font DejaVu-Sans -pointsize 20 -gravity northeast -annotate +40+180 "Field Operations\nPerimeter Barrier\nIndoor Baseboard\nHouston, TX" \
  public/brwegrew\ uiewyrwrb.jpg

# 6. gpt567.png (1200x800)
convert -size 1200x800 xc:"#081C15" \
  -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 36 -gravity northwest -annotate +60+40 "VENEZ PEST CONTROL" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 60 -gravity northwest -annotate +60+160 "PROTECTING\nWHAT MATTERS" \
  -fill "#E2E8F0" -font DejaVu-Sans -pointsize 24 -gravity northwest -annotate +60+310 "Reliable, safe and effective pest control solutions\nfor your home and business in Houston, Texas." \
  -fill "#52B788" -font DejaVu-Sans-Bold -pointsize 24 -gravity northwest -annotate +60+420 "• General Pest Control   • Rodent Control\n• Termite Control        • Residential & Commercial" \
  -fill "#FFFFFF" -font DejaVu-Sans-Bold -pointsize 28 -gravity southwest -annotate +60+60 "Houston, Texas  •  713-298-4210" \
  -fill "#081C15" -stroke "#00FF4C" -strokewidth 2 -draw "roundrectangle 760,670 1140,750 20,20" \
  -stroke none -fill "#00FF4C" -font DejaVu-Sans-Bold -pointsize 20 -gravity southeast -annotate +80+70 "GET FREE INSPECTION" \
  public/gpt567.png

# Copy all to public/assets
cp public/*.jpg public/*.png public/assets/ 2>/dev/null || true
echo "Generated all assets successfully!"
