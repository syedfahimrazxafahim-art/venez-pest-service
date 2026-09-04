import subprocess
import os

os.makedirs('public', exist_ok=True)
os.makedirs('public/assets', exist_ok=True)

# 1. bhbhbhbjuu.svg (Horizontal Logo)
svg_bhbhbhbjuu = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="1200" height="600" style="background:#000000">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <linearGradient id="neonGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00FF4C" />
      <stop offset="50%" stop-color="#10E836" />
      <stop offset="100%" stop-color="#00C830" />
    </linearGradient>
  </defs>
  
  <!-- Stylized Arachnid Emblem -->
  <g transform="translate(140, 70)" filter="url(#glow)">
    <!-- Main Left Claws / Legs -->
    <path d="M 60,30 Q 30,120 10,240 Q 40,290 80,330 Q 45,260 40,190 Q 75,100 60,30 Z" fill="url(#neonGreen)" />
    <path d="M 110,60 Q 70,160 50,320 Q 90,360 140,400 Q 90,330 85,240 Q 120,150 110,60 Z" fill="url(#neonGreen)" />
    <path d="M 170,130 Q 130,220 110,380 Q 150,420 210,450 Q 150,380 140,280 Q 175,200 170,130 Z" fill="url(#neonGreen)" />
    <!-- Center Thorax / Triangle -->
    <polygon points="180,240 280,240 250,340 210,400 180,310" fill="url(#neonGreen)" />
    <polygon points="210,255 260,255 235,320" fill="#000" />
  </g>

  <!-- Typography VENEZ -->
  <g transform="translate(420, 180)">
    <!-- V -->
    <path d="M 20,40 L 70,40 L 120,190 L 170,40 L 220,40 L 140,230 L 100,230 Z" fill="url(#neonGreen)" filter="url(#glow)" />
    <!-- E -->
    <path d="M 235,50 L 330,50 L 330,90 L 285,90 L 285,120 L 325,120 L 325,160 L 285,160 L 285,190 L 335,190 L 335,230 L 235,230 Z" fill="url(#neonGreen)" filter="url(#glow)" />
    <!-- N -->
    <path d="M 350,50 L 395,50 L 460,165 L 460,50 L 505,50 L 505,230 L 460,230 L 395,115 L 395,230 L 350,230 Z" fill="url(#neonGreen)" filter="url(#glow)" />
    <!-- E -->
    <path d="M 520,50 L 615,50 L 615,90 L 570,90 L 570,120 L 610,120 L 610,160 L 570,160 L 570,190 L 620,190 L 620,230 L 520,230 Z" fill="url(#neonGreen)" filter="url(#glow)" />
    <!-- Z -->
    <path d="M 635,50 L 740,50 L 740,90 L 685,185 L 745,185 L 745,230 L 635,230 L 635,190 L 695,95 L 635,95 Z" fill="url(#neonGreen)" filter="url(#glow)" />
    <!-- Sharp spikes on letters -->
    <polygon points="415,225 435,320 428,225" fill="url(#neonGreen)" />
  </g>

  <!-- PEST CONTROL Subtitle with Spider in O -->
  <g transform="translate(425, 470)">
    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="52" font-weight="bold" fill="#FFFFFF" letter-spacing="18">PEST</text>
    <text x="240" y="0" font-family="'Times New Roman', serif" font-size="52" font-weight="bold" fill="#FFFFFF" letter-spacing="18">C</text>
    <!-- Spider Web O -->
    <g transform="translate(308, -20)">
      <circle cx="20" cy="0" r="24" stroke="#FFFFFF" stroke-width="3" fill="none" />
      <line x1="-4" y1="0" x2="44" y2="0" stroke="#FFFFFF" stroke-width="2" />
      <line x1="20" y1="-24" x2="20" y2="24" stroke="#FFFFFF" stroke-width="2" />
      <line x1="3" y1="-17" x2="37" y2="17" stroke="#FFFFFF" stroke-width="2" />
      <line x1="3" y1="17" x2="37" y2="-17" stroke="#FFFFFF" stroke-width="2" />
      <!-- Insect in center -->
      <ellipse cx="20" cy="0" rx="6" ry="10" fill="#FFFFFF" />
      <line x1="12" y1="-5" x2="28" y2="-5" stroke="#FFFFFF" stroke-width="2" />
      <line x1="10" y1="0" x2="30" y2="0" stroke="#FFFFFF" stroke-width="2" />
      <line x1="12" y1="5" x2="28" y2="5" stroke="#FFFFFF" stroke-width="2" />
    </g>
    <text x="360" y="0" font-family="'Times New Roman', serif" font-size="52" font-weight="bold" fill="#FFFFFF" letter-spacing="18">NTROL</text>
  </g>
</svg>'''

with open('public/bhbhbhbjuu.svg', 'w') as f:
    f.write(svg_bhbhbhbjuu)

# 2. LOGO1236748.svg (Square Logo)
svg_logo = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" style="background:#050505">
  <defs>
    <radialGradient id="greenAura" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#00FF4C" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="glow3d" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <linearGradient id="metalGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#55FF77" />
      <stop offset="50%" stop-color="#10E836" />
      <stop offset="100%" stop-color="#059920" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="#030303" />
  <circle cx="400" cy="350" r="350" fill="url(#greenAura)" />

  <!-- Arachnid Claws -->
  <g transform="translate(60, 40)" filter="url(#glow3d)">
    <path d="M 90,50 Q 50,160 20,320 Q 60,390 120,440 Q 70,350 65,260 Q 110,140 90,50 Z" fill="url(#metalGreen)" />
    <path d="M 150,90 Q 100,220 80,420 Q 130,480 200,530 Q 130,440 125,320 Q 170,200 150,90 Z" fill="url(#metalGreen)" />
    <path d="M 230,170 Q 180,280 150,500 Q 200,560 280,600 Q 200,500 190,380 Q 240,270 230,170 Z" fill="url(#metalGreen)" />
    <polygon points="240,320 370,320 330,460 280,530 240,420" fill="url(#metalGreen)" />
    <polygon points="280,340 350,340 310,430" fill="#050505" />
  </g>

  <!-- Typography VENEZ -->
  <g transform="translate(380, 220)" filter="url(#glow3d)">
    <!-- V -->
    <path d="M 10,60 L 55,60 L 95,200 L 135,60 L 180,60 L 115,240 L 75,240 Z" fill="url(#metalGreen)" />
    <!-- E -->
    <path d="M 190,70 L 265,70 L 265,105 L 230,105 L 230,135 L 260,135 L 260,170 L 230,170 L 230,200 L 270,200 L 270,235 L 190,235 Z" fill="url(#metalGreen)" />
    <!-- N -->
    <path d="M 280,70 L 315,70 L 365,175 L 365,70 L 400,70 L 400,235 L 365,235 L 315,130 L 315,235 L 280,235 Z" fill="url(#metalGreen)" />
    <!-- E -->
    <path d="M 410,70 L 485,70 L 485,105 L 450,105 L 450,135 L 480,135 L 480,170 L 450,170 L 450,200 L 490,200 L 490,235 L 410,235 Z" fill="url(#metalGreen)" />
    <!-- Z -->
    <path d="M 500,70 L 585,70 L 585,105 L 540,195 L 590,195 L 590,235 L 500,235 L 500,200 L 550,105 L 500,105 Z" fill="url(#metalGreen)" />
    <!-- Point drop from N -->
    <polygon points="340,230 355,330 350,230" fill="url(#metalGreen)" />
  </g>

  <!-- PEST CONTROL -->
  <g transform="translate(320, 520)">
    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="54" font-weight="bold" fill="#FFFFFF" letter-spacing="16">PEST</text>
    <text x="220" y="0" font-family="'Times New Roman', serif" font-size="54" font-weight="bold" fill="#FFFFFF" letter-spacing="16">C</text>
    <circle cx="295" cy="-18" r="22" stroke="#FFFFFF" stroke-width="3" fill="none" />
    <circle cx="295" cy="-18" r="7" fill="#FFFFFF" />
    <line x1="285" y1="-18" x2="305" y2="-18" stroke="#FFFFFF" stroke-width="2" />
    <text x="330" y="0" font-family="'Times New Roman', serif" font-size="54" font-weight="bold" fill="#FFFFFF" letter-spacing="16">NTROL</text>
  </g>
</svg>'''

with open('public/LOGO1236748.svg', 'w') as f:
    f.write(svg_logo)

# 3. dfsmnfkjshfiushdf.svg (Verified Pricing Sheet)
svg_pricing = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200" style="background:#000000">
  <defs>
    <filter id="glowGreen">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="1200" fill="#000000" />
  
  <!-- Mini Logo Header -->
  <g transform="translate(160, 40) scale(0.65)">
    <path d="M 60,30 Q 30,120 10,240 Q 40,290 80,330 Q 45,260 40,190 Q 75,100 60,30 Z" fill="#00FF4C" />
    <path d="M 110,60 Q 70,160 50,320 Q 90,360 140,400 Q 90,330 85,240 Q 120,150 110,60 Z" fill="#00FF4C" />
    <polygon points="180,240 280,240 250,340 210,400 180,310" fill="#00FF4C" />
    <g transform="translate(300, 160)">
      <text x="0" y="0" font-family="'Arial Black', sans-serif" font-size="70" font-weight="bold" fill="#00FF4C">VENEZ</text>
      <text x="20" y="60" font-family="'Times New Roman', serif" font-size="34" font-weight="bold" fill="#FFFFFF" letter-spacing="6">PEST CONTROL</text>
    </g>
  </g>

  <!-- Items list -->
  <!-- 1. Bimonthly -->
  <g transform="translate(60, 320)">
    <polygon points="10,40 30,65 75,15 65,5 30,45 20,30" fill="#00FF4C" filter="url(#glowGreen)" />
    <text x="90" y="30" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">BIMONTHLY</text>
    <text x="90" y="70" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">PEST CONTROL</text>
    <text x="510" y="65" font-family="'Arial Black', sans-serif" font-size="64" font-weight="bold" fill="#00FF4C" filter="url(#glowGreen)">$120</text>
    <line x1="10" y1="105" x2="680" y2="105" stroke="#1F3D2B" stroke-width="2" />
  </g>

  <!-- 2. Quarterly -->
  <g transform="translate(60, 470)">
    <polygon points="10,40 30,65 75,15 65,5 30,45 20,30" fill="#00FF4C" filter="url(#glowGreen)" />
    <text x="90" y="30" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">QUARTERLY</text>
    <text x="90" y="70" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">PEST CONTROL</text>
    <text x="510" y="65" font-family="'Arial Black', sans-serif" font-size="64" font-weight="bold" fill="#00FF4C" filter="url(#glowGreen)">$190</text>
    <line x1="10" y1="105" x2="680" y2="105" stroke="#1F3D2B" stroke-width="2" />
  </g>

  <!-- 3. Annual -->
  <g transform="translate(60, 620)">
    <polygon points="10,40 30,65 75,15 65,5 30,45 20,30" fill="#00FF4C" filter="url(#glowGreen)" />
    <text x="90" y="30" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">ANNUAL</text>
    <text x="90" y="70" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">PEST CONTROL</text>
    <text x="490" y="65" font-family="'Arial Black', sans-serif" font-size="64" font-weight="bold" fill="#00FF4C" filter="url(#glowGreen)">$400</text>
    <line x1="10" y1="105" x2="680" y2="105" stroke="#1F3D2B" stroke-width="2" />
  </g>

  <!-- 4. Rodent -->
  <g transform="translate(60, 770)">
    <polygon points="10,40 30,65 75,15 65,5 30,45 20,30" fill="#00FF4C" filter="url(#glowGreen)" />
    <text x="90" y="30" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">RODENT</text>
    <text x="90" y="70" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#FFFFFF">PREVENTION</text>
    <text x="490" y="65" font-family="'Arial Black', sans-serif" font-size="64" font-weight="bold" fill="#00FF4C" filter="url(#glowGreen)">$400</text>
    <line x1="10" y1="105" x2="680" y2="105" stroke="#1F3D2B" stroke-width="2" />
  </g>

  <!-- 5. Termites -->
  <g transform="translate(60, 930)">
    <polygon points="10,40 30,65 75,15 65,5 30,45 20,30" fill="#00FF4C" filter="url(#glowGreen)" />
    <text x="90" y="45" font-family="'Arial Black', sans-serif" font-size="36" font-weight="bold" fill="#FFFFFF">TERMITES</text>
    <text x="440" y="55" font-family="'Arial Black', sans-serif" font-size="64" font-weight="bold" fill="#00FF4C" filter="url(#glowGreen)">$1000+</text>
  </g>
</svg>'''

with open('public/dfsmnfkjshfiushdf.svg', 'w') as f:
    f.write(svg_pricing)

# 4. asdsadqewrwfdsafdsf.svg ($120 Special Promotion Card)
svg_promo = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200" style="background:#000000">
  <defs>
    <filter id="neonGlow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="800" height="1200" fill="#000000" />
  
  <!-- Logo Header -->
  <g transform="translate(180, 50) scale(0.7)">
    <path d="M 60,30 Q 30,120 10,240 Q 40,290 80,330 Q 45,260 40,190 Q 75,100 60,30 Z" fill="#00FF4C" />
    <path d="M 110,60 Q 70,160 50,320 Q 90,360 140,400 Q 90,330 85,240 Q 120,150 110,60 Z" fill="#00FF4C" />
    <polygon points="180,240 280,240 250,340 210,400 180,310" fill="#00FF4C" />
    <g transform="translate(300, 160)">
      <text x="0" y="0" font-family="'Arial Black', sans-serif" font-size="70" font-weight="bold" fill="#00FF4C">VENEZ</text>
      <text x="20" y="60" font-family="'Times New Roman', serif" font-size="34" font-weight="bold" fill="#FFFFFF" letter-spacing="6">PEST CONTROL</text>
    </g>
  </g>

  <!-- Big $120 Price -->
  <text x="400" y="550" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="220" font-weight="900" fill="#00FF4C" filter="url(#neonGlow)">$120</text>
  
  <!-- Service Callout -->
  <text x="400" y="730" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="52" font-weight="bold" fill="#FFFFFF" letter-spacing="2">INDOOR/OUTDOOR</text>
  <text x="400" y="810" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="52" font-weight="bold" fill="#FFFFFF" letter-spacing="2">PEST CONTROL</text>
  <text x="400" y="930" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="88" font-weight="900" fill="#FFFFFF" letter-spacing="6">SERVICE</text>
  
  <!-- Website URL footer -->
  <text x="400" y="1120" text-anchor="middle" font-family="'Arial', sans-serif" font-size="34" font-weight="bold" fill="#00FF4C" letter-spacing="1">www.venezpestcontrol.com</text>
</svg>'''

with open('public/asdsadqewrwfdsafdsf.svg', 'w') as f:
    f.write(svg_promo)

# 5. brwegrew uiewyrwrb.svg (Services & Technician Card)
svg_tech = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" style="background:#F2F4F3">
  <!-- Left White/Neutral Column -->
  <rect x="0" y="0" width="600" height="1000" fill="#F4F5F4" />
  
  <!-- Headings -->
  <text x="50" y="80" font-family="'Arial Black', sans-serif" font-size="44" font-weight="bold" fill="#111111">Pest Control</text>
  <text x="50" y="140" font-family="'Arial Black', sans-serif" font-size="44" font-weight="bold" fill="#111111">Services</text>
  <text x="50" y="195" font-family="'Arial', sans-serif" font-size="28" font-weight="600" fill="#2D6A4F">Control de plagas</text>

  <!-- Service List -->
  <g transform="translate(50, 260)" font-family="'Arial', sans-serif" font-size="28" font-weight="bold" fill="#111111">
    <circle cx="10" cy="-8" r="5" fill="#111" />
    <text x="30" y="0">Regular pest control</text>

    <circle cx="10" cy="52" r="5" fill="#111" />
    <text x="30" y="60">Bed bugs extermination</text>

    <circle cx="10" cy="112" r="5" fill="#111" />
    <text x="30" y="120">Termites extermination</text>

    <circle cx="10" cy="172" r="5" fill="#111" />
    <text x="30" y="180">Yard pest control</text>

    <circle cx="10" cy="232" r="5" fill="#111" />
    <text x="30" y="240">Mosquitoes control</text>

    <circle cx="10" cy="292" r="5" fill="#111" />
    <text x="30" y="300">Rodents control</text>

    <circle cx="10" cy="352" r="5" fill="#111" />
    <text x="30" y="360">Animal control</text>
    <text x="30" y="405" font-size="24" font-weight="normal" fill="#222">Snakes - Opossums - Raccoons</text>
  </g>

  <!-- Book Now Button -->
  <g transform="translate(50, 750)">
    <rect x="0" y="0" width="220" height="58" rx="29" fill="#000000" stroke="#00FF4C" stroke-width="2" />
    <text x="110" y="38" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="24" fill="#00FF4C">Book now</text>
  </g>

  <!-- John Rincon & Phone -->
  <text x="50" y="865" font-family="'Arial Black', sans-serif" font-size="34" font-weight="bold" fill="#111111">John Rincon</text>
  <text x="50" y="920" font-family="'Arial Black', sans-serif" font-size="32" font-weight="bold" fill="#111111">+1 (713) 298-4210</text>

  <!-- Right Black Column with Photos & Logo -->
  <rect x="600" y="0" width="400" height="1000" fill="#050505" />
  
  <!-- Mini Logo top right -->
  <g transform="translate(620, 20) scale(0.45)">
    <path d="M 60,30 Q 30,120 10,240 Q 40,290 80,330 Z" fill="#00FF4C" />
    <path d="M 110,60 Q 70,160 50,320 Q 90,360 140,400 Z" fill="#00FF4C" />
    <text x="170" y="160" font-family="'Arial Black', sans-serif" font-size="70" font-weight="bold" fill="#00FF4C">VENEZ</text>
    <text x="180" y="210" font-family="'Times New Roman', serif" font-size="30" font-weight="bold" fill="#FFF" letter-spacing="4">PEST CONTROL</text>
  </g>

  <!-- Field Photo 1: Outdoor spraying -->
  <g transform="translate(600, 240)">
    <rect x="0" y="0" width="400" height="360" fill="#1C382A" />
    <!-- House Brick wall & lawn -->
    <rect x="0" y="0" width="400" height="260" fill="#8D5B4C" opacity="0.6" />
    <rect x="0" y="260" width="400" height="100" fill="#387038" />
    <!-- Technician silhouette with sprayer -->
    <circle cx="280" cy="110" r="28" fill="#FFFFFF" />
    <rect x="250" y="140" width="60" height="110" rx="10" fill="#FFFFFF" />
    <rect x="260" y="250" width="22" height="90" fill="#B3A286" />
    <rect x="290" y="250" width="22" height="90" fill="#B3A286" />
    <line x1="260" y1="180" x2="160" y2="280" stroke="#00FF4C" stroke-width="6" />
    <circle cx="150" cy="290" r="15" fill="#00FF4C" opacity="0.4" />
    <text x="20" y="340" font-family="'Arial', sans-serif" font-size="16" font-weight="bold" fill="#FFF">Exterior Perimeter Treatment</text>
  </g>

  <!-- Field Photo 2: Indoor baseboard spraying -->
  <g transform="translate(600, 620)">
    <rect x="0" y="0" width="400" height="380" fill="#20232A" />
    <!-- Tile floor pattern -->
    <rect x="0" y="240" width="400" height="140" fill="#303540" />
    <line x1="0" y1="240" x2="400" y2="240" stroke="#FFF" stroke-width="4" />
    <!-- Technician kneeling -->
    <circle cx="200" cy="120" r="26" fill="#3B82F6" />
    <rect x="180" y="150" width="70" height="90" rx="10" fill="#1E3A8A" />
    <rect x="170" y="240" width="90" height="40" rx="10" fill="#1E3A8A" />
    <line x1="200" y1="180" x2="330" y2="230" stroke="#00FF4C" stroke-width="5" />
    <text x="20" y="350" font-family="'Arial', sans-serif" font-size="16" font-weight="bold" fill="#FFF">Targeted Indoor Baseboard Barrier</text>
  </g>
</svg>'''

with open('public/brwegrew uiewyrwrb.svg', 'w') as f:
    f.write(svg_tech)

# 6. gpt567.svg (Master Banner)
svg_banner = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800" style="background:#081C15">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#05150E" />
      <stop offset="60%" stop-color="#081C15" />
      <stop offset="100%" stop-color="#1B4332" />
    </linearGradient>
    <filter id="bannerGlow">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="800" fill="url(#bgGrad)" />

  <!-- Top Left Brand Badge -->
  <g transform="translate(60, 40)">
    <polygon points="40,10 80,10 95,50 60,95 25,50" fill="none" stroke="#40916C" stroke-width="4" />
    <path d="M 45,45 L 60,65 L 75,35" stroke="#52B788" stroke-width="4" fill="none" />
    <text x="110" y="45" font-family="'Arial Black', sans-serif" font-size="34" font-weight="bold" fill="#FFFFFF">Venez</text>
    <text x="110" y="80" font-family="'Arial Black', sans-serif" font-size="34" font-weight="bold" fill="#FFFFFF">Pest Control</text>
    <text x="112" y="105" font-family="'Arial', sans-serif" font-size="14" font-weight="bold" fill="#52B788" letter-spacing="2">PROTECTING HOMES • PROTECTING FAMILIES</text>
  </g>

  <!-- Top Right Badges -->
  <g transform="translate(900, 40)">
    <text x="0" y="30" font-family="'Arial Black', sans-serif" font-size="20" font-weight="bold" fill="#FFFFFF">SAFE. EFFECTIVE.</text>
    <text x="0" y="60" font-family="'Arial Black', sans-serif" font-size="20" font-weight="bold" fill="#52B788">ECO FRIENDLY.</text>
    <circle cx="210" cy="35" r="30" fill="#1B4332" stroke="#40916C" stroke-width="2" />
    <path d="M 200,45 Q 210,15 225,25 Q 220,50 200,45 Z" fill="#52B788" />
  </g>

  <!-- Main Hero Headline -->
  <g transform="translate(60, 200)">
    <text x="0" y="50" font-family="'Arial Black', sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="1">PROTECTING</text>
    <text x="0" y="125" font-family="'Arial Black', sans-serif" font-size="64" font-weight="900" fill="#52B788" letter-spacing="1">WHAT MATTERS</text>
    <text x="0" y="175" font-family="'Arial', sans-serif" font-size="22" fill="#E2E8F0" max-width="500">Reliable, safe and effective pest control solutions for your <tspan fill="#52B788" font-weight="bold">home</tspan> and <tspan fill="#52B788" font-weight="bold">business</tspan>.</text>
  </g>

  <!-- 4 Pest Circles in the middle -->
  <g transform="translate(620, 160)">
    <!-- Circle 1 Cockroach -->
    <g transform="translate(0, 0)">
      <circle cx="45" cy="45" r="45" fill="#081C15" stroke="#52B788" stroke-width="4" />
      <circle cx="45" cy="45" r="38" fill="#1B4332" />
      <ellipse cx="45" cy="45" rx="14" ry="20" fill="#99582A" />
      <line x1="18" y1="18" x2="72" y2="72" stroke="#EF4444" stroke-width="5" />
    </g>
    <!-- Circle 2 Rodent -->
    <g transform="translate(0, 105)">
      <circle cx="45" cy="45" r="45" fill="#081C15" stroke="#52B788" stroke-width="4" />
      <circle cx="45" cy="45" r="38" fill="#1B4332" />
      <ellipse cx="45" cy="45" rx="18" ry="14" fill="#4B5563" />
      <line x1="18" y1="18" x2="72" y2="72" stroke="#EF4444" stroke-width="5" />
    </g>
    <!-- Circle 3 Ant -->
    <g transform="translate(0, 210)">
      <circle cx="45" cy="45" r="45" fill="#081C15" stroke="#52B788" stroke-width="4" />
      <circle cx="45" cy="45" r="38" fill="#1B4332" />
      <circle cx="45" cy="35" r="8" fill="#1F2937" />
      <circle cx="45" cy="52" r="10" fill="#1F2937" />
      <line x1="18" y1="18" x2="72" y2="72" stroke="#EF4444" stroke-width="5" />
    </g>
    <!-- Circle 4 Termite -->
    <g transform="translate(0, 315)">
      <circle cx="45" cy="45" r="45" fill="#081C15" stroke="#52B788" stroke-width="4" />
      <circle cx="45" cy="45" r="38" fill="#1B4332" />
      <ellipse cx="45" cy="45" rx="10" ry="18" fill="#D97706" />
      <line x1="18" y1="18" x2="72" y2="72" stroke="#EF4444" stroke-width="5" />
    </g>
  </g>

  <!-- Technician with gear on right -->
  <g transform="translate(760, 120)">
    <rect x="0" y="0" width="380" height="480" rx="20" fill="#1B4332" opacity="0.3" />
    <!-- Technician illustration with backpack sprayer and safety mask -->
    <circle cx="190" cy="110" r="44" fill="#F8FAFC" stroke="#52B788" stroke-width="3" />
    <!-- Hat with Venez Logo -->
    <path d="M 140,90 Q 190,60 240,90 Z" fill="#FFFFFF" />
    <text x="190" y="85" text-anchor="middle" font-family="'Arial', sans-serif" font-size="10" font-weight="bold" fill="#15803D">VENEZ</text>
    <!-- Respirator Mask -->
    <rect x="170" y="115" width="40" height="26" rx="8" fill="#52B788" />
    <!-- White Uniform Jacket -->
    <path d="M 120,154 L 260,154 L 270,360 L 110,360 Z" fill="#FFFFFF" />
    <text x="190" y="210" text-anchor="middle" font-family="'Arial', sans-serif" font-size="14" font-weight="bold" fill="#15803D">VENEZ PEST CONTROL</text>
    <!-- Green Gloves & Sprayer Wand -->
    <rect x="130" y="360" width="120" height="90" fill="#1B4332" />
    <line x1="100" y1="280" x2="20" y2="440" stroke="#52B788" stroke-width="7" />
    <circle cx="15" cy="445" r="16" fill="#52B788" opacity="0.5" />
  </g>

  <!-- Bottom Action Bar -->
  <g transform="translate(60, 600)">
    <rect x="0" y="0" width="1080" height="150" rx="16" fill="#05130E" stroke="#2D6A4F" stroke-width="2" />
    
    <!-- Houston Location -->
    <g transform="translate(30, 40)">
      <circle cx="15" cy="15" r="15" fill="#40916C" />
      <text x="40" y="16" font-family="'Arial', sans-serif" font-size="18" font-weight="bold" fill="#FFFFFF">Houston, Texas</text>
      <text x="40" y="44" font-family="'Arial Black', sans-serif" font-size="24" font-weight="bold" fill="#52B788">713-298-4210</text>
    </g>

    <!-- Social Handle -->
    <g transform="translate(340, 42)">
      <rect x="0" y="0" width="34" height="34" rx="8" fill="#E1306C" />
      <text x="45" y="15" font-family="'Arial', sans-serif" font-size="14" fill="#94A3B8">instagram.com/</text>
      <text x="45" y="35" font-family="'Arial', sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">venez_control_plagas/</text>
    </g>

    <!-- CTA Button -->
    <g transform="translate(710, 30)">
      <rect x="0" y="0" width="340" height="68" rx="34" fill="#52B788" />
      <text x="170" y="42" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="17" font-weight="bold" fill="#081C15">GET YOUR FREE INSPECTION TODAY!</text>
    </g>
  </g>
</svg>'''

with open('public/gpt567.svg', 'w') as f:
    f.write(svg_banner)

# Convert all SVGs into the exact target filenames requested
conversions = [
    ('public/bhbhbhbjuu.svg', 'public/bhbhbhbjuu.jpg'),
    ('public/LOGO1236748.svg', 'public/LOGO1236748.jpg'),
    ('public/dfsmnfkjshfiushdf.svg', 'public/dfsmnfkjshfiushdf.jpg'),
    ('public/asdsadqewrwfdsafdsf.svg', 'public/asdsadqewrwfdsafdsf.jpg'),
    ('public/brwegrew uiewyrwrb.svg', 'public/brwegrew uiewyrwrb.jpg'),
    ('public/gpt567.svg', 'public/gpt567.png'),
]

for src, dst in conversions:
    print(f"Converting {src} -> {dst}")
    subprocess.run(['convert', '-density', '150', src, dst], check=True)
    # Also copy to public/assets/
    dst_base = os.path.basename(dst)
    subprocess.run(['cp', dst, f'public/assets/{dst_base}'], check=True)

print("All image assets successfully rendered!")
