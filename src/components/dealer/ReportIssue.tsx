import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

export default function ReportIssue() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    issueType: 'order',
    subject: '',
    description: '',
    priority: 'medium',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Issue reported:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        issueType: 'order',
        subject: '',
        description: '',
        priority: 'medium',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-gray-900 mb-2">Issue Reported Successfully!</h2>
        <p className="text-gray-600">Our team will review your issue and get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-gray-900 mb-4">{t('report.issue')}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Issue Type</label>
          <select
            value={formData.issueType}
            onChange={(e) => setFormData({...formData, issueType: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            required
          >
            <option value="order">Order Related</option>
            <option value="payment">Payment Related</option>
            <option value="delivery">Delivery Issue</option>
            <option value="quality">Quality Issue</option>
            <option value="billing">Billing Issue</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            placeholder="Brief description of the issue"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Detailed Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            rows={5}
            placeholder="Please provide detailed information about the issue"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({...formData, priority: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#3B4998] text-white py-3 rounded-lg hover:bg-[#2d3870] transition-colors"
        >
          {t('submit')} Issue
        </button>
      </form>
    </div>
  );
}
