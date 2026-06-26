import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  VscFiles, 
  VscSearch, 
  VscSourceControl, 
  VscExtensions, 
  VscSettingsGear, 
  VscChevronDown, 
  VscChevronRight, 
  VscClose, 
  VscTerminal,
  VscSignOut,
  VscInfo,
  VscFolder,
  VscFolderOpened,
  VscFileCode,
  VscMarkdown,
  VscJson,
  VscGear
} from 'react-icons/vsc';
import { FaPlay, FaRegFileCode } from 'react-icons/fa';

// File contents data
const files = {
  'README.md': `# Prashant Kumar Sinha - Full Stack Developer Portfolio

Welcome to my interactive developer workspace! 

This is a high-fidelity simulator of VS Code.
You can explore my background, projects, and skills through these files.

## How to use:
1. Click on any file in the sidebar explorer (e.g., \`About.md\`, \`Projects.json\`, \`Skills.js\`).
2. Interact with the bash terminal below. Try typing \`help\` or \`ls\`!
3. Click the exit/sign-out icon in the left activity bar or type \`exit\` to return to the web portfolio.

Enjoy exploring! 💻✨
`,

  'About.md': `# Career Objective

Passionate Computer Science student with hands-on experience in building web applications using the MERN stack. Looking for an opportunity to utilize my technical skills and learn from industry professionals while contributing to organizational success.

## Core Info
- **Name**: Prashant Kumar Sinha
- **Role**: Full Stack MERN Developer & Computer Science Student
- **Location**: Ward No. 07, Chakla Waini, Samastipur, Bihar
- **University**: GIFT Autonomous College, Bhubaneswar (BPUT)
- **Email**: prashant2023@gift.edu.in
- **Phone**: +91 8252018124
`,

  'Skills.js': `// Technical Skills Catalog

const skills = {
  programmingLanguages: ['Java', 'Python', 'JavaScript'],
  frontendDevelopment: {
    frameworks: ['React.js', 'Bootstrap'],
    core: ['HTML5', 'CSS3']
  },
  backendDevelopment: {
    runtime: 'Node.js',
    framework: 'Express.js'
  },
  databaseManagement: ['MongoDB', 'SQL'],
  toolsAndVersionControl: ['Git', 'GitHub', 'VS Code', 'MS Office'],
  coreCSConcepts: [
    'REST API',
    'JWT Authentication',
    'Data Structures & Algorithms'
  ]
};

export default skills;
`,

  'Projects.json': `[
  {
    "title": "SMART ALUMNI PLATFORM",
    "category": "Full Stack Web Application",
    "description": "Built a full-stack platform that connects students with alumni for career guidance using role-based dashboards and secure access control.",
    "tech": ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.io", "Naive Bayes"],
    "features": [
      "Role-based dashboards for Admin, Alumni, and Student",
      "CV Analyzer and skill improvement suggestions",
      "Career roadmap generator",
      "Real-time chat system",
      "Razorpay payment gateway",
      "Recharge wallet system"
    ]
  },
  {
    "title": "GROCERY WEBSITE",
    "category": "Internship Project • Glucian India Pvt. Ltd.",
    "description": "Completed a MERN-stack internship project to build a responsive grocery website with seller and admin modules.",
    "tech": ["ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Reactstrap", "Bootstrap"],
    "features": [
      "Seller panel and admin panel",
      "Add and remove items",
      "User interface for browsing products",
      "Order placement flow",
      "Responsive design"
    ]
  }
]
`,

  'Education.yml': `# Education History

- Degree: Bachelor of Technology
  Major: Computer Science & Engineering
  Institution: GIFT Autonomous College, Bhubaneswar
  Details: Affiliated to Biju Patnaik University of Technology (BPUT)
  Period: 2023 - Present
  Score: CGPA 8.23

- Degree: Intermediate
  Major: Science Stream (PCM)
  Institution: DAV Public School, Jamshedpur
  Details: CBSE Board
  Period: 2021 - 2023

- Degree: Matriculation
  Major: General Studies
  Institution: DAV Public School, Jamshedpur
  Details: CBSE Board
  Period: 2019 - 2021
`,

  'Internship.md': `# Professional Internship

## Glucian India Pvt. Ltd.
**Role:** MERN Stack Intern  
**Duration:** 26 May 2025 – 10 July 2025 (46 Days)  

### Key Contributions:
- Built a responsive grocery website using **ReactJS, NodeJS, ExpressJS, and MongoDB**.
- Developed seller and admin panels for product and order management.
- Implemented item add/remove flows and order placement features.
- Created a modern UI using **Bootstrap** and **Reactstrap**.
`,

  'Certifications.json': `[
  {
    "title": "Fundamentals of Data Analytics",
    "authority": "Infosys Springboard",
    "type": "Certification",
    "status": "Completed",
    "description": "Completed a certification focused on the fundamentals of data analytics and analytical thinking."
  },
  {
    "title": "Introduction to Internet of Things",
    "authority": "NPTEL • IIT Kharagpur",
    "type": "Course Certificate",
    "status": "Elite",
    "description": "Cleared the course with 68% and gained strong exposure to IoT concepts and applications."
  },
  {
    "title": "Computer Networks and Internet Protocols",
    "authority": "NPTEL • IIT Kharagpur",
    "type": "Course Certificate",
    "status": "Completed",
    "description": "Developed a stronger foundation in networking concepts, protocols, and internet architecture."
  }
]
`,

  'contact.sh': `#!/bin/bash

# Contact Information
echo "----------------------------------------"
echo "Developer: Prashant Kumar Sinha"
echo "Role: Full Stack MERN Developer"
echo "Email: prashant2023@gift.edu.in"
echo "Phone: +91 8252018124"
echo "Location: Ward No. 07, Chakla Waini, Samastipur, Bihar"
echo "GitHub: github.com/SinhaJi1902"
echo "LinkedIn: linkedin.com/in/prashant-kumar-sinha-190672234"
echo "----------------------------------------"
`
};

export default function VSCodeView({ onViewModeChange }) {
  const [activeTab, setActiveTab] = useState('README.md');
  const [openTabs, setOpenTabs] = useState(['README.md', 'About.md', 'Projects.json']);
  const [sidebarActive, setSidebarActive] = useState('explorer'); // 'explorer' | 'search' | 'git' | 'extensions' | 'settings'
  const [explorerCollapsed, setExplorerCollapsed] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to Prashant\'s Portfolio CLI! Type "help" to see list of commands.' },
    { type: 'output', text: '' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [gitCommitMsg, setGitCommitMsg] = useState('');
  const [gitStatus, setGitStatus] = useState('modified'); // 'modified' | 'clean'
  const [searchQuery, setSearchQuery] = useState('');

  const terminalEndRef = useRef(null);
  const terminalInputRef = useRef(null);

  // Auto scroll terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  // Focus terminal input on click
  const focusTerminal = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  };

  // Get file icons
  const getFileIcon = (filename) => {
    if (filename.endsWith('.md')) return <VscMarkdown className="text-blue-400" />;
    if (filename.endsWith('.json')) return <VscJson className="text-yellow-500" />;
    if (filename.endsWith('.js')) return <VscFileCode className="text-yellow-400" />;
    if (filename.endsWith('.sh')) return <VscGear className="text-emerald-400" />;
    return <FaRegFileCode className="text-gray-400" />;
  };

  // Custom regex syntax highlighting
  const highlightCode = (content, filename) => {
    if (!content) return '';
    const safeContent = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (filename.endsWith('.json')) {
      // Highlight keys, strings, numbers, brackets
      return safeContent
        .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")/g, '<span class="text-green-400">$1</span>') // strings
        .replace(/(:\s*)(\d+)/g, '$1<span class="text-blue-400">$2</span>') // numbers
        .replace(/(:\s*)(true|false|null)/g, '$1<span class="text-purple-400 font-bold">$2</span>') // boolean/null
        .replace(/(^|\n)(\s*)("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")(\s*:)/g, '$1$2<span class="text-cyan-400">$3</span>$5'); // keys
    }

    if (filename.endsWith('.js')) {
      return safeContent
        .replace(/\b(const|let|var|function|return|export|default|import|from)\b/g, '<span class="text-blue-400 font-medium">$1</span>')
        .replace(/\b(skills|programmingLanguages|frontendDevelopment|backendDevelopment|databaseManagement|toolsAndVersionControl|coreCSConcepts|frameworks|core|runtime|framework)\b/g, '<span class="text-purple-300">$1</span>')
        .replace(/('(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\'])*'|"(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")/g, '<span class="text-green-400">$1</span>')
        .replace(/(\/\/.*)/g, '<span class="text-gray-500 italic">$1</span>');
    }

    if (filename.endsWith('.md')) {
      return safeContent
        .replace(/^(#\s+.*)$/gm, '<span class="text-blue-300 font-bold text-lg">$1</span>')
        .replace(/^(##\s+.*)$/gm, '<span class="text-purple-400 font-semibold text-base">$1</span>')
        .replace(/^(###\s+.*)$/gm, '<span class="text-cyan-400 font-medium">$1</span>')
        .replace(/(\*\*([^*]+)\*\*)/g, '<span class="text-orange-400 font-semibold">$2</span>')
        .replace(/(`([^`]+)`)/g, '<span class="px-1.5 py-0.5 bg-white/5 rounded border border-white/5 text-purple-300">$2</span>')
        .replace(/^(- .*)/gm, '<span class="text-gray-300">$1</span>');
    }

    if (filename.endsWith('.sh')) {
      return safeContent
        .replace(/(^#.*)/gm, '<span class="text-gray-500 italic">$1</span>')
        .replace(/\b(echo|cat|exit|ls|help|run|gui|clear)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")/g, '<span class="text-green-400">$1</span>');
    }

    return safeContent;
  };

  // Open file helper
  const openFile = (filename) => {
    if (!openTabs.includes(filename)) {
      setOpenTabs([...openTabs, filename]);
    }
    setActiveTab(filename);
  };

  // Close file helper
  const closeFile = (e, filename) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(t => t !== filename);
    setOpenTabs(newTabs);
    if (activeTab === filename && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  // Terminal commands interpreter
  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    let responses = [];

    switch (command) {
      case 'help':
        responses = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output', text: '  ls                 - Lists all files in the workspace' },
          { type: 'output', text: '  cat <filename>     - Displays the content of a file' },
          { type: 'output', text: '  about              - Shows quick about me details' },
          { type: 'output', text: '  projects           - Summarizes featured projects' },
          { type: 'output', text: '  skills             - Displays interactive skills inventory' },
          { type: 'output', text: '  contact            - Outputs email, social, phone channels' },
          { type: 'output', text: '  clear              - Clears the terminal screen' },
          { type: 'output', text: '  exit / gui         - Returns back to standard beautiful portfolio' },
          { type: 'output', text: '  npm run dev        - Boots up local dev server to launch GUI' }
        ];
        break;
      case 'ls':
        responses = [
          { type: 'output', text: 'Directory: PRASHANT_KUMAR_SINHA_PORTFOLIO' },
          { type: 'output', text: '  README.md       About.md        Skills.js' },
          { type: 'output', text: '  Projects.json   Education.yml   Internship.md' },
          { type: 'output', text: '  Certifications.json             contact.sh' }
        ];
        break;
      case 'cat':
        if (!arg) {
          responses = [{ type: 'error', text: 'Error: cat needs an argument. Usage: cat <filename>' }];
        } else {
          // Find matching file
          const keys = Object.keys(files);
          const found = keys.find(k => k.toLowerCase() === arg.toLowerCase());
          if (found) {
            responses = files[found].split('\n').map(line => ({ type: 'output', text: line }));
          } else {
            responses = [{ type: 'error', text: `Error: File '${arg}' not found.` }];
          }
        }
        break;
      case 'clear':
        setTerminalHistory([]);
        return;
      case 'about':
        responses = [
          { type: 'output', text: 'Prashant Kumar Sinha' },
          { type: 'output', text: '-----------------------' },
          { type: 'output', text: 'Role: Full Stack MERN Developer' },
          { type: 'output', text: 'Institution: GIFT Autonomous, Bhubaneswar (BPUT)' },
          { type: 'output', text: 'Objective: Enthusiastic Computer Science student with hands-on experience in MERN stack coding, database management, and full-stack web development.' }
        ];
        break;
      case 'projects':
        responses = [
          { type: 'output', text: '★ Featured Projects ★' },
          { type: 'output', text: '1. Smart Alumni Platform (Full Stack AI Web App)' },
          { type: 'output', text: '   - Built with React, Node, Express, MongoDB, Naive Bayes AI' },
          { type: 'output', text: '   - Key features: Secure multi-role authentication, ATS score predictor, AI recommendation' },
          { type: 'output', text: '2. Full Stack Shopping Website (Glucian India Internship Project)' },
          { type: 'output', text: '   - Built MERN framework inventory management dashboards, secure JWT token session flows.' }
        ];
        break;
      case 'skills':
        responses = [
          { type: 'output', text: '🛠 Skills Inventory 🛠' },
          { type: 'output', text: '• Programming: Java, JavaScript, Python' },
          { type: 'output', text: '• Frontend: HTML, CSS, React.js, Bootstrap' },
          { type: 'output', text: '• Backend: Node.js, Express.js' },
          { type: 'output', text: '• Databases: MongoDB, SQL' },
          { type: 'output', text: '• Utilities: Git, GitHub, VS Code' }
        ];
        break;
      case 'contact':
        responses = [
          { type: 'output', text: '📬 Contact Info 📬' },
          { type: 'output', text: '• Email: prashant2023@gift.edu.in' },
          { type: 'output', text: '• Phone: +91 9304913816' },
          { type: 'output', text: '• Location: Jharkhand, India' },
          { type: 'output', text: '• GitHub: github.com' },
          { type: 'output', text: '• LinkedIn: linkedin.com' }
        ];
        break;
      case 'exit':
      case 'gui':
        responses = [{ type: 'output', text: 'Closing terminal environment. Redirecting...' }];
        setTimeout(() => onViewModeChange('standard'), 800);
        break;
      case 'npm':
        if (arg === 'run dev') {
          responses = [
            { type: 'output', text: '' },
            { type: 'output', text: '> temp-app@0.0.0 dev' },
            { type: 'output', text: '> vite' },
            { type: 'output', text: '' },
            { type: 'output', text: '  VITE v8.1.0  ready in 320 ms' },
            { type: 'output', text: '  ➜  Local:   http://localhost:5173/' },
            { type: 'output', text: '  ➜  press h + enter to show help' },
            { type: 'output', text: '' },
            { type: 'output', text: '[VITE] Toggling system view mode to Graphical Interface...' }
          ];
          setTimeout(() => onViewModeChange('standard'), 1200);
        } else {
          responses = [{ type: 'error', text: 'Unknown npm script. Did you mean "npm run dev"?' }];
        }
        break;
      default:
        responses = [
          { type: 'error', text: `bash: ${command}: command not found` },
          { type: 'output', text: 'Type "help" to see available options.' }
        ];
        break;
    }

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: cmdText },
      ...responses,
      { type: 'output', text: '' } // blank buffer line
    ]);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    executeCommand(terminalInput);
    setTerminalInput('');
  };

  // Mock Git Commit action
  const handleGitCommit = (e) => {
    e.preventDefault();
    if (!gitCommitMsg.trim()) return;
    setGitStatus('clean');
    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: `git commit -m "${gitCommitMsg}"` },
      { type: 'output', text: `[main ${Math.random().toString(36).substring(2, 8)}] ${gitCommitMsg}` },
      { type: 'output', text: ' 2 files changed, 142 insertions(+), 12 deletions(-)' },
      { type: 'output', text: '' }
    ]);
    setGitCommitMsg('');
  };

  // Search filter files
  const filteredFiles = Object.keys(files).filter(filename => {
    if (!searchQuery) return true;
    return filename.toLowerCase().includes(searchQuery.toLowerCase()) || 
           files[filename].toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="fixed inset-0 bg-[#1e1e1e] text-[#d4d4d4] flex flex-col font-mono text-sm z-50 overflow-hidden select-text">
      {/* VS Code Title Bar */}
      <div className="h-9 bg-[#323233] border-b border-[#252526] px-3 flex justify-between items-center text-xs text-[#cccccc] select-none">
        <div className="flex items-center gap-2">
          {/* Mock Window buttons */}
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="font-semibold text-white">Prashant Kumar Sinha Portfolio - Visual Studio Code</span>
        </div>
        <div className="hidden md:flex bg-[#3c3c3c] px-16 py-0.5 rounded text-[#8c8c8c] text-[11px] border border-[#4a4a4a]">
          {activeTab} — PRASHANT_KUMAR_SINHA_PORTFOLIO
        </div>
        <button 
          onClick={() => onViewModeChange('standard')}
          className="px-3 py-1 bg-red-600/80 hover:bg-red-600 text-white rounded font-sans text-xs transition-colors flex items-center gap-1 cursor-pointer"
        >
          <VscSignOut /> Exit IDE
        </button>
      </div>

      {/* VS Code Main Workspace Container */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* 1. Activity Bar (Leftmost Strip) */}
        <div className="w-12 sm:w-14 bg-[#181818] flex flex-col justify-between items-center py-2 border-r border-[#252526] select-none flex-shrink-0">
          <div className="flex flex-col items-center w-full">
            {/* Explorer */}
            <button 
              onClick={() => { setSidebarActive('explorer'); setExplorerCollapsed(false); }}
              className={`w-full py-3 flex justify-center text-2xl relative border-l-2 cursor-pointer transition-colors ${
                sidebarActive === 'explorer' && !explorerCollapsed
                  ? 'text-white border-purple-500 bg-[#2d2d2d]/30' 
                  : 'text-[#858585] hover:text-[#cccccc] border-transparent'
              }`}
              title="Explorer"
            >
              <VscFiles />
            </button>

            {/* Search */}
            <button 
              onClick={() => { setSidebarActive('search'); setExplorerCollapsed(false); }}
              className={`w-full py-3 flex justify-center text-2xl relative border-l-2 cursor-pointer transition-colors ${
                sidebarActive === 'search' && !explorerCollapsed
                  ? 'text-white border-purple-500 bg-[#2d2d2d]/30' 
                  : 'text-[#858585] hover:text-[#cccccc] border-transparent'
              }`}
              title="Search"
            >
              <VscSearch />
            </button>

            {/* Git Source Control */}
            <button 
              onClick={() => { setSidebarActive('git'); setExplorerCollapsed(false); }}
              className={`w-full py-3 flex justify-center text-2xl relative border-l-2 cursor-pointer transition-colors ${
                sidebarActive === 'git' && !explorerCollapsed
                  ? 'text-white border-purple-500 bg-[#2d2d2d]/30' 
                  : 'text-[#858585] hover:text-[#cccccc] border-transparent'
              }`}
              title="Source Control"
            >
              <VscSourceControl />
              {gitStatus === 'modified' && (
                <span className="absolute top-2 right-2 bg-purple-500 text-white rounded-full text-[9px] w-4.5 h-4.5 flex items-center justify-center font-bold">2</span>
              )}
            </button>

            {/* Extensions */}
            <button 
              onClick={() => { setSidebarActive('extensions'); setExplorerCollapsed(false); }}
              className={`w-full py-3 flex justify-center text-2xl relative border-l-2 cursor-pointer transition-colors ${
                sidebarActive === 'extensions' && !explorerCollapsed
                  ? 'text-white border-purple-500 bg-[#2d2d2d]/30' 
                  : 'text-[#858585] hover:text-[#cccccc] border-transparent'
              }`}
              title="Extensions"
            >
              <VscExtensions />
            </button>
          </div>

          <div className="flex flex-col items-center w-full gap-2">
            <button 
              onClick={() => onViewModeChange('standard')}
              className="w-full py-3 flex justify-center text-xl text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
              title="Back to Web GUI"
            >
              <VscSignOut className="transform rotate-180" />
            </button>
            <button 
              onClick={() => { setSidebarActive('settings'); setExplorerCollapsed(false); }}
              className={`w-full py-3 flex justify-center text-xl cursor-pointer transition-colors ${
                sidebarActive === 'settings' && !explorerCollapsed ? 'text-white' : 'text-[#858585] hover:text-[#cccccc]'
              }`}
              title="Settings"
            >
              <VscSettingsGear />
            </button>
          </div>
        </div>

        {/* 2. Sidebar Explorer Panel (Collapsible) */}
        {!explorerCollapsed && (
          <div className="w-56 sm:w-64 bg-[#252526] border-r border-[#1e1e1e] flex flex-col select-none flex-shrink-0">
            {/* Header */}
            <div className="h-10 px-3 flex justify-between items-center text-xs uppercase font-bold text-[#b3b3b3] border-b border-[#1e1e1e]">
              <span>{sidebarActive}</span>
              <button 
                onClick={() => setExplorerCollapsed(true)} 
                className="hover:bg-[#333337] p-1 rounded text-[#858585] hover:text-white cursor-pointer"
              >
                <VscClose />
              </button>
            </div>

            {/* Explorer Content */}
            {sidebarActive === 'explorer' && (
              <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Section workspace */}
                <div className="p-2 flex items-center gap-1 text-[11px] font-bold text-[#b3b3b3]">
                  <VscChevronDown />
                  <span>PRASHANT_KUMAR_SINHA_PORTFOLIO</span>
                </div>

                <div className="pl-4">
                  {/* Folder: src */}
                  <div className="py-1 flex items-center gap-1.5 text-xs text-[#cccccc] hover:bg-[#2d2d2d] px-2 cursor-pointer font-semibold">
                    <VscChevronDown />
                    <VscFolderOpened className="text-yellow-500" />
                    <span>src</span>
                  </div>

                  {/* Folder Contents */}
                  <div className="pl-6 border-l border-[#3e3e3f] ml-2.5 my-1 space-y-0.5">
                    {Object.keys(files).map((filename) => (
                      <button
                        key={filename}
                        onClick={() => openFile(filename)}
                        className={`w-full py-1.5 px-2.5 flex items-center gap-2 text-xs rounded transition-colors text-left cursor-pointer hover:bg-[#2d2d2d] ${
                          activeTab === filename ? 'bg-[#37373d] text-white font-medium' : 'text-[#b3b3b3]'
                        }`}
                      >
                        {getFileIcon(filename)}
                        <span className="truncate">{filename}</span>
                      </button>
                    ))}
                  </div>

                  {/* Env config file */}
                  <div className="py-1 flex items-center gap-1.5 text-xs text-[#b3b3b3] hover:bg-[#2d2d2d] px-2.5 rounded cursor-pointer mt-2">
                    <FaRegFileCode className="text-gray-400" />
                    <span>.env.production</span>
                  </div>
                </div>
              </div>
            )}

            {/* Search Content */}
            {sidebarActive === 'search' && (
              <div className="p-4 flex-1 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Search in workspace..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#3c3c3c] border border-[#4d4d4d] text-white px-2 py-1.5 text-xs rounded focus:outline-none focus:border-purple-500"
                />
                <div className="text-[11px] text-[#8c8c8c] uppercase font-semibold">Search Results</div>
                <div className="flex-1 overflow-y-auto space-y-2">
                  {filteredFiles.map(filename => (
                    <button
                      key={filename}
                      onClick={() => openFile(filename)}
                      className="w-full text-left p-2 rounded hover:bg-[#2d2d2d] border border-white/5"
                    >
                      <div className="text-xs font-semibold text-purple-300 flex items-center gap-1">
                        {getFileIcon(filename)} {filename}
                      </div>
                      <div className="text-[10px] text-gray-500 truncate mt-1">
                        {files[filename].substring(0, 80)}...
                      </div>
                    </button>
                  ))}
                  {filteredFiles.length === 0 && (
                    <span className="text-xs text-[#8c8c8c]">No results found.</span>
                  )}
                </div>
              </div>
            )}

            {/* Git Panel */}
            {sidebarActive === 'git' && (
              <div className="p-4 flex-1 flex flex-col gap-4">
                <div className="text-xs text-[#8c8c8c] flex justify-between">
                  <span>Source Control: Git</span>
                  <span className="font-semibold text-purple-400">main</span>
                </div>
                
                {gitStatus === 'modified' ? (
                  <form onSubmit={handleGitCommit} className="space-y-3">
                    <div className="text-xs text-yellow-500 font-semibold mb-2">Pending Changes:</div>
                    <div className="space-y-1.5 max-h-40 overflow-y-auto pl-1 border-l border-yellow-500/20">
                      <div className="text-xs flex justify-between text-gray-400">
                        <span>src/App.jsx</span>
                        <span className="text-yellow-500 font-mono text-[10px]">M</span>
                      </div>
                      <div className="text-xs flex justify-between text-gray-400">
                        <span>src/components/VSCodeView.jsx</span>
                        <span className="text-green-500 font-mono text-[10px]">U</span>
                      </div>
                    </div>
                    
                    <input
                      type="text"
                      placeholder="Commit message (Ctrl+Enter)"
                      value={gitCommitMsg}
                      onChange={(e) => setGitCommitMsg(e.target.value)}
                      className="w-full bg-[#3c3c3c] border border-[#4d4d4d] text-white px-2 py-1.5 text-xs rounded focus:outline-none focus:border-purple-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs rounded transition-all cursor-pointer text-center"
                    >
                      Commit to main
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8 text-xs text-gray-500">
                    <VscInfo className="text-xl mx-auto mb-2 text-green-500" />
                    No changes detected. Working tree clean!
                  </div>
                )}
              </div>
            )}

            {/* Extensions Panel */}
            {sidebarActive === 'extensions' && (
              <div className="p-3 flex-1 flex flex-col gap-3 overflow-y-auto">
                <div className="text-xs text-[#8c8c8c] uppercase font-bold">Installed Extensions</div>
                
                {/* Ext 1 */}
                <div className="p-2 bg-[#2d2d2d] border border-white/5 rounded flex gap-2.5 items-start">
                  <div className="p-1.5 bg-[#181818] rounded text-lg text-cyan-400">
                    <FaRegFileCode />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">MERN Stack Extension</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Glucian development pack</p>
                    <span className="inline-block text-[9px] bg-green-500/10 text-green-400 px-1 py-0.5 rounded mt-1 border border-green-500/20 font-bold">v1.2.0</span>
                  </div>
                </div>

                {/* Ext 2 */}
                <div className="p-2 bg-[#2d2d2d] border border-white/5 rounded flex gap-2.5 items-start">
                  <div className="p-1.5 bg-[#181818] rounded text-lg text-yellow-400">
                    <FaPlay />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">React Highlight Toolkit</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Advanced JSX highlighters</p>
                    <span className="inline-block text-[9px] bg-green-500/10 text-green-400 px-1 py-0.5 rounded mt-1 border border-green-500/20 font-bold">v3.4.1</span>
                  </div>
                </div>

                {/* Ext 3 */}
                <div className="p-2 bg-[#2d2d2d] border border-white/5 rounded flex gap-2.5 items-start">
                  <div className="p-1.5 bg-[#181818] rounded text-lg text-purple-400">
                    <VscGear />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Oxlint Linter Config</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Oxc ecosystem lint helper</p>
                    <span className="inline-block text-[9px] bg-green-500/10 text-green-400 px-1 py-0.5 rounded mt-1 border border-green-500/20 font-bold">v1.69.0</span>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Panel */}
            {sidebarActive === 'settings' && (
              <div className="p-4 flex-1 flex flex-col gap-3">
                <div className="text-xs text-[#8c8c8c] uppercase font-bold">Preferences</div>
                
                <div className="space-y-3 mt-2">
                  <div className="text-xs">
                    <span className="text-gray-400 block mb-1">Color Theme</span>
                    <select className="w-full bg-[#3c3c3c] border border-[#4d4d4d] text-white p-1 rounded text-xs focus:outline-none">
                      <option>Dark+ (Default Dark)</option>
                      <option>Dracula Theme</option>
                      <option>Monokai</option>
                    </select>
                  </div>

                  <div className="text-xs">
                    <span className="text-gray-400 block mb-1">Font Size</span>
                    <input type="number" defaultValue={13} className="w-full bg-[#3c3c3c] border border-[#4d4d4d] text-white p-1 rounded text-xs focus:outline-none" />
                  </div>

                  <div className="text-xs pt-2">
                    <button 
                      onClick={() => onViewModeChange('standard')}
                      className="w-full py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded text-xs transition-colors cursor-pointer text-center"
                    >
                      Restore Web GUI
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. Main Editor Window & Terminal Pane (Right side) */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#1e1e1e]">
          {/* Tabs Bar */}
          <div className="h-9 bg-[#252526] flex justify-between border-b border-[#1e1e1e] select-none overflow-x-auto scrollbar-none">
            <div className="flex items-center">
              {openTabs.map((filename) => (
                <div
                  key={filename}
                  onClick={() => setActiveTab(filename)}
                  className={`h-full px-3.5 flex items-center gap-1.5 text-xs border-r border-[#191919] cursor-pointer transition-colors relative ${
                    activeTab === filename 
                      ? 'bg-[#1e1e1e] text-white font-medium border-t-2 border-t-purple-500' 
                      : 'bg-[#2d2d2d]/60 text-[#858585] hover:text-[#cccccc] hover:bg-[#2d2d2d]/80'
                  }`}
                >
                  {getFileIcon(filename)}
                  <span>{filename}</span>
                  <button 
                    onClick={(e) => closeFile(e, filename)} 
                    className="hover:bg-white/10 rounded-full p-0.5 text-[10px] text-[#8c8c8c] hover:text-white"
                  >
                    <VscClose />
                  </button>
                </div>
              ))}
              {openTabs.length === 0 && (
                <div className="h-full px-4 flex items-center text-xs text-gray-500 italic">
                  No files open
                </div>
              )}
            </div>
            {/* Collapse / Expand Explorer Trigger for convenience */}
            {explorerCollapsed && (
              <button 
                onClick={() => setExplorerCollapsed(false)}
                className="px-3 hover:bg-[#2d2d2d] text-[#8c8c8c] hover:text-white flex items-center text-xs gap-1 cursor-pointer font-sans"
              >
                <VscChevronRight /> Show Sidebar
              </button>
            )}
          </div>

          {/* Code Viewer Panel */}
          <div className="flex-1 overflow-auto p-4 flex flex-col font-mono text-[13px] leading-relaxed relative selection:bg-purple-500/20">
            {openTabs.length > 0 && activeTab && files[activeTab] ? (
              <div className="flex gap-4">
                {/* Line numbers */}
                <div className="text-right text-[#5a5a5a] select-none text-xs w-6 flex-shrink-0 pt-0.5 font-sans leading-relaxed">
                  {files[activeTab].split('\n').map((_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>
                {/* Code body */}
                <pre 
                  className="flex-1 whitespace-pre text-xs text-[#e1e1e1] font-mono leading-relaxed overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: highlightCode(files[activeTab], activeTab) }}
                />
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-center items-center text-center text-gray-500 space-y-4">
                <VscInfo className="text-5xl text-purple-500/55 animate-pulse" />
                <h3 className="text-base font-bold text-gray-300">No active file open</h3>
                <p className="text-xs text-gray-500 max-w-sm">
                  Click a file in the workspace explorer tree on the left sidebar to read its contents here!
                </p>
                <button
                  onClick={() => openFile('README.md')}
                  className="px-4 py-1.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded border border-purple-500/20 text-xs transition-colors cursor-pointer"
                >
                  Open README.md
                </button>
              </div>
            )}
          </div>

          {/* Interactive Terminal Panel (Bottom) */}
          <div 
            className="h-56 bg-[#181818] border-t border-[#252526] flex flex-col overflow-hidden cursor-text"
            onClick={focusTerminal}
          >
            {/* Header / Tabs */}
            <div className="h-8 bg-[#212121] px-4 flex justify-between items-center text-xs border-b border-[#181818] select-none text-[#b3b3b3]">
              <div className="flex items-center gap-4">
                <span className="text-white border-b-2 border-b-purple-500 pb-1 font-semibold flex items-center gap-1 cursor-pointer">
                  <VscTerminal /> terminal
                </span>
                <span className="hover:text-white pb-1 flex items-center gap-1 cursor-not-allowed">output</span>
                <span className="hover:text-white pb-1 flex items-center gap-1 cursor-not-allowed">problems</span>
                <span className="hover:text-white pb-1 flex items-center gap-1 cursor-not-allowed">debug console</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-xs">
                <span>sh: bash</span>
                <button 
                  onClick={() => setTerminalHistory([{ type: 'output', text: 'Terminal cleared. Type "help" for options.' }, { type: 'output', text: '' }])}
                  className="hover:text-white cursor-pointer px-1.5 rounded hover:bg-white/5"
                  title="Clear Console"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Scrollable console block */}
            <div className="flex-1 p-3 overflow-y-auto font-mono text-xs leading-relaxed space-y-1 select-text">
              {terminalHistory.map((item, index) => {
                if (item.type === 'input') {
                  return (
                    <div key={index} className="flex gap-1.5">
                      <span className="text-[#27c93f]">visitor@prashant-sinha-portfolio:~$</span>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  );
                } else if (item.type === 'error') {
                  return (
                    <div key={index} className="text-[#ff5f56] pl-2 font-medium">
                      {item.text}
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="text-gray-300 min-h-[14px]">
                      {item.text}
                    </div>
                  );
                }
              })}
              <div ref={terminalEndRef} />

              {/* Console Prompt Input form */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 w-full pt-1.5">
                <span className="text-[#27c93f] flex-shrink-0 select-none">visitor@prashant-sinha-portfolio:~$</span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent text-white border-none outline-none focus:ring-0 p-0 font-mono text-xs leading-none"
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                  placeholder='Try typing "help" or "cat About.md"...'
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* VS Code Bottom Status Bar */}
      <div className="h-6 bg-purple-700/90 text-white px-3 flex justify-between items-center text-xs select-none flex-shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onViewModeChange('standard')}
            className="bg-purple-800 hover:bg-purple-900 px-2.5 py-0.5 rounded flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>← Standard Mode</span>
          </button>
          <span className="flex items-center gap-1">
            <VscSourceControl /> main
          </span>
          {gitStatus === 'modified' && (
            <span className="text-[10px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.2 rounded border border-yellow-500/30">
              * Modified
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Ln {files[activeTab] ? files[activeTab].split('\n').length : 0}, Col 1</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
}
