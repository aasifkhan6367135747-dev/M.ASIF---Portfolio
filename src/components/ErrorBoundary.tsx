import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#08090B] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-3xl bg-[#121418] border border-white/10 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-display">Something went wrong</h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              An unexpected error occurred while rendering the page.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#7C5CFF] text-white hover:bg-[#6846f6] transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Website</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
