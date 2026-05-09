import { Image } from 'lucide-react';

interface Props {
  className?: string;
  text?: string;
}

export default function PlaceholderImage({ className = '', text = 'Put Image Here' }: Props) {
  return (
    <div className={`flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl overflow-hidden relative ${className}`}>
      <Image className="w-8 h-8 text-slate-400 dark:text-slate-500 mb-2" />
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{text}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 dark:via-white/5 dark:to-white/10 pointer-events-none" />
    </div>
  );
}
