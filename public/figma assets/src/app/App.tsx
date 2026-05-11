export default function App() {
  return (
    <div className="size-full bg-[#1a1a2e] flex items-center justify-center p-12">
      <div className="grid grid-cols-2 gap-16 max-w-6xl">

        {/* Pipe Assembly */}
        <div className="flex flex-col items-center gap-6">
          <div className="bg-[#0f1419]/30 p-8 rounded-lg border border-[#2d3748]/30">
            <svg width="450" height="500" viewBox="0 0 450 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="horizontal-pipe">
              <ellipse cx="135" cy="300" rx="135" ry="18" fill="url(#horizontalPipeGradient)"/>
              <ellipse cx="20" cy="300" rx="6" ry="18" fill="url(#pipeEndGradient)"/>
              <ellipse cx="120" cy="285" rx="100" ry="3" fill="#5a6b7d" opacity="0.35"/>
              <ellipse cx="120" cy="315" rx="100" ry="2" fill="#0f1419" opacity="0.4"/>
              <path d="M 30 287 Q 120 285, 220 287" stroke="#4a5568" strokeWidth="1.5" opacity="0.3" fill="none"/>
            </g>

            <g id="coupling">
              <ellipse cx="250" cy="300" rx="35" ry="24" fill="url(#couplingBodyGradient)"/>
              <ellipse cx="235" cy="300" rx="2" ry="20" fill="#2d3748" opacity="0.5"/>
              <ellipse cx="242" cy="300" rx="2" ry="21" fill="#2d3748" opacity="0.5"/>
              <ellipse cx="249" cy="300" rx="2" ry="22" fill="#2d3748" opacity="0.5"/>
              <ellipse cx="256" cy="300" rx="2" ry="21" fill="#2d3748" opacity="0.5"/>
              <ellipse cx="263" cy="300" rx="2" ry="20" fill="#2d3748" opacity="0.5"/>
              <ellipse cx="250" cy="283" rx="28" ry="4" fill="#5a6b7d" opacity="0.4"/>
            </g>

            <g id="hex-nut">
              <path d="M 250 265 L 268 275 L 268 290 L 250 300 L 232 290 L 232 275 Z"
                    fill="url(#hexNutGradient)" stroke="#1e2633" strokeWidth="2"/>
              <path d="M 250 265 L 268 275 L 250 285 L 232 275 Z" fill="#4a5568" opacity="0.5"/>
              <path d="M 232 275 L 232 290 L 250 300 L 250 285 Z" fill="#2d3748" opacity="0.7"/>
              <path d="M 250 285 L 250 300 L 268 290 L 268 275 Z" fill="#3d4d5f" opacity="0.6"/>
              <ellipse cx="250" cy="280" rx="8" ry="5" fill="#0a0f16" opacity="0.9"/>
              <ellipse cx="250" cy="280" rx="6" ry="3.5" fill="#000000" opacity="0.6"/>
              <line x1="250" y1="265" x2="268" y2="275" stroke="#5a6b7d" strokeWidth="1.2" opacity="0.4"/>
              <line x1="232" y1="275" x2="250" y2="265" stroke="#5a6b7d" strokeWidth="1" opacity="0.35"/>
            </g>

            <g id="leak-point">
              <path d="M 246 318 L 248 323 L 250 320 L 252 323 L 254 318"
                    stroke="#1a202c" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <ellipse cx="250" cy="322" rx="12" ry="4" fill="#0369a1" opacity="0.2"/>
              <ellipse cx="250" cy="324" rx="8" ry="2" fill="#0284c7" opacity="0.25"/>
            </g>

            <g id="elbow-pipe">
              <path d="M 285 300 Q 330 300, 330 345 L 330 360"
                    stroke="url(#elbowOuterGradient)" strokeWidth="36" fill="none" strokeLinecap="round"/>
              <path d="M 285 300 Q 318 300, 318 333 L 318 360"
                    stroke="#0a0f16" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.3"/>
              <path d="M 285 292 Q 322 292, 322 337 L 322 360"
                    stroke="#4a5568" strokeWidth="3" fill="none" opacity="0.4"/>
              <path d="M 285 308 Q 322 308, 322 345 L 322 360"
                    stroke="#1a202c" strokeWidth="2" fill="none" opacity="0.35"/>
            </g>

            <g id="vertical-pipe">
              <rect x="312" y="40" width="36" height="320" fill="url(#verticalPipeGradient)" rx="18"/>
              <ellipse cx="330" cy="40" rx="18" ry="6" fill="url(#pipeTopGradient)"/>
              <rect x="314" y="45" width="3" height="310" fill="#5a6b7d" opacity="0.35" rx="1.5"/>
              <rect x="343" y="45" width="3" height="310" fill="#0f1419" opacity="0.4" rx="1.5"/>
              <rect x="328" y="45" width="2" height="310" fill="#4a5568" opacity="0.25" rx="1"/>
            </g>

            <g id="highlights">
              <ellipse cx="330" cy="40" rx="10" ry="3" fill="#5a6b7d" opacity="0.4"/>
            </g>

            <defs>
              <linearGradient id="horizontalPipeGradient" x1="135" y1="282" x2="135" y2="318" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="30%" stopColor="#2d3748"/>
                <stop offset="70%" stopColor="#1e2633"/>
                <stop offset="100%" stopColor="#252f3f"/>
              </linearGradient>
              <linearGradient id="pipeEndGradient" x1="20" y1="282" x2="20" y2="318" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2d3748"/>
                <stop offset="50%" stopColor="#1e2633"/>
                <stop offset="100%" stopColor="#1a202c"/>
              </linearGradient>
              <linearGradient id="verticalPipeGradient" x1="312" y1="200" x2="348" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="30%" stopColor="#2d3748"/>
                <stop offset="70%" stopColor="#1e2633"/>
                <stop offset="100%" stopColor="#252f3f"/>
              </linearGradient>
              <linearGradient id="pipeTopGradient" x1="312" y1="40" x2="348" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2d3748"/>
                <stop offset="50%" stopColor="#3d4d5f"/>
                <stop offset="100%" stopColor="#2d3748"/>
              </linearGradient>
              <linearGradient id="couplingBodyGradient" x1="250" y1="276" x2="250" y2="324" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4a5568"/>
                <stop offset="50%" stopColor="#2d3748"/>
                <stop offset="100%" stopColor="#252f3f"/>
              </linearGradient>
              <linearGradient id="hexNutGradient" x1="232" y1="282.5" x2="268" y2="282.5" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="50%" stopColor="#4a5568"/>
                <stop offset="100%" stopColor="#344252"/>
              </linearGradient>
              <linearGradient id="elbowOuterGradient" x1="285" y1="300" x2="330" y2="360" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="50%" stopColor="#2d3748"/>
                <stop offset="100%" stopColor="#1e2633"/>
              </linearGradient>
            </defs>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-[#a0aec0] tracking-wider font-medium text-sm">PIPE ASSEMBLY</span>
            <div className="text-[#5a6b7d] text-xs mt-1">pipe-assembly.svg</div>
          </div>
        </div>

        {/* Wrench */}
        <div className="flex flex-col items-center gap-6">
          <div className="bg-[#0f1419]/30 p-8 rounded-lg border border-[#2d3748]/30">
            <svg width="350" height="220" viewBox="0 0 350 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="wrench" transform="rotate(-35 175 110)">
              <g id="handle">
                <path d="M 270 105 L 265 115 L 120 115 L 118 105 L 120 95 L 265 95 Z"
                      fill="url(#handleGradient)"/>
                <path d="M 265 95 L 120 95 L 118 97 L 263 97 Z" fill="#4a5568" opacity="0.45"/>
                <path d="M 265 115 L 120 115 L 122 113 L 263 113 Z" fill="#1a202c" opacity="0.5"/>
                <ellipse cx="267.5" cy="105" rx="8" ry="13" fill="url(#handleEndGradient)"/>
                <ellipse cx="267" cy="105" rx="5" ry="9" fill="#1e2633" opacity="0.3"/>
                <line x1="145" y1="95" x2="147" y2="115" stroke="#2d3748" strokeWidth="1.5" opacity="0.5"/>
                <line x1="165" y1="95" x2="167" y2="115" stroke="#2d3748" strokeWidth="1.5" opacity="0.5"/>
                <line x1="185" y1="95" x2="187" y2="115" stroke="#2d3748" strokeWidth="1.5" opacity="0.5"/>
                <line x1="205" y1="95" x2="207" y2="115" stroke="#2d3748" strokeWidth="1.5" opacity="0.5"/>
                <line x1="225" y1="95" x2="227" y2="115" stroke="#2d3748" strokeWidth="1.5" opacity="0.5"/>
                <line x1="245" y1="95" x2="247" y2="115" stroke="#2d3748" strokeWidth="1.5" opacity="0.5"/>
                <line x1="265" y1="105" x2="120" y2="105" stroke="#5a6b7d" strokeWidth="1" opacity="0.3"/>
              </g>

              <g id="head">
                <path d="M 118 95 L 105 92 L 102 95 L 105 105 L 105 115 L 102 118 L 105 121 L 118 118 L 120 115 L 120 95 Z"
                      fill="url(#neckGradient)"/>
                <path d="M 102 95 L 80 88 L 55 88 L 45 93 L 42 100 L 45 105 L 55 108 L 102 108 Z"
                      fill="url(#jawGradient)"/>
                <path d="M 102 115 L 80 122 L 55 122 L 45 117 L 42 110 L 45 105 L 55 102 L 102 102 Z"
                      fill="url(#jawGradient)"/>
                <path d="M 102 95 L 80 88 L 78 89.5 L 100 96.5 Z" fill="#4a5568" opacity="0.55"/>
                <path d="M 102 115 L 80 122 L 82 120.5 L 104 113.5 Z" fill="#1a202c" opacity="0.55"/>
                <ellipse cx="43" cy="105" rx="7" ry="13" fill="#0a0f16" opacity="0.95"/>
                <ellipse cx="42" cy="105" rx="5" ry="10" fill="#000000" opacity="0.7"/>
                <path d="M 55 108 L 45 105 L 45 102 L 55 102 Z" fill="#1e2633" opacity="0.6"/>
                <line x1="80" y1="88" x2="82" y2="90" stroke="#5a6b7d" strokeWidth="1.5" opacity="0.4"/>
                <line x1="80" y1="122" x2="82" y2="120" stroke="#1a202c" strokeWidth="1.5" opacity="0.45"/>
                <path d="M 45 93 L 42 100 L 40 105 L 42 110 L 45 117"
                      stroke="#2d3748" strokeWidth="1.5" fill="none" opacity="0.5"/>
              </g>

              <g id="highlights">
                <line x1="263" y1="96" x2="120" y2="96" stroke="#5a6b7d" strokeWidth="1.5" opacity="0.4"/>
                <line x1="102" y1="96" x2="78" y2="89" stroke="#5a6b7d" strokeWidth="1.2" opacity="0.35"/>
                <line x1="118" y1="97" x2="105" y2="95" stroke="#4a5568" strokeWidth="1" opacity="0.35"/>
              </g>
            </g>

            <defs>
              <linearGradient id="handleGradient" x1="195" y1="95" x2="195" y2="115" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="40%" stopColor="#2d3748"/>
                <stop offset="100%" stopColor="#252f3f"/>
              </linearGradient>
              <linearGradient id="handleEndGradient" x1="260" y1="105" x2="275" y2="105" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2d3748"/>
                <stop offset="50%" stopColor="#3d4d5f"/>
                <stop offset="100%" stopColor="#2d3748"/>
              </linearGradient>
              <linearGradient id="neckGradient" x1="102" y1="105" x2="120" y2="105" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="50%" stopColor="#344252"/>
                <stop offset="100%" stopColor="#2d3748"/>
              </linearGradient>
              <linearGradient id="jawGradient" x1="42" y1="105" x2="102" y2="105" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f"/>
                <stop offset="30%" stopColor="#4a5568"/>
                <stop offset="70%" stopColor="#2d3748"/>
                <stop offset="100%" stopColor="#344252"/>
              </linearGradient>
            </defs>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-[#a0aec0] tracking-wider font-medium text-sm">WRENCH</span>
            <div className="text-[#5a6b7d] text-xs mt-1">wrench.svg</div>
          </div>
        </div>

        {/* Droplet */}
        <div className="flex flex-col items-center gap-6">
          <div className="bg-[#0f1419]/30 p-8 rounded-lg border border-[#2d3748]/30 flex items-center justify-center min-h-[200px]">
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 30 5 C 20 15, 15 25, 15 35 C 15 50, 21.5 62, 30 62 C 38.5 62, 45 50, 45 35 C 45 25, 40 15, 30 5 Z"
                    fill="url(#dropletGradient)"/>
              <ellipse cx="26" cy="25" rx="6" ry="9" fill="white" opacity="0.25"/>
              <ellipse cx="25" cy="22" rx="2.5" ry="4" fill="white" opacity="0.4"/>
              <path d="M 30 5 C 33.5 11, 39 20, 42.5 30 C 44 37, 45 35, 45 35 C 45 25, 40 15, 30 5 Z"
                    fill="#001f3f" opacity="0.15"/>
              <defs>
                <linearGradient id="dropletGradient" x1="30" y1="5" x2="30" y2="62" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0ea5e9"/>
                  <stop offset="50%" stopColor="#0284c7"/>
                  <stop offset="100%" stopColor="#0369a1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-[#a0aec0] tracking-wider font-medium text-sm">DROPLET</span>
            <div className="text-[#5a6b7d] text-xs mt-1">droplet.svg</div>
          </div>
        </div>

        {/* Motion Streaks */}
        <div className="flex flex-col items-center gap-6">
          <div className="bg-[#0f1419]/30 p-8 rounded-lg border border-[#2d3748]/30 flex items-center justify-center min-h-[200px]">
            <svg width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="10" x2="15" y2="50" stroke="url(#streakGradient1)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="35" y1="5" x2="30" y2="55" stroke="url(#streakGradient2)" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="50" y1="8" x2="45" y2="52" stroke="url(#streakGradient3)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="65" y1="12" x2="60" y2="58" stroke="url(#streakGradient4)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="25" y1="65" x2="22" y2="85" stroke="url(#streakGradient5)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="55" y1="68" x2="52" y2="88" stroke="url(#streakGradient6)" strokeWidth="1.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="streakGradient1" x1="20" y1="10" x2="15" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#bfdbfe" opacity="0.2"/>
                  <stop offset="100%" stopColor="#0ea5e9" opacity="0.6"/>
                </linearGradient>
                <linearGradient id="streakGradient2" x1="35" y1="5" x2="30" y2="55" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f0f9ff" opacity="0.3"/>
                  <stop offset="100%" stopColor="#0284c7" opacity="0.7"/>
                </linearGradient>
                <linearGradient id="streakGradient3" x1="50" y1="8" x2="45" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#bfdbfe" opacity="0.25"/>
                  <stop offset="100%" stopColor="#0ea5e9" opacity="0.65"/>
                </linearGradient>
                <linearGradient id="streakGradient4" x1="65" y1="12" x2="60" y2="58" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#dbeafe" opacity="0.2"/>
                  <stop offset="100%" stopColor="#0284c7" opacity="0.5"/>
                </linearGradient>
                <linearGradient id="streakGradient5" x1="25" y1="65" x2="22" y2="85" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#bfdbfe" opacity="0.15"/>
                  <stop offset="100%" stopColor="#0ea5e9" opacity="0.5"/>
                </linearGradient>
                <linearGradient id="streakGradient6" x1="55" y1="68" x2="52" y2="88" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#dbeafe" opacity="0.15"/>
                  <stop offset="100%" stopColor="#0284c7" opacity="0.5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <span className="text-[#a0aec0] tracking-wider font-medium text-sm">MOTION STREAKS</span>
            <div className="text-[#5a6b7d] text-xs mt-1">motion-streaks.svg</div>
          </div>
        </div>

      </div>

      {/* Previous assets - hidden */}
      <div className="hidden grid-cols-2 gap-16 max-w-5xl">

        {/* Asset 1: Pipe */}
        <div className="flex flex-col items-center gap-6">
          <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main pipe body - left section */}
            <rect x="10" y="28" width="110" height="24" fill="url(#pipeGradient1)" />
            <rect x="10" y="28" width="110" height="3" fill="#4a5568" opacity="0.6" />
            <rect x="10" y="49" width="110" height="2" fill="#1a202c" opacity="0.5" />

            {/* Coupler/Joint in center */}
            <rect x="115" y="24" width="50" height="32" fill="url(#couplerGradient)" rx="2" />
            <rect x="115" y="24" width="50" height="4" fill="#5a6b7d" opacity="0.7" />
            <rect x="115" y="52" width="50" height="2" fill="#0f1419" opacity="0.6" />
            <line x1="130" y1="24" x2="130" y2="56" stroke="#2d3748" strokeWidth="1" opacity="0.4" />
            <line x1="150" y1="24" x2="150" y2="56" stroke="#2d3748" strokeWidth="1" opacity="0.4" />

            {/* Main pipe body - right section */}
            <rect x="160" y="28" width="110" height="24" fill="url(#pipeGradient2)" />
            <rect x="160" y="28" width="110" height="3" fill="#4a5568" opacity="0.6" />
            <rect x="160" y="49" width="110" height="2" fill="#1a202c" opacity="0.5" />

            {/* Gradients */}
            <defs>
              <linearGradient id="pipeGradient1" x1="65" y1="28" x2="65" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f" />
                <stop offset="50%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#1e2633" />
              </linearGradient>
              <linearGradient id="pipeGradient2" x1="215" y1="28" x2="215" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f" />
                <stop offset="50%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#1e2633" />
              </linearGradient>
              <linearGradient id="couplerGradient" x1="140" y1="24" x2="140" y2="56" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4a5568" />
                <stop offset="50%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#252f3f" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[#a0aec0] tracking-wider font-medium">PIPE</span>
        </div>

        {/* Asset 2: Wrench */}
        <div className="flex flex-col items-center gap-6">
          <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wrench handle */}
            <path d="M 190 40 L 110 40 L 108 35 L 192 35 Z" fill="url(#wrenchHandleGradient)" />
            <path d="M 190 40 L 110 40 L 112 45 L 192 45 Z" fill="#1e2633" opacity="0.6" />

            {/* Wrench head - open end */}
            <path d="M 100 20 L 108 35 L 108 45 L 100 60 L 85 55 L 85 25 Z" fill="url(#wrenchHeadGradient)" />
            <path d="M 100 20 L 108 35 L 105 35 L 97 22 L 85 25 Z" fill="#4a5568" opacity="0.5" />
            <ellipse cx="92" cy="40" rx="8" ry="12" fill="#1a1a2e" />

            {/* Handle grip detail */}
            <line x1="130" y1="35" x2="130" y2="45" stroke="#1e2633" strokeWidth="1.5" opacity="0.4" />
            <line x1="150" y1="35" x2="150" y2="45" stroke="#1e2633" strokeWidth="1.5" opacity="0.4" />
            <line x1="170" y1="35" x2="170" y2="45" stroke="#1e2633" strokeWidth="1.5" opacity="0.4" />

            <defs>
              <linearGradient id="wrenchHandleGradient" x1="150" y1="35" x2="150" y2="45" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4a5568" />
                <stop offset="50%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#252f3f" />
              </linearGradient>
              <linearGradient id="wrenchHeadGradient" x1="85" y1="40" x2="108" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3d4d5f" />
                <stop offset="50%" stopColor="#2d3748" />
                <stop offset="100%" stopColor="#4a5568" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[#a0aec0] tracking-wider font-medium">WRENCH</span>
        </div>

        {/* Asset 3: Water Droplet */}
        <div className="flex flex-col items-center gap-6">
          <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main droplet shape */}
            <path d="M 140 10 C 125 25, 120 35, 120 45 C 120 58, 129 68, 140 68 C 151 68, 160 58, 160 45 C 160 35, 155 25, 140 10 Z"
                  fill="url(#dropletGradient)" />

            {/* Subtle highlight */}
            <ellipse cx="135" cy="35" rx="8" ry="12" fill="white" opacity="0.25" />
            <ellipse cx="133" cy="30" rx="3" ry="5" fill="white" opacity="0.4" />

            {/* Subtle shadow/depth */}
            <path d="M 140 10 C 145 18, 152 30, 157 42 C 159 50, 160 45, 160 45 C 160 35, 155 25, 140 10 Z"
                  fill="#001f3f" opacity="0.15" />

            <defs>
              <linearGradient id="dropletGradient" x1="140" y1="10" x2="140" y2="68" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[#a0aec0] tracking-wider font-medium">DROPLET</span>
        </div>

        {/* Asset 4: Motion Streaks */}
        <div className="flex flex-col items-center gap-6">
          <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Diagonal motion streaks */}
            <line x1="120" y1="15" x2="115" y2="45" stroke="url(#streakGradient1)" strokeWidth="2" strokeLinecap="round" />
            <line x1="135" y1="10" x2="130" y2="50" stroke="url(#streakGradient2)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="150" y1="12" x2="145" y2="48" stroke="url(#streakGradient3)" strokeWidth="2" strokeLinecap="round" />
            <line x1="165" y1="18" x2="160" y2="52" stroke="url(#streakGradient4)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Shorter accent streaks */}
            <line x1="125" y1="55" x2="122" y2="70" stroke="url(#streakGradient5)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="155" y1="58" x2="152" y2="72" stroke="url(#streakGradient6)" strokeWidth="1.5" strokeLinecap="round" />

            <defs>
              <linearGradient id="streakGradient1" x1="120" y1="15" x2="115" y2="45" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#bfdbfe" opacity="0.2" />
                <stop offset="100%" stopColor="#0ea5e9" opacity="0.6" />
              </linearGradient>
              <linearGradient id="streakGradient2" x1="135" y1="10" x2="130" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f0f9ff" opacity="0.3" />
                <stop offset="100%" stopColor="#0284c7" opacity="0.7" />
              </linearGradient>
              <linearGradient id="streakGradient3" x1="150" y1="12" x2="145" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#bfdbfe" opacity="0.25" />
                <stop offset="100%" stopColor="#0ea5e9" opacity="0.65" />
              </linearGradient>
              <linearGradient id="streakGradient4" x1="165" y1="18" x2="160" y2="52" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#dbeafe" opacity="0.2" />
                <stop offset="100%" stopColor="#0284c7" opacity="0.5" />
              </linearGradient>
              <linearGradient id="streakGradient5" x1="125" y1="55" x2="122" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#bfdbfe" opacity="0.15" />
                <stop offset="100%" stopColor="#0ea5e9" opacity="0.5" />
              </linearGradient>
              <linearGradient id="streakGradient6" x1="155" y1="58" x2="152" y2="72" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#dbeafe" opacity="0.15" />
                <stop offset="100%" stopColor="#0284c7" opacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[#a0aec0] tracking-wider font-medium">MOTION STREAKS</span>
        </div>

      </div>
    </div>
  );
}