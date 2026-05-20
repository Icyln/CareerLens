import { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  ArrowLeft,
  Briefcase, 
  ShieldCheck,
  ChevronRight,
  Sparkle
} from 'lucide-react';

export default function CareerLensAuth() {
  // Toggle between Login and Sign Up
  const [isLogin, setIsLogin] = useState(false);
  
  // Track selected role for Sign Up
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  return (
    <div className="min-h-screen bg-white flex text-zinc-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* LEFT COLUMN: FORM SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32 py-16 relative">
        
        {/* Back to Home Navigation */}
        <a 
          href="/" 
          className="absolute top-8 left-6 sm:left-12 flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </a>

        <div className="max-w-md w-full mx-auto mt-8 lg:mt-0">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-sm text-zinc-500 font-medium leading-relaxed">
              {isLogin 
                ? 'Enter your details to access your dashboard and resume workspace.' 
                : 'Join today to analyze your resume against thousands of job descriptions.'}
            </p>
          </div>

          {/* Social Auth Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all text-sm font-bold text-zinc-700 shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all text-sm font-bold text-zinc-700 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-zinc-200 flex-1"></div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Or continue with email</span>
            <div className="h-px bg-zinc-200 flex-1"></div>
          </div>

          {/* Form Content Block */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name Input (Only for Sign Up) */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <User className="w-4 h-4 text-zinc-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400 font-medium"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-zinc-400" />
                </div>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400 font-medium"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-zinc-700">Password</label>
                {isLogin && (
                  <a href="#forgot" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-zinc-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-400 font-medium"
                  required
                />
              </div>
            </div>

            {/* Role Selection (Only for Sign Up) */}
            {!isLogin && (
              <div className="pt-2 pb-2">
                <label className="block text-xs font-bold text-zinc-700 mb-2">I am signing up as a...</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={() => setRole('user')}
                    className={`flex items-center justify-center gap-2 py-2.5 border rounded-xl text-xs font-bold transition-all ${role === 'user' ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm' : 'bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}
                  >
                    <Briefcase className={`w-3.5 h-3.5 ${role === 'user' ? 'text-blue-600' : 'text-zinc-400'}`} />
                    Job Seeker
                  </button>
                  <button 
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`flex items-center justify-center gap-2 py-2.5 border rounded-xl text-xs font-bold transition-all ${role === 'admin' ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm' : 'bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50'}`}
                  >
                    <ShieldCheck className={`w-3.5 h-3.5 ${role === 'admin' ? 'text-blue-600' : 'text-zinc-400'}`} />
                    Platform Admin
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-md group"
              >
                {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Toggle Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600 font-medium">
              {isLogin ? "Don't have an account yet?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {isLogin ? 'Sign up for free' : 'Log in here'}
              </button>
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN: REFRESHING LIGHT BLUE VISUAL PANEL (HIGH CONTRAST) */}
      <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden flex-col justify-center items-center p-16">
        
        {/* Soft decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 max-w-md w-full space-y-10">
          
          {/* Section Introduction */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-white/20 border border-white/30 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
              <Sparkle className="w-3.5 h-3.5 text-amber-200 fill-amber-200 animate-pulse" /> 
              CareerLens Workspace Preview
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              The science of landing an interview.
            </h2>
            <p className="text-white/90 text-sm font-medium leading-relaxed">
              Bypass algorithmic tracking filters with clear, professional layout formatting and real-time sentence restructuring metrics.
            </p>
          </div>

          {/* Clean Glassmorphic UI Simulator Card */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-6 shadow-2xl space-y-5">
            
            {/* Mock Header row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white text-blue-600 flex items-center justify-center text-xs font-black shadow-md">
                  96%
                </div>
                <div>
                  <div className="text-white font-bold text-xs tracking-wide">Resume Optimized</div>
                  <div className="text-white/80 text-[11px] font-medium">ATS Check Passed</div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold text-blue-950 bg-white px-2.5 py-1 rounded-full shadow-sm tracking-wider uppercase">
                Ready to Apply
              </span>
            </div>

            {/* Interactive Timeline Flow Mockup */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-950 flex items-center justify-center shrink-0 border border-white/40 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">Sentence Flow Improvement</div>
                  <p className="text-[11px] text-white/85 leading-normal font-medium">Swapped weak action phrases for strong metrics-focused wording.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0 border border-white/10">
                  <ChevronRight className="w-3 h-3 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white/90">Industry Keyword Injection</div>
                  <p className="text-[11px] text-white/75 leading-normal font-medium">Analyzed target posting to align core tool skill requirements.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sleek, Dimmed Platform Highlights */}
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/15">
            <div>
              <div className="text-xl font-black text-white tracking-tight">100+</div>
              <p className="text-[10px] font-bold text-white/75 uppercase tracking-wider mt-0.5">Resumes Processed</p>
            </div>
            <div>
              <div className="text-xl font-black text-white tracking-tight">100% Secure</div>
              <p className="text-[10px] font-bold text-white/75 uppercase tracking-wider mt-0.5">Isolated Vault Spaces</p>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}