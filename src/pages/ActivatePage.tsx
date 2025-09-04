import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMouseGradient } from '../hooks/useMouseGradient';
import { Upload, Send, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const ActivatePage: React.FC = () => {
  const { t } = useTranslation();
  const gradientRef = useMouseGradient();
  const [formData, setFormData] = useState({
    townName: '',
    responsiblePerson: '',
    email: '',
    document: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, document: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div ref={gradientRef} className="min-h-screen relative">
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-emerald-50/20 transition-all duration-1000 ease-out -z-10" />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              {t('activate.title')}
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              {t('activate.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/60"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="townName" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('activate.form.townName')}
                  </label>
                  <input
                    type="text"
                    id="townName"
                    name="townName"
                    value={formData.townName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder={t('activate.form.townNamePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="responsiblePerson" className="block text-sm font-semibold text-gray-900 mb-3">
                    {t('activate.form.responsiblePerson')}
                  </label>
                  <input
                    type="text"
                    id="responsiblePerson"
                    name="responsiblePerson"
                    value={formData.responsiblePerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder={t('activate.form.responsiblePersonPlaceholder')}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                  {t('activate.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder={t('activate.form.emailPlaceholder')}
                  required
                />
              </div>

              <div>
                <label htmlFor="document" className="block text-sm font-semibold text-gray-900 mb-3">
                  {t('activate.form.document')}
                </label>
                <p className="text-sm text-gray-600 mb-4">
                  {t('activate.form.documentDescription')}
                </p>
                <div className="relative">
                  <input
                    type="file"
                    id="document"
                    name="document"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    required
                  />
                  <label
                    htmlFor="document"
                    className="w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary transition-all duration-300 bg-white/50 backdrop-blur-sm cursor-pointer flex flex-col items-center justify-center space-y-3 group"
                  >
                    <Upload className="h-8 w-8 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">
                        {formData.document ? formData.document.name : t('activate.form.selectFile')}
                      </p>
                      <p className="text-xs text-gray-500">
                        {t('activate.form.fileTypes')}
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>{t('activate.form.submit')}</span>
              </motion.button>

              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>{t('activate.form.contact')}</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivatePage;