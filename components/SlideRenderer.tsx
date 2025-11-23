import React from 'react';
import { motion } from 'framer-motion';
import { SlideData, SlideType } from '../types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

interface SlideRendererProps {
  data: SlideData;
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 }
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ data }) => {
  const Icon = data.icon;

  const renderContent = () => {
    switch (data.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            {Icon && <motion.div variants={itemVariants}><Icon size={120} className="text-blue-500 mb-4" /></motion.div>}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              {data.title}
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-slate-300 max-w-3xl">
              {data.subtitle}
            </motion.h2>
            {data.highlight && (
              <motion.div variants={itemVariants} className="mt-8 px-8 py-4 bg-blue-900/30 border border-blue-500/50 rounded-full text-blue-200">
                {data.highlight}
              </motion.div>
            )}
          </div>
        );

      case SlideType.QUOTE:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-12">
             <motion.div variants={itemVariants} className="mb-8">
                <span className="text-8xl text-blue-500 opacity-20 font-serif">"</span>
             </motion.div>
             {data.content?.map((text, idx) => (
               <motion.p key={idx} variants={itemVariants} className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-slate-100">
                 {text}
               </motion.p>
             ))}
             {data.highlight && (
                <motion.p variants={itemVariants} className="text-xl text-teal-400 font-bold tracking-widest uppercase mt-8">
                  — {data.highlight}
                </motion.p>
             )}
          </div>
        );

      case SlideType.SECTION:
        return (
          <div className="flex flex-row items-center justify-between h-full px-16">
            <div className="w-1/2">
               <motion.div variants={itemVariants} className="w-24 h-1 bg-blue-500 mb-8"></motion.div>
               <motion.h1 variants={itemVariants} className="text-6xl font-bold text-white mb-6">
                 {data.title}
               </motion.h1>
               <motion.p variants={itemVariants} className="text-2xl text-slate-400">
                 {data.subtitle}
               </motion.p>
            </div>
            <div className="w-1/2 flex justify-center">
              {Icon && <motion.div variants={itemVariants}><Icon size={240} className="text-slate-700 opacity-50" /></motion.div>}
            </div>
          </div>
        );

      case SlideType.CHART:
        return (
           <div className="flex flex-col md:flex-row h-full p-8 md:p-16 gap-12">
             <div className="flex-1 flex flex-col justify-center">
                <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">{data.title}</motion.h2>
                <motion.h3 variants={itemVariants} className="text-2xl text-blue-400 mb-8">{data.subtitle}</motion.h3>
                {data.content && data.content.map((c, i) => (
                  <motion.p key={i} variants={itemVariants} className="text-lg text-slate-300 mb-4 leading-relaxed">{c}</motion.p>
                ))}
                {data.highlight && (
                  <motion.div variants={itemVariants} className="mt-6 p-4 bg-teal-900/30 border-l-4 border-teal-500 text-teal-200">
                    {data.highlight}
                  </motion.div>
                )}
             </div>
             <div className="flex-1 bg-slate-800/50 rounded-xl p-6 border border-slate-700 flex flex-col justify-center">
                <motion.div variants={itemVariants} className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                      />
                      <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                        {data.chartData?.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#14b8a6'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
             </div>
           </div>
        );

      case SlideType.PROCESS:
        return (
          <div className="flex flex-col h-full p-16">
            <div className="text-center mb-12">
              <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-2">{data.title}</motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-slate-400">{data.subtitle}</motion.p>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-6">
               {data.bullets?.map((bullet, idx) => (
                 <motion.div 
                    key={idx} 
                    variants={itemVariants} 
                    className="flex items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors"
                 >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl mr-6">
                      {idx + 1}
                    </div>
                    <div className="text-xl md:text-2xl text-slate-200">
                      {bullet}
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        );

      default: // Grid or Content
        return (
          <div className="flex flex-col md:flex-row h-full p-8 md:p-16 gap-12">
            <div className="flex-1 flex flex-col justify-center">
              <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-6">
                 {Icon && <Icon className="text-teal-400" size={32}/>}
                 <h2 className="text-4xl font-bold text-white">{data.title}</h2>
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-2xl text-blue-400 mb-8 font-light">{data.subtitle}</motion.h3>
              
              {data.content && (
                <div className="mb-8 space-y-4">
                  {data.content.map((para, i) => (
                    <motion.p key={i} variants={itemVariants} className="text-lg text-slate-300 leading-relaxed">
                      {para}
                    </motion.p>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {data.bullets?.map((bullet, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start">
                    <span className="mr-3 text-teal-500 text-xl">•</span>
                    <span className="text-lg text-slate-200">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <motion.div 
                variants={itemVariants} 
                className="w-full h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center relative overflow-hidden group shadow-2xl"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                
                {Icon && <Icon size={120} className="text-slate-600 group-hover:text-blue-500/50 transition-colors duration-500" />}
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-full"
    >
      {renderContent()}
    </motion.div>
  );
};