import React from 'react';
import { Link } from 'react-router-dom';

const BentoCard = ({ 
  title, 
  content, 
  icon, 
  size = 'md', 
  color = 'white',
  isClickable = false,
  link = '#',
  className = '',
  children 
}) => {
  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 sm:col-span-2 row-span-1', 
    lg: 'col-span-1 sm:col-span-2 row-span-2',
    xl: 'col-span-1 sm:col-span-2 md:col-span-3 row-span-2',
    full: 'col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6 row-span-1',
    xxl: 'col-span-1 sm:col-span-2 md:col-span-3 row-span-2',
    hero: 'col-span-1 sm:col-span-2 md:col-span-4 row-span-2',
    wide: 'col-span-1 row-span-2 sm:col-span-2 sm:row-span-1 md:col-span-3',
    tall: 'col-span-1 row-span-2'
  };



  const colorClasses = {
    white: 'bg-white/70 dark:bg-white/10 border-slate-200/50 dark:border-slate-600/30 backdrop-blur-sm',
    blue: 'bg-gradient-to-br from-blue-50/70 to-blue-100/70 dark:from-blue-50/10 dark:to-blue-100/10 border-blue-200/50 dark:border-blue-400/30 backdrop-blur-sm',
    purple: 'bg-gradient-to-br from-purple-50/70 to-purple-100/70 dark:from-purple-50/10 dark:to-purple-100/10 border-purple-200/50 dark:border-purple-400/30 backdrop-blur-sm',
    green: 'bg-gradient-to-br from-green-50/70 to-green-100/70 dark:from-green-50/10 dark:to-green-100/10 border-green-200/50 dark:border-green-400/30 backdrop-blur-sm',
    orange: 'bg-gradient-to-br from-orange-50/70 to-orange-100/70 dark:from-orange-50/10 dark:to-orange-100/10 border-orange-200/50 dark:border-orange-400/30 backdrop-blur-sm',
    gray: 'bg-gradient-to-br from-gray-50/70 to-gray-100/70 dark:from-gray-50/10 dark:to-gray-100/10 border-gray-200/50 dark:border-gray-400/30 backdrop-blur-sm'
  };

  const cardContent = (
    <div className={`
      ${sizeClasses[size]} 
      ${colorClasses[color]}
      ${isClickable ? 'bento-card-clickable' : ''}
      bento-card 
      ${className}
      group
    `}>
      {icon && (
        <div className="text-2xl mb-4 ">
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="text-lg font-semibold bento-title mb-3 transition-colors">
          {title}
        </h3>
      )}
      
      {content && (
        <p className="text-sm leading-relaxed bento-content transition-colors">
          {content}
        </p>
      )}
      
      {children}
      
      {isClickable && !children && (
        <div className="absolute bottom-4 right-4 bento-icon transition-colors">
          {title === "Descargar CV" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      )}
    </div>
  );

  if (isClickable && link.startsWith('/')) {
    // Si es un archivo PDF, tratarlo como descarga
    if (link.endsWith('.pdf')) {
      return (
        <a href={link} download target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      );
    }
    // Si no es PDF, usar navegación interna
    return <Link to={link}>{cardContent}</Link>;
  } else if (isClickable && link.startsWith('http')) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default BentoCard;