import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function CodeProof() {
  const [lastCommit, setLastCommit] = useState('il y a 2 heures')

  // Simule une mise à jour dynamique du badge GitHub
  useEffect(() => {
    const interval = setInterval(() => {
      const hours = Math.floor(Math.random() * 5) + 1
      setLastCommit(`il y a ${hours}h`)
    }, 10000) // Change toutes les 10 secondes pour la démo

    return () => clearInterval(interval)
  }, [])

  // Exemple de code Python pour automatisation
  const codeExample = `# Automatisation Niveau 5 - Pipeline n8n + Python
import requests
from datetime import datetime

class AutomationEngine:
    def __init__(self, api_key, webhook_url):
        self.api_key = api_key
        self.webhook_url = webhook_url
        self.session = requests.Session()

    def trigger_workflow(self, data):
        """Déclenche un workflow n8n avec monitoring"""
        headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }

        payload = {
            'timestamp': datetime.utcnow().isoformat(),
            'data': data,
            'environment': 'production'
        }

        response = self.session.post(
            self.webhook_url,
            json=payload,
            headers=headers,
            timeout=30
        )

        if response.status_code == 200:
            return {'status': 'success', 'data': response.json()}
        else:
            self._handle_error(response)

    def _handle_error(self, response):
        # Logging + alertes Slack/Discord
        error_data = {
            'code': response.status_code,
            'message': response.text,
            'timestamp': datetime.utcnow()
        }
        # Envoi vers système de monitoring
        self._send_alert(error_data)

# Infrastructure self-hosted, scalable, monitorée`

  return (
    <section id="code-proof" className="py-20 2xl:py-28 px-8 2xl:px-16 bg-gradient-to-b from-transparent to-slate-900/10">
      <div className="max-w-7xl 2xl:max-w-[85%] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 2xl:mb-20"
        >
          <span className="text-sage-600 uppercase text-sm 2xl:text-base font-semibold tracking-widest">
            Du Code, Pas du Blabla
          </span>
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-sage-700 mt-4 mb-6">
            Preuve par le Code
          </h2>
          <p className="text-lg 2xl:text-xl text-sage-600 max-w-3xl mx-auto">
            Nous ne vendons pas de prompts. Nous construisons des systèmes d'ingénierie.
          </p>
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Header du code avec badge GitHub */}
          <div className="bg-slate-800 rounded-t-3xl p-4 2xl:p-6 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-400 text-sm 2xl:text-base font-mono">automation_engine.py</span>
            </div>

            {/* Badge GitHub Live */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', repeatDelay: 2 }}
              className="flex items-center gap-2 bg-sage-500/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-sage-400/30"
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-sage-400 animate-ping"></div>
              </div>
              <svg className="w-4 h-4 2xl:w-5 2xl:h-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-xs 2xl:text-sm font-mono text-slate-300">
                Last commit: <span className="text-sage-400 font-bold">{lastCommit}</span>
              </span>
            </motion.div>
          </div>

          {/* Code avec syntax highlighting */}
          <div className="bg-slate-900 rounded-b-3xl p-6 2xl:p-8 overflow-x-auto border border-slate-800">
            <pre className="text-xs 2xl:text-sm leading-relaxed font-mono">
              <code>
                {codeExample.split('\n').map((line, index) => (
                  <div key={index} className="hover:bg-slate-800/50 px-2 -mx-2 rounded transition-colors">
                    <span className="text-slate-600 select-none mr-4">{String(index + 1).padStart(2, '0')}</span>
                    <span className={
                      line.includes('import') || line.includes('from') ? 'text-purple-400' :
                      line.includes('class') || line.includes('def') ? 'text-blue-400' :
                      line.includes('self') ? 'text-pink-400' :
                      line.includes('#') ? 'text-slate-500 italic' :
                      line.includes("'") || line.includes('"') ? 'text-green-400' :
                      line.includes('return') || line.includes('if') || line.includes('else') ? 'text-orange-400' :
                      'text-sage-400'
                    }>
                      {line}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>

          {/* Tags technologiques en bas */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {['Python', 'n8n', 'REST API', 'Self-Hosted', 'Monitoring', 'Scalable'].map((tech) => (
              <span
                key={tech}
                className="bg-slate-800 text-slate-300 px-4 py-2 2xl:px-5 2xl:py-3 rounded-lg text-xs 2xl:text-sm font-mono border border-slate-700 hover:border-sage-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 2xl:mt-16"
        >
          <p className="text-sage-600 text-base 2xl:text-lg mb-6">
            Vous voulez voir nos architectures complètes ? Parlons de votre projet.
          </p>
          <a
            href="#audit"
            className="inline-block bg-gradient-to-r from-sage-400 to-sage-500 hover:from-sage-500 hover:to-sage-600 text-white font-bold py-4 2xl:py-5 px-8 2xl:px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg text-base 2xl:text-lg"
          >
            1h d'audit gratuit
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CodeProof
