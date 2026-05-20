import { useState, useEffect } from 'react';
import { 
  FileText, 
  Sparkles, 
  Edit3, 
  BarChart3, 
  Download, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Upload, 
  Menu, 
  X,
  TrendingUp,
  Layers,
  Briefcase,
  ShieldCheck,
  Globe,
  Link,
  Plus
} from 'lucide-react';

export default function CareerLensLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('match');
  
  // Interactive Hero Simulator States
  const [simScore, setSimScore] = useState(45);
  const [simStatus, setSimStatus] = useState('Reading your resume...');
  const [simStep, setSimStep] = useState(0);

  // Automatic Simulator loop for the Hero Section
  useEffect(() => {
    const interval = setInterval(() => {
      setSimStep((prev) => {
        const next = (prev + 1) % 4;
        if (next === 0) {
          setSimScore(45);
          setSimStatus('Scanning for missing keywords...');
        } else if (next === 1) {
          setSimScore(68);
          setSimStatus('Comparing to the job description...');
        } else if (next === 2) {
          setSimScore(88);
          setSimStatus('Fixing structural formatting...');
        } else if (next === 3) {
          setSimScore(96);
          setSimStatus('Perfect! Ready to apply.');
        }
        return next;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      title: "Smart Job Matching",
      description: "Paste any job description alongside your resume. Our system checks your compatibility instantly and gives you a clear match score.",
    },
    {
      icon: <Edit3 className="w-5 h-5 text-indigo-600" />,
      title: "Interactive Resume Editor",
      description: "Fix weaknesses right on the screen. Swap between professional templates instantly while receiving live sentence-rewriting tips.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: "Career Tracking",
      description: "Discover exactly what skills are trending in your target industry and see step-by-step learning roadmaps to stay competitive.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      title: "Progress Dashboard",
      description: "Watch your resume score improve over time with clean, easy-to-read charts that track your growth across multiple variations.",
    },
    {
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      title: "Manage Multiple Resumes",
      description: "Safely save and organize up to 5 unique versions of your resume per day, tailored perfectly to different industries or roles.",
    },
    {
      icon: <Download className="w-5 h-5 text-indigo-600" />,
      title: "One-Click PDF Export",
      description: "When you are done editing, export your polished resume as a perfectly styled PDF or Word document that passes employer systems.",
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 flex items-center justify-center rounded-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">CareerLens</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How It Works</a>
              <a href="#insights" className="hover:text-indigo-600 transition-colors">Live Preview</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors px-3 py-2">
                Sign In
              </button>
              <button className="text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors shadow-sm">
                Create Free Account
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="p-2 text-zinc-600 hover:text-zinc-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-4 space-y-2">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50">How It Works</a>
            <a href="#insights" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:bg-zinc-50">Preview</a>
            <div className="pt-4 border-t border-zinc-200 flex flex-col gap-2">
              <button className="w-full text-center py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50">Sign In</button>
              <button className="w-full text-center py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Create Free Account</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Presentation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-indigo-700">
              <Sparkles className="w-3.5 h-3.5" /> Built for Modern Job Seekers
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
              Get more interviews with a <span className="text-indigo-600">smart resume</span>.
            </h1>
            <p className="text-zinc-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Instantly see how well your resume matches any job description. Fix critical missing details, use friendly AI suggestions to rewrite phrases, and download an application-ready file in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md group">
                Check Your Resume Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-6 py-3.5 font-semibold rounded-xl bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200 transition-colors">
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Live Simulation Widget */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 shadow-xl max-w-md mx-auto">
              
              {/* Simulator Title/Status */}
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></div>
                  <span className="text-xs font-semibold text-zinc-700">{simStatus}</span>
                </div>
                <span className="text-[11px] font-medium text-zinc-500 bg-zinc-200 px-2 py-0.5 rounded">
                  Live Scanner Demo
                </span>
              </div>

              {/* Match Score Display Block */}
              <div className="flex flex-col items-center justify-center py-6 bg-white border border-zinc-200 rounded-xl mb-4 shadow-sm">
                <span className="text-5xl font-black text-zinc-900 font-mono tracking-tight transition-all duration-500">
                  {simScore}%
                </span>
                <p className="text-xs font-bold text-zinc-500 tracking-wider uppercase mt-1">Overall Match Score</p>
              </div>

              {/* Dynamic Checkup Details */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-zinc-500 tracking-wide uppercase pl-0.5">Quick Feedback Checklist</div>
                
                <div className="p-3 bg-white border border-zinc-200 rounded-xl space-y-2.5 text-xs shadow-sm">
                  <div className="flex items-center gap-2 text-zinc-700 font-medium">
                    {simStep >= 2 ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-amber-600" />}
                    <span>{simStep >= 2 ? "Keywords matched perfectly!" : "Missing important keywords found:"}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <span className={`px-2 py-0.5 rounded text-[11px] border ${simStep >= 2 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-zinc-100 text-zinc-600 border-zinc-200'}`}>
                      Project Management
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[11px] border ${simStep >= 3 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-zinc-100 text-zinc-600 border-zinc-200'}`}>
                      Team Collaboration
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 border border-zinc-200 rounded text-[11px]">
                      Budget Tracking
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* NEW COLOR-RICH, HIGH-CONTRAST STATS STRIP */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Stat Card 1 */}
            <div className="bg-white border-l-4 border-indigo-600 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg shrink-0">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-zinc-950 font-mono">93%</div>
                <p className="text-sm font-bold text-zinc-900 mt-0.5">Land an Interview Fast</p>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">The majority of active platform users receive direct interview callbacks within 30 days of application optimization.</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white border-l-4 border-emerald-500 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg shrink-0">
                <Sparkles className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-zinc-950 font-mono">Instant</div>
                <p className="text-sm font-bold text-zinc-900 mt-0.5">Real-Time Assistance</p>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Get immediate suggestions, structural checks, and formatting alerts simultaneously as you type or adjust your text layout.</p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white border-l-4 border-amber-500 rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-amber-50 rounded-lg shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-3xl font-black text-zinc-950 font-mono">100%</div>
                <p className="text-sm font-bold text-zinc-900 mt-0.5">Safe & Secure Vault</p>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Your professional history files are completely private, isolated in your personal dashboard space, and never shared publicly.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES GRID */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Everything you need to optimize your job search.
          </h2>
          <p className="text-zinc-500 text-base">
            No complicated setup. CareerLens gives you straightforward tools designed to make your resume clean, clear, and ready to stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 bg-indigo-50 flex items-center justify-center rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-zinc-900 mb-1.5">{item.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISUALLY UPGRADED WORKFLOW SECTION (With Embedded Code-Generated Visuals) */}
      <section id="how-it-works" className="bg-zinc-50 border-y border-zinc-200 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Four simple steps to a better resume
            </h2>
            <p className="text-zinc-500 text-base">
              Here is exactly how CareerLens guides you from a rough draft to a finalized template.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 Card */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:border-indigo-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Upload Your Resume</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">Drop your existing PDF or Word file into your secure dashboard workspace.</p>
              </div>
              
              {/* Image Illustration Mockup 1 */}
              <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200 text-center space-y-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                  <Upload className="w-5 h-5 animate-bounce" />
                </div>
                <div className="text-[11px] font-bold text-zinc-700">resume_2026.pdf</div>
                <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-[100%]"></div>
                </div>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:border-emerald-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-black text-sm flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Paste a Job Link</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">Add the text of the job description you want to apply for to start the checkup.</p>
              </div>

              {/* Image Illustration Mockup 2 */}
              <div className="bg-zinc-50 rounded-xl p-3.5 border border-zinc-200 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 bg-white border border-zinc-200 rounded px-2 py-1 text-[11px] text-zinc-500 font-mono">
                  <Link className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span className="truncate">careers.company.com/job</span>
                </div>
                <div className="bg-emerald-600 text-white text-center font-bold py-1 rounded text-[11px] shadow-sm">
                  Analyze Post Text
                </div>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:border-amber-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-black text-sm flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Make Easy Edits</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">Follow clear, real-time wording tips to add missing keywords and close gaps.</p>
              </div>

              {/* Image Illustration Mockup 3 */}
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] bg-amber-50 border border-amber-200 text-amber-800 rounded px-2 py-1 font-medium">
                  <span>Missing Keyword</span>
                  <Plus className="w-3 h-3" />
                </div>
                <div className="flex items-center justify-between text-[11px] bg-emerald-50 border border-emerald-200 text-emerald-800 rounded px-2 py-1 font-medium">
                  <span>Fixed Phrase</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
            </div>

            {/* Step 4 Card */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between group hover:border-rose-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white font-black text-sm flex items-center justify-center mb-4">
                  4
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-1">Download & Apply</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">Export a flawless, recruiter-approved document and track your application.</p>
              </div>

              {/* Image Illustration Mockup 4 */}
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200 text-center space-y-1">
                <div className="bg-zinc-900 text-white font-bold py-1.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-md">
                  <Download className="w-3.5 h-3.5 text-rose-400" /> Download PDF
                </div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready for Application
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE PREVIEW TABS SECTION */}
      <section id="insights" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Tab Selection List */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 leading-tight">
              See the simple dashboard features in action.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Click through the options below to preview how our platform handles your data to build clear, powerful results.
            </p>
            
            <div className="space-y-2">
              <button 
                onClick={() => setActiveTab('match')}
                className={`w-full text-left p-4 rounded-xl border flex items-center gap-3 transition-all ${activeTab === 'match' ? 'bg-white border-indigo-600 shadow-sm' : 'bg-white border-zinc-200 hover:bg-zinc-50'}`}
              >
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">Instant Resume Checkup</div>
                  <div className="text-xs text-zinc-500 mt-0.5">See clear percentages showing how closely you match.</div>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('editor')}
                className={`w-full text-left p-4 rounded-xl border flex items-center gap-3 transition-all ${activeTab === 'editor' ? 'bg-white border-indigo-600 shadow-sm' : 'bg-white border-zinc-200 hover:bg-zinc-50'}`}
              >
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <Edit3 className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">AI-Powered Rewriting</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Get simple bullet point suggestions that sound confident.</div>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('trends')}
                className={`w-full text-left p-4 rounded-xl border flex items-center gap-3 transition-all ${activeTab === 'trends' ? 'bg-white border-indigo-600 shadow-sm' : 'bg-white border-zinc-200 hover:bg-zinc-50'}`}
              >
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-zinc-900">Skill Trends & Analytics</div>
                  <div className="text-xs text-zinc-500 mt-0.5">Find out which software and frameworks employers are looking for.</div>
                </div>
              </button>
            </div>
          </div>

          {/* Visual Showcase Panel */}
          <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 rounded-2xl p-6 min-h-[340px] flex flex-col justify-between shadow-sm">
            
            {activeTab === 'match' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-sm font-bold text-zinc-900">Resume Optimization Score</span>
                  <span className="text-xs font-semibold text-zinc-500">Live Feedback</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600">The tool reads text layout and sections to verify if a recruiter's tracking software can read your details properly.</p>
                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1 text-zinc-700">
                      <span>Job Description Agreement</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[85%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-1 text-zinc-700">
                      <span>Formatting Layout Cleanness</span>
                      <span className="font-bold">95%</span>
                    </div>
                    <div className="w-full bg-zinc-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[95%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'editor' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-sm font-bold text-zinc-900">AI Writing Assistant</span>
                  <span className="text-xs text-indigo-600 font-semibold">One-Click Polish</span>
                </div>
                <div className="bg-white border border-zinc-200 rounded-xl p-3.5 space-y-1">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Your Original Wording</div>
                  <p className="text-xs text-zinc-500 line-through">"I helped with client issues and kept track of support emails daily."</p>
                </div>
                <div className="bg-white border border-indigo-100 rounded-xl p-3.5 space-y-1 shadow-inner">
                  <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wide flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Suggested Improvement
                  </div>
                  <p className="text-xs text-zinc-900 font-medium">"Managed daily high-volume client communications, resolving technical issues to improve overall customer satisfaction scores."</p>
                </div>
              </div>
            )}

            {activeTab === 'trends' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <span className="text-sm font-bold text-zinc-900">Highest In-Demand Skills</span>
                  <span className="text-xs text-zinc-500">Industry Trends</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-xl flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <div className="font-bold text-zinc-900">Agile & Scrum Flow</div>
                    <div className="text-zinc-500 text-[11px]">Requested in 74% of local open job posts</div>
                  </div>
                  <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">High Demand</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-xl flex items-center justify-between text-xs shadow-sm">
                  <div>
                    <div className="font-bold text-zinc-900">Data Reporting Toolsets</div>
                    <div className="text-zinc-500 text-[11px]">Requested in 48% of local open job posts</div>
                  </div>
                  <span className="text-indigo-700 font-bold bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">Growing Fast</span>
                </div>
              </div>
            )}

            <div className="border-t border-zinc-200 pt-3 text-right text-[11px] text-zinc-400">
              Interactive View Profile Preview
            </div>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION (CTA) SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-indigo-600 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-black tracking-tight max-w-xl mx-auto">
            Ready to pass employer checks and land more interviews?
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base max-w-md mx-auto">
            Upload your resume, analyze it against open jobs, and start optimizing with friendly, easy-to-use AI assistance today.
          </p>
          <div className="pt-2">
            <button className="inline-flex items-center gap-2 px-6 py-3.5 font-bold rounded-xl bg-white text-indigo-600 hover:bg-zinc-50 transition-colors shadow-md group">
              Start Free Resume Analysis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLY IMPROVED MULTI-COLUMN COMPREHENSIVE FOOTER */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12 text-zinc-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-zinc-200">
            
            {/* Branding Column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-indigo-600 flex items-center justify-center rounded">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-zinc-950 font-extrabold tracking-tight">CareerLens</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Building clarity and matching precision into the job search pipeline. Optimize your materials safely.
              </p>
            </div>

            {/* Links Column 1: Legal / Compliance */}
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Legal Safeguards</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#privacy" className="hover:text-indigo-600 transition-colors">Privacy Information</a></li>
                <li><a href="#terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                <li><a href="#compliance" className="hover:text-indigo-600 transition-colors">Data Processing Addendum</a></li>
              </ul>
            </div>

            {/* Links Column 2: Platform Infrastructure */}
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Platform Safety</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#security" className="hover:text-indigo-600 transition-colors">User Security Vault</a></li>
                <li><a href="#encryption" className="hover:text-indigo-600 transition-colors">File Encryption Audits</a></li>
                <li><a href="#status" className="hover:text-indigo-600 transition-colors">System Status Monitor</a></li>
              </ul>
            </div>

            {/* Links Column 3: Global Services */}
            <div>
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-3">Global Connectivity</h4>
              <div className="flex items-center gap-2 text-xs text-zinc-500 bg-white border border-zinc-200 rounded-lg p-2.5 shadow-sm">
                <Globe className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Multi-region Node Active</span>
              </div>
            </div>

          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-medium">
            <div>CareerLens Platform © 2026. All rights reserved.</div>
            <div className="flex gap-4 text-zinc-500">
              <span>Secure Connection AES-256</span>
              <span>•</span>
              <span>Optimized Parse Pipelines</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}